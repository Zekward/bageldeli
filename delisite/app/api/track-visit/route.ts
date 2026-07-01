import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
    // Parse the body defensively; malformed JSON must not throw.
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid JSON body" },
            { status: 400 }
        );
    }

    // Validate the expected payload shape: { visitorId: string, source?: string }.
    if (typeof body !== "object" || body === null) {
        return NextResponse.json(
            { ok: false, error: "Invalid request body" },
            { status: 400 }
        );
    }

    const { visitorId, source } = body as {
        visitorId?: unknown;
        source?: unknown;
    };

    if (typeof visitorId !== "string" || visitorId.trim() === "") {
        return NextResponse.json(
            { ok: false, error: "Missing or invalid visitorId" },
            { status: 400 }
        );
    }

    const visitSource = typeof source === "string" ? source : null;

    try {
        const supabase = getSupabase();

        const { data, error: selectError } = await supabase
            .from("visitors")
            .select("visitor_id, visit_count")
            .eq("visitor_id", visitorId)
            .single();

        // `.single()` returns an error when no row matches; treat that as a
        // new visitor rather than a failure.
        if (selectError && selectError.code !== "PGRST116") {
            throw selectError;
        }

        if (data) {
            const { error: updateError } = await supabase
                .from("visitors")
                .update({
                    visit_count: data.visit_count + 1,
                    last_seen: new Date(),
                })
                .eq("visitor_id", visitorId);

            if (updateError) throw updateError;
        } else {
            const { error: insertError } = await supabase
                .from("visitors")
                .insert({
                    visitor_id: visitorId,
                    source: visitSource,
                });

            if (insertError) throw insertError;
        }
    } catch (err) {
        // Log internally; never leak error details/stack traces to the client.
        console.error("Failed to track visit:", err);
        return NextResponse.json(
            { ok: false, error: "Failed to track visit" },
            { status: 500 }
        );
    }

    return NextResponse.json({ ok: true });
}

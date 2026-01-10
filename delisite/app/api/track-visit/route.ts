import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const visitors = new Map();

export async function POST(req: Request) {
    const { visitorId, source } = await req.json();

    const { data } = await supabase
        .from("visitors")
        .select("visitor_id, visit_count")
        .eq("visitor_id", visitorId)
        .single();
    
    if (data) {
        await supabase
            .from("visitors")
            .update({
                visit_count: data.visit_count + 1,
                last_seen: new Date(),
            })
            .eq("visitor_id", visitorId);
    } else {
        await supabase.from("visitors").insert({
            visitor_id: 
                visitorId, 
                source,
        });
    }

    return NextResponse.json({ ok: true });
}
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  await supabase.from("discount_claims").insert({
    visitor_id: body.visitorId,
    first_name: body.firstName,
    last_name: body.lastName,
    phone: body.phone,
    email: body.email,
  });

  return NextResponse.json({ ok: true });
}
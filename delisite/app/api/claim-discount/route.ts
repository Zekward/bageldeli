import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /[0-9]{7,}/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function badRequest(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  if (typeof body !== "object" || body === null) {
    return badRequest("Invalid request body.");
  }

  const { visitorId, firstName, lastName, phone, email } = body as Record<
    string,
    unknown
  >;

  if (!isNonEmptyString(firstName)) return badRequest("First name is required.");
  if (!isNonEmptyString(lastName)) return badRequest("Last name is required.");
  if (!isNonEmptyString(phone)) return badRequest("Phone number is required.");
  if (!isNonEmptyString(email)) return badRequest("Email is required.");

  // Digits-only check tolerates spaces, dashes and parentheses in the input.
  if (!PHONE_RE.test(phone.replace(/[\s().-]/g, ""))) {
    return badRequest("Enter a valid phone number.");
  }
  if (!EMAIL_RE.test(email)) return badRequest("Enter a valid email address.");

  try {
    const { error } = await getSupabase().from("discount_claims").insert({
      visitor_id: isNonEmptyString(visitorId) ? visitorId : null,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
    });

    if (error) throw error;
  } catch (err) {
    console.error("Failed to record discount claim:", err);
    return NextResponse.json(
      { ok: false, error: "Could not record claim." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

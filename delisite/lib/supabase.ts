import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Returns a lazily-created Supabase client.
 *
 * The client is built on first use rather than at module load, so importing this
 * file (e.g. during `next build` page-data collection) never throws when the
 * environment isn't configured. Missing config fails loudly, only when actually used.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Report exactly which vars are absent so failures are actionable.
  const missing: string[] = [];
  if (!url) missing.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!key) missing.push("SUPABASE_SERVICE_ROLE_KEY");
  if (missing.length > 0) {
    throw new Error(`Supabase env vars missing: ${missing.join(", ")}`);
  }

  client = createClient(url!, key!);
  return client;
}

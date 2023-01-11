import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseBrowserClient() {
  return createBrowserSupabaseClient(supabaseUrl, supabaseAnonKey);
}

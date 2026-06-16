import { supabase } from "@/lib/supabase";

export async function findValidOtp(email: string, code: string) {
  return supabase
    .from("email_otps")
    .select("*")
    .eq("email", email)
    .eq("code", code)
    .eq("used", false)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();
}
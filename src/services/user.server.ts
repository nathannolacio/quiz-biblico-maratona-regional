import { supabase } from "@/lib/supabase";

export async function findUserByEmail(email: string) {
  return supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();
}

export async function createUser(email: string) {
  return supabase
    .from("users")
    .insert({
      id: crypto.randomUUID(),
      email,
      name: null,
    })
    .select()
    .single();
}
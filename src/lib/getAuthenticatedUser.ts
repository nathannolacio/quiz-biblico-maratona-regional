import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  const payload = await verifyToken(token);

  if (!payload?.email) return null;

  const { data: user, error } = await supabase
    .from("users")
    .select("id, email, name")
    .eq("email", payload.email)
    .single();

  if (error || !user) return null;

  return user;
}
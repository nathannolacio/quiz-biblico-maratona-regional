import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "No token" },
      { status: 401 }
    );
  }

  const payload = await verifyToken(token);

  const { data: user, error } = await supabase
    .from("users")
    .select("id, email, name")
    .eq("email", payload.email)
    .single();

  if (error || !user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    user,
  });
}
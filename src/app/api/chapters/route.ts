import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const user = await getAuthenticatedUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data } = await supabase
    .from("quiz_results")
    .select("quiz_id")
    .eq("user_id", user.id);

  return NextResponse.json({
    data,
  });
}
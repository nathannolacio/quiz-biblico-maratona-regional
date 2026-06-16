import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { chapter, score, total } = body;

    const cookiesStore = await cookies();
    const token = cookiesStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);

    const userId = payload.userId;

    const percentage = Math.round((score / total) * 100);

    const { error } = await supabase.from("quiz_results").insert({
      user_id: userId,
      chapter,
      score,
      total,
      percentage,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to save result" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}
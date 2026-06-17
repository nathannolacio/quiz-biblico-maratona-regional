import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { quiz_id, score, total } = await req.json();

    const cookiesStore = await cookies();
    const token = cookiesStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    const userId = payload.userId;

    const percentage = Math.round((score / total) * 100);

    // 1. cria attempt
    const { data: attempt, error: attemptError } = await supabase
      .from("quiz_attempts")
      .insert({
        user_id: userId,
        quiz_id,
        score,
        total,
        percentage,
      })
      .select()
      .single();

    if (attemptError) {
      console.log(attemptError);
      return NextResponse.json(
        { error: "Failed to save attempt" },
        { status: 500 }
      );
    }

    // 2. garante 1 resultado só
    const { data: existing } = await supabase
      .from("quiz_results")
      .select("id")
      .eq("user_id", userId)
      .eq("quiz_id", quiz_id)
      .maybeSingle();

    if (!existing) {
      const { error: resultError } = await supabase
        .from("quiz_results")
        .insert({
          user_id: userId,
          quiz_id,
          score,
          total,
          percentage,
        });

      if (resultError) {
        console.error("DB ERROR quiz_results insert:", resultError);
      }
    }

    return NextResponse.json(attempt);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}
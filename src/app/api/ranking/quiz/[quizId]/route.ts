import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ quizId: string }> }
) {
  const { quizId } = await params;

  const { data, error } = await supabase.rpc("get_ranking_by_quiz", {
    quiz_id_param: quizId,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
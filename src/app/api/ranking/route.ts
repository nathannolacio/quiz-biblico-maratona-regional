import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data: students , error: studentsError } = await supabase
    .from("ranking_general")
    .select("*")
    .eq("role", "student")
    .order("total_score", { ascending: false });

  const { data: leaders, error: leadersError } = await supabase
    .from("ranking_general")
    .select("*")
    .eq("role", "leader")
    .order("total_score", { ascending: false });

  if (studentsError || leadersError) {
    return NextResponse.json(
      { error: studentsError?.message || leadersError?.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    students,
    leaders
  });
}
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ resultId: string }> }
) {
  const { resultId } = await params;

  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("id", resultId)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
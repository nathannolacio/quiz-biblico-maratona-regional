import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendOtpEmail } from "@/lib/email";

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: "Email obrigatório" },
      { status: 400 }
    );
  }

  const code = generateCode();
  await sendOtpEmail(email, code);

  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10);

  const { data, error } = await supabase
    .from("email_otps")
    .insert({
      id: crypto.randomUUID(),
      email,
      code,
      expires_at: expiresAt.toISOString(),
      used: false
    });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    code
  });
}
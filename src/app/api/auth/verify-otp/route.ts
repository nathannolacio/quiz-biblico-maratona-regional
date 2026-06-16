import { supabase } from "@/lib/supabase";
import { findValidOtp } from "@/services/otp.server";
import { createUser, findUserByEmail } from "@/services/user.server";
import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, code } = await req.json();

  const { data: otp } = await findValidOtp(email, code);

  if (!otp) {
    return Response.json({ error: "Invalid OTP" }, { status: 400 });
  }

  if (new Date(otp.expires_at) < new Date()) {
    return Response.json({ error: "Expired OTP" }, { status: 400 });
  }

  const { error } = await supabase
    .from("email_otps")
    .update({ used: true })
    .eq("id", otp.id);

    if (error) {
      return Response.json({ error: "Failed to invalidate OTP" }, { status: 500 });
    }

  let user;

  const found = await findUserByEmail(email);

  user = found.data;

  if (!user) {
    const created = await createUser(email);
    user = created.data;
  }

  const token = await createToken({
    userId: user.id,
    email: user.email,
    name: user.name,
  });

  const response = NextResponse.json({
    success: true,
    user,
  });

  response.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });

 return response;
}
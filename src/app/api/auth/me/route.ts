import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  console.log("COOKIE TOKEN:", token);

  if (!token) {
    return NextResponse.json(
      { error: "No token" },
      { status: 401 }
    );
  }

  const payload = await verifyToken(token);

  return NextResponse.json({
    success: true,
    user: payload,
  });
}
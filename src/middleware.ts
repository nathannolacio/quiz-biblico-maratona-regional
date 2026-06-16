import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  const isLoginPage = req.nextUrl.pathname === "/login";

  const isProtectedRoute =
    req.nextUrl.pathname.startsWith("/quiz") ||
    req.nextUrl.pathname.startsWith("/result") ||
    req.nextUrl.pathname.startsWith("/chapters");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/chapters", req.url));
  }

  return NextResponse.next();
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
  console.log("MIDDLEWARE:", req.nextUrl.pathname);
  const token = req.cookies.get("auth_token")?.value;
  const path = req.nextUrl.pathname;

  const isLoginPage = path.startsWith("/login");

  const isProtectedRoute =
    path.startsWith("/quiz") ||
    path.startsWith("/result") ||
    path.startsWith("/chapters");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/chapters", req.url));
  }

  return NextResponse.next();
}
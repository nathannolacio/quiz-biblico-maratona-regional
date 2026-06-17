import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const publicRoutes = ["/", "/login"];

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  // Usuário não autenticado tentando acessar rota protegida
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Usuário autenticado tentando voltar para login
  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/chapters", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/chapters",
    "/quiz",
    "/ranking",
    "/result",
  ],
};
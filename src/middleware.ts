// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Este console.log é a prova de vida
  console.log('--- Middleware ATIVO ---', request.nextUrl.pathname);

  // Permite que a requisição prossiga para a página
  return NextResponse.next();
}

export const config = {
  matcher: ["/quiz/:path*", "/result/:path*"],
};
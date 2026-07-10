import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Middleware vide pour l'instant — i18n à activer
  // quand la structure [locale] sera en place
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

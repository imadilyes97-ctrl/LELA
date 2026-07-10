import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Locales supportées
const locales = ["fr", "ar"];
const defaultLocale = "fr";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Vérifier si le chemin a déjà une locale
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathLocale) {
    // Rediriger vers la locale par défaut
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }

  // 2. Session Supabase
  const supabaseResponse = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|fonts|images|icons).*)",
  ],
};

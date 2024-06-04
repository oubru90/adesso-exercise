import { getSession } from "@adesso-exercise/commons";
import { NextRequest, NextResponse } from "next/server";
let locales = ['en', 'it'];

function getLocale(request: NextRequest) {
  // Get the locale from the request
  const acceptLanguage = request.headers.get('Accept-Language');
  const locale = acceptLanguage?.split(',')[0].split('-')[0] || 'en';
  // Check if the locale is supported
  return locales.includes(locale) ? locale : 'en';
}

function isGuestRoute(pathname: string) {
  const guestPaths = ['/login', '/register'];
  return guestPaths.some((path) => pathname.endsWith(path));
}

export async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const locale = pathnameHasLocale ? request.nextUrl.pathname.split('/')[1] : getLocale(request);
  const user = await getSession();

  if (!user && !isGuestRoute(request.nextUrl.pathname)) {
    request.nextUrl.pathname = `/${locale}/login`;
    return NextResponse.redirect(request.nextUrl);
  }

  if (pathnameHasLocale) {
    return;
  }
  console.log("PATHNAME", pathname);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

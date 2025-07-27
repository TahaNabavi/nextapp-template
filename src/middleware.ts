import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { LOCALE_IGNORED_ROUTES } from './config/settings';
import { routing } from './i18n/routing';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (LOCALE_IGNORED_ROUTES.some((route) => pathname.startsWith(route))) {
    const response = NextResponse.next();

    const locale = request.cookies.get('NEXT_LOCALE')?.value || routing.defaultLocale;

    response.cookies.set('NEXT_LOCALE', locale);

    return response;
  }

  const handleI18nRouting = createMiddleware(routing);
  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - Static files (contain a dot)
    // - API routes
    // - Next.js internals
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|.*\\..*).*)',
  ],
};

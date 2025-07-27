import { cookies } from 'next/headers';
import { routing } from '@/i18n/routing';
import { RootLayout } from '@/layouts/root-layout';

import './globals.css';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookie = await cookies();
  const cookieLocale = cookie.get('NEXT_LOCALE')?.value || routing.defaultLocale;

  return <RootLayout lang={cookieLocale}>{children}</RootLayout>;
}

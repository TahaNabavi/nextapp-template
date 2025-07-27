import { cookies } from 'next/headers';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  if (requested) {
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
    return {
      locale,
      messages: {
        ...(await import(`../messages/${locale}/translation.json`)),
      },
    };
  }

  const cookie = await cookies();
  const cookieLocale = cookie.get('NEXT_LOCALE')?.value;

  const locale = hasLocale(routing.locales, cookieLocale) ? cookieLocale : routing.defaultLocale;

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/translation.json`)),
    },
  };
});

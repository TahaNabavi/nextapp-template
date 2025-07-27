/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-head-element */

import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { env } from '@/config/env';
import { inter } from '@/config/fonts/fonts';

type Props = { children: React.ReactNode; lang: string };

export const RootLayout: React.FC<Props> = ({ children, lang }) => {
  return (
    <html lang={lang} dir="ltr" className={inter.variable}>
      <head>
        {env.NODE_ENV === 'development' && (
          <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
        )}
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
          <NextIntlClientProvider locale={lang}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './ttf/Inter-normal.ttf',
      style: 'normal',
    },
    {
      path: './ttf/Inter-italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

import '@/components/global.css';
import { poppins } from '@/components/fonts';
import ToastProviders from '@/providers/toast-providers';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${poppins.className} bg-white h-full antialiased`}>
        <ToastProviders>
          <Flowbite>
            <Suspense>{children}</Suspense>
          </Flowbite>
        </ToastProviders>
      </body>
    </html>
  );
}

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <h1>Layout por defecto</h1>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
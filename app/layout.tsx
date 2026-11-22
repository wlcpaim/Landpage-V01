import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bellini Artesanatos | Peças Exclusivas Feitas à Mão',
  description: 'Descubra a sofisticação e o afeto em cada detalhe. Obras de arte e artesanato autêntico para transformar o seu lar.',
  keywords: ['artesanato', 'decoração artesanal', 'arte em madeira', 'cerâmica artesanal', 'Bellini Artesanatos'],
  openGraph: {
    title: 'Bellini Artesanatos | Peças Exclusivas',
    description: 'A beleza do feito à mão com sofisticação e alma.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

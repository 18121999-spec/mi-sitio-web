import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });
const jost = Jost({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "LA DOLCE VITA",
  description: "Sastrería y moda masculina italiana, en Ecuador.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${playfair.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <Header locale={locale as Locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} />
        </CartProvider>
      </body>
    </html>
  );
}

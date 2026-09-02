import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";
import { CartBadge } from "./cart-badge";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5">
        <Link href={`/${locale}`} className="font-serif text-2xl tracking-[0.35em] sm:text-3xl">
          LA DOLCE VITA
        </Link>
        <nav className="flex w-full items-center justify-between text-xs tracking-[0.2em]">
          <div className="flex gap-6">
            <Link href={`/${locale}`} className="transition hover:text-gold">
              {dict.nav.home}
            </Link>
            <Link href={`/${locale}/contacto`} className="transition hover:text-gold">
              {dict.nav.contact}
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher locale={locale} />
            <Link href={`/${locale}/carrito`} className="flex items-center gap-1.5 transition hover:text-gold">
              {dict.nav.cart}
              <CartBadge />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

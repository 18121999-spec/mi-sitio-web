"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

const labels: Record<Locale, string> = { es: "ES", en: "EN", it: "IT" };

function withLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => (
        <Link
          key={l}
          href={withLocale(pathname, l)}
          className={l === locale ? "text-gold" : "text-ink/50 transition hover:text-ink"}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}

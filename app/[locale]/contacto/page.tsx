import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl tracking-[0.2em]">{dict.contact.title}</h1>
      <p className="mt-6 text-sm leading-relaxed text-ink/70">{dict.contact.comingSoon}</p>
    </section>
  );
}

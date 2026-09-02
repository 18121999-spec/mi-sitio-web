import { brands } from "@/lib/products";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import { BrandSection } from "@/components/brand-section";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <section className="border-b border-line bg-sand px-6 py-24 text-center">
        <h1 className="font-serif text-4xl tracking-[0.2em] sm:text-5xl">{dict.hero.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm tracking-wide text-ink/70">{dict.hero.subtitle}</p>
      </section>

      {brands.map((brand) => (
        <BrandSection
          key={brand.slug}
          brand={brand}
          addToCartLabel={dict.product.addToCart}
          addedLabel={dict.product.added}
        />
      ))}

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-serif text-xl tracking-[0.25em]">{dict.novelties.title}</h2>
          <div className="h-px flex-1 bg-line" />
        </div>
        <div className="flex min-h-[220px] items-center justify-center border border-dashed border-line text-center text-sm text-ink/50">
          {dict.novelties.comingSoon}
        </div>
      </section>
    </>
  );
}

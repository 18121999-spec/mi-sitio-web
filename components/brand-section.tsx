import type { Brand } from "@/lib/products";
import { ProductCard } from "./product-card";

export function BrandSection({
  brand,
  addToCartLabel,
  addedLabel,
}: {
  brand: Brand;
  addToCartLabel: string;
  addedLabel: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-serif text-xl tracking-[0.25em]">{brand.name.toUpperCase()}</h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {brand.products.map((product) => (
          <ProductCard key={product.id} product={product} addToCartLabel={addToCartLabel} addedLabel={addedLabel} />
        ))}
      </div>
    </section>
  );
}

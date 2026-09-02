"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { allProducts } from "@/lib/products";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default function CartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const { items, removeItem, updateQuantity } = useCart();

  const rows = items
    .map((item) => ({ item, product: allProducts.find((p) => p.id === item.id) }))
    .filter((row): row is { item: typeof row.item; product: NonNullable<typeof row.product> } =>
      Boolean(row.product),
    );

  const subtotal = rows.reduce((sum, row) => sum + row.product.price * row.item.quantity, 0);

  if (rows.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl tracking-[0.2em]">{dict.cart.title}</h1>
        <p className="mt-6 text-sm text-ink/60">{dict.cart.empty}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-block border border-ink px-6 py-3 text-xs tracking-[0.15em] transition hover:bg-ink hover:text-bg"
        >
          {dict.cart.continue}
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-center font-serif text-3xl tracking-[0.2em]">{dict.cart.title}</h1>

      <div className="flex flex-col divide-y divide-line">
        {rows.map(({ item, product }) => (
          <div key={item.id} className="flex items-center gap-4 py-5">
            <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-sand">
              <Image src={product.image} alt={product.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm">{product.name}</p>
              <p className="text-xs text-ink/60">${product.price}</p>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-6 w-6 border border-line"
                  aria-label="-"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-6 w-6 border border-line"
                  aria-label="+"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-xs text-ink/50 underline transition hover:text-ink"
            >
              {dict.cart.remove}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
        <span className="text-sm tracking-widest">{dict.cart.subtotal}</span>
        <span className="font-serif text-xl">${subtotal}</span>
      </div>

      <button
        disabled
        className="mt-6 w-full cursor-not-allowed border border-ink/30 px-6 py-3 text-xs tracking-[0.15em] text-ink/40"
      >
        {dict.cart.checkout}
      </button>
      <p className="mt-3 text-center text-xs text-ink/50">{dict.cart.checkoutNote}</p>
    </section>
  );
}

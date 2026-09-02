"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  addToCartLabel,
  addedLabel,
}: {
  product: Product;
  addToCartLabel: string;
  addedLabel: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-4/5 overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-sm">{product.name}</p>
        <p className="text-xs text-ink/60">${product.price}</p>
        <button
          onClick={handleAdd}
          className="mt-2 border border-ink px-4 py-2 text-[11px] tracking-[0.15em] transition hover:bg-ink hover:text-bg"
        >
          {added ? addedLabel : addToCartLabel}
        </button>
      </div>
    </div>
  );
}

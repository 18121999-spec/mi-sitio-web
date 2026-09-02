"use client";

import { useCart } from "@/lib/cart-context";

export function CartBadge() {
  const { count } = useCart();

  if (count === 0) return null;

  return (
    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-wine px-1 text-[10px] text-bg">
      {count}
    </span>
  );
}

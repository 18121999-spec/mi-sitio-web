export type Product = {
  id: string;
  name: string;
  image: string;
  /** Precio placeholder en USD — pendiente de reemplazar por el precio real. */
  price: number;
};

export type Brand = {
  slug: string;
  name: string;
  products: Product[];
};

export const brands: Brand[] = [
  {
    slug: "barbuti",
    name: "Barbuti",
    products: [
      { id: "barbuti-1", name: "Blazer Cruzado Gris Oscuro", image: "/products/barbuti/barbuti-01.webp", price: 220 },
      { id: "barbuti-2", name: "Esmoquin Blanco Solapa Satinada", image: "/products/barbuti/barbuti-02.webp", price: 320 },
      { id: "barbuti-3", name: "Blazer Cruzado Azul Marino", image: "/products/barbuti/barbuti-03.webp", price: 225 },
    ],
  },
  {
    slug: "harmont-blaine",
    name: "Harmont & Blaine",
    products: [
      { id: "hb-1", name: "Polo Bordeaux Escudo HB", image: "/products/harmont-blaine/harmont-blaine-01.jpeg", price: 95 },
      { id: "hb-2", name: "Camisa Oxford Celeste", image: "/products/harmont-blaine/harmont-blaine-02.webp", price: 85 },
      { id: "hb-3", name: "Camisa Lino Beige", image: "/products/harmont-blaine/harmont-blaine-03.webp", price: 90 },
      { id: "hb-4", name: "Polo Estampada Azul Marino", image: "/products/harmont-blaine/harmont-blaine-04.jpeg", price: 98 },
      { id: "hb-5", name: "Polo Celeste Ribete Blanco", image: "/products/harmont-blaine/harmont-blaine-05.jpeg", price: 92 },
    ],
  },
  {
    slug: "sorbino",
    name: "Sorbino",
    products: [
      { id: "sorbino-1", name: "Camisa Estampada Azul Marino", image: "/products/sorbino/sorbino-01.webp", price: 78 },
      { id: "sorbino-2", name: "Blazer Cruzado Beige", image: "/products/sorbino/sorbino-02.webp", price: 210 },
      { id: "sorbino-3", name: "Polo Tejido Verde Botella", image: "/products/sorbino/sorbino-03.webp", price: 88 },
      { id: "sorbino-4", name: "Camisa Estampada Azul", image: "/products/sorbino/sorbino-04.webp", price: 80 },
      { id: "sorbino-5", name: "Short Chino Azul Marino", image: "/products/sorbino/sorbino-05.webp", price: 65 },
      { id: "sorbino-6", name: "Camisa Lisa Azul Marino", image: "/products/sorbino/sorbino-06.webp", price: 75 },
      { id: "sorbino-7", name: "Short Chino Gris Claro", image: "/products/sorbino/sorbino-07.webp", price: 65 },
    ],
  },
];

export const allProducts: Product[] = brands.flatMap((brand) => brand.products);

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => product.id === id);
}

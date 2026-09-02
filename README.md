# LA DOLCE VITA

Sitio web de LA DOLCE VITA — moda masculina italiana, venta en Ecuador.

Ver el brief completo del proyecto (estética, estructura, decisiones y pendientes) en
[`docs/brief-la-dolce-vita.md`](docs/brief-la-dolce-vita.md).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Idiomas: español (por defecto), inglés e italiano (`/es`, `/en`, `/it`)
- Carrito de compra con estado local (`localStorage`), sin pasarela de pago todavía

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (redirige a `/es`).

## Build de producción

```bash
npm run build
npm start
```

## Estructura de contenido

- `lib/products.ts` — catálogo de productos, organizado por marca. Los precios son
  **placeholders** pendientes de reemplazar por los reales.
- `public/products/<marca>/` — imágenes de producto, una carpeta por marca.
- `lib/i18n/dictionaries.ts` — textos de la interfaz en español, inglés e italiano.

## Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com). Conecta este repositorio y cada push a
la rama principal se publica automáticamente.

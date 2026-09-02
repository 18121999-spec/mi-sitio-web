# LA DOLCE VITA — Brief de sitio web

Marca de ropa elegante italiana, venta en Ecuador. **Solo ropa masculina.**
Referencias de estilo: [dolcevita.com](https://www.dolcevita.com/) (estética, tipografía, sobriedad)
y [farfetch.com/it](https://www.farfetch.com/it/) (estructura de navegación por categorías).

---

## 1. Identidad y estilo

**Nombre de marca (header, centrado, arriba de todo):** `LA DOLCE VITA` (mayúsculas)

**Estética:** lujo italiano minimalista — mucho espacio en blanco, tipografía serif elegante para
títulos, fotografía editorial de moda a página completa, sin ruido visual (nada de banners
llamativos, nada de colores saturados).

### Paleta de colores propuesta

| Uso | Color | Hex |
|---|---|---|
| Fondo principal | Blanco roto / marfil | `#F8F6F2` |
| Texto principal | Negro suave | `#1A1A1A` |
| Acento de lujo | Dorado envejecido | `#B08D57` |
| Acento secundario | Beige arena | `#E4DCCF` |
| Líneas / bordes | Gris piedra | `#D8D2C4` |
| Hover / detalle | Burdeos oscuro | `#5C1A1B` |

Tipografías sugeridas: un serif editorial para títulos (ej. "Playfair Display" o "Cormorant
Garamond") + un sans-serif fino para textos y menú (ej. "Montserrat Light" o "Jost").

---

## 2. Header

- **Centro superior:** `LA DOLCE VITA` como logotipo de texto (mayúsculas, letterspacing amplio).
- **Menú de navegación:**
  - `HOME`
  - `CONTACTO`
- Header fijo/transparente sobre la imagen principal, fondo sólido al hacer scroll.

---

## 3. Cuerpo de la página

> **Solo ropa masculina.** No hay selector HOMBRE/MUJER ni categoría MUJER — se eliminó por
> completo. La página principal muestra directamente todos los productos, **divididos por
> marca**, siempre dentro del universo masculino.

### 3.1 Catálogo (home)

- Todos los productos se muestran en la página principal, organizados en **subsecciones por
  marca** (una fila/grid por marca).

**Marcas recibidas hasta ahora:**

| Marca | Imágenes | Ruta en el repo |
|---|---|---|
| **BARBUTI** | 3 (blazer cruzado gris oscuro, esmoquin blanco solapa negra satinada, blazer cruzado azul marino solapa satinada) | `assets/moda-hombre/barbuti/` |
| **Harmont & Blaine** | 5 (polo roja cuello azul con escudo HB, camisa celeste con logo perrito, camisa lino beige con logo perrito, polo azul marino con estampado, polo celeste con ribete blanco) | `assets/moda-hombre/harmont-blaine/` |
| **SORBINO** | 7 (camisa azul marino estampada, blazer cruzado beige, polo tejido verde, camisa azul estampada, short azul marino, camisa lisa azul marino, short gris claro) | `assets/moda-hombre/sorbino/` |

*(Faltan más marcas — se irán agregando más adelante).*

### 3.2 Sección NOVEDADES

- Título de sección: `NOVEDAD` (o "NOVEDADES")
- Espacio de galería abierto para nuevas incorporaciones de ropa (cantidad de imágenes flexible,
  pensado para poder ir agregando productos nuevos).

---

### 3.3 Carrito de compra

- Botón "Agregar al carrito" en cada producto.
- Panel/página de carrito: ver productos agregados, cantidades, quitar productos, subtotal.
- **Sin pasarela de pago todavía** — el checkout final (pago) queda pendiente hasta que definan el
  método de pago a usar en Ecuador. Por ahora el carrito es funcional pero no procesa cobros.

---

## 4. Footer (sugerido, a definir)

- Datos de contacto (dirección/ciudad en Ecuador, teléfono, email, WhatsApp) — *pendiente, el
  cliente lo enviará más adelante*.
- Redes sociales (Instagram, etc.) — *pendiente*.
- Aviso legal / política de envíos y devoluciones (Ecuador).
- Selector de idioma: 🇪🇸 Español (por defecto) / 🇬🇧 English / 🇮🇹 Italiano.

---

## 5. Decisiones ya confirmadas

- **Nombre de marca:** `LA DOLCE VITA` (confirmado, con "LA").
- **Solo ropa masculina:** no existe sección ni selector de MUJER. Todo el catálogo es masculino,
  mostrado en la home dividido por marca.
- **Idioma:** español por defecto, con opción de inglés e italiano (i18n).
- **Tienda:** sí lleva carrito de compra; **no** lleva pago integrado por ahora.
- **Hosting:** se despliega en **Vercel** mientras se compra el dominio definitivo.
- **Stack:** Next.js + Tailwind CSS (soporta i18n nativo, carrito con estado simple, y despliegue
  directo en Vercel).
- **Imágenes de producto:** organizadas por **marca** (una carpeta por marca) en `assets/moda-hombre/`.

---

## 6. Información pendiente (no bloquea el desarrollo, se agrega cuando llegue)

1. **Imágenes:**
   - Más marcas para el catálogo (el cliente las irá enviando).
   - Imágenes para `NOVEDADES`.
   - Imagen de fondo/hero para la home.
   - Logo (si existe alguno además del texto "LA DOLCE VITA").
2. **Datos de contacto:** dirección/ciudad en Ecuador, teléfono/WhatsApp, email, redes sociales —
   *el cliente los enviará más adelante*. Mientras tanto la página `CONTACTO` se deja con
   placeholders claramente marcados.

El sitio se empieza a construir ahora con lo disponible; el contenido pendiente se agrega
incrementalmente sin bloquear el desarrollo.

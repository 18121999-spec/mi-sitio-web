# LA DOLCE VITA — Brief de sitio web

Marca de ropa elegante italiana, venta en Ecuador.
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

### 3.1 Selector de categoría (estilo Farfetch, 2 cuadros grandes)

Dos bloques grandes lado a lado, cada uno con una imagen de fondo y overlay de texto:

- `HOMBRE`
- `MUJER`

*(Se elimina la categoría "bambino/niño" que tiene Farfetch — no aplica a esta marca).*

Al hacer click, cada cuadro llevaría a la sección/categoría correspondiente.

> **Actualización:** se elimina la sección `MODA MUJER`. En su lugar (primera sección del cuerpo,
> justo debajo del selector HOMBRE/MUJER) va `MODA HOMBRE`, organizada en subcategorías **por
> marca** (una subsección por cada carpeta/marca que se reciba).

### 3.2 Sección MODA HOMBRE

- Título de sección: `MODA HOMBRE`
- Organizada por **subcategorías de marca** (una fila/grid por marca), según las imágenes
  recibidas.

**Marcas recibidas hasta ahora:**

| Marca | Imágenes | Ruta en el repo |
|---|---|---|
| **BARBUTI** | 3 (blazer cruzado gris oscuro, esmoquin blanco solapa negra satinada, blazer cruzado azul marino solapa satinada) | `assets/moda-hombre/barbuti/` |
| **Harmont & Blaine** | 5 (polo roja cuello azul con escudo HB, camisa celeste con logo perrito, camisa lino beige con logo perrito, polo azul marino con estampado, polo celeste con ribete blanco) | `assets/moda-hombre/harmont-blaine/` |
| **SORBINO** | 5 (camisa azul marino estampada, blazer cruzado beige, polo tejido verde, camisa azul estampada, short azul marino) | `assets/moda-hombre/sorbino/` |

*(Faltan las demás marcas — ver sección 6).*

### 3.3 Sección NOVEDADES

- Título de sección: `NOVEDAD` (o "NOVEDADES")
- Espacio de galería abierto para nuevas incorporaciones de ropa (cantidad de imágenes flexible,
  pensado para poder ir agregando productos nuevos).

---

### 3.4 Carrito de compra

- Botón "Agregar al carrito" en cada producto.
- Panel/página de carrito: ver productos agregados, cantidades, quitar productos, subtotal.
- **Sin pasarela de pago todavía** — el checkout final (pago) queda pendiente hasta que definan el
  método de pago a usar en Ecuador. Por ahora el carrito es funcional pero no procesa cobros.

---

## 4. Footer (sugerido, a definir)

- Datos de contacto (dirección/ciudad en Ecuador, teléfono, email, WhatsApp).
- Redes sociales (Instagram, etc.).
- Aviso legal / política de envíos y devoluciones (Ecuador).
- Selector de idioma: 🇪🇸 Español (por defecto) / 🇬🇧 English / 🇮🇹 Italiano.

---

## 5. Decisiones ya confirmadas

- **Idioma:** español por defecto, con opción de inglés e italiano (i18n).
- **Tienda:** sí lleva carrito de compra; **no** lleva pago integrado por ahora.
- **Hosting:** se despliega en **Vercel** mientras se compra el dominio definitivo.
- **Stack propuesto:** Next.js + Tailwind CSS (soporta i18n nativo, carrito con estado simple, y
  despliegue directo en Vercel) — a confirmar por el cliente.
- **Imágenes de producto:** vendrán organizadas por **categoría de marca** (una carpeta por marca)
  para la sección `MODA HOMBRE`.

---

## 6. Información pendiente que necesito de ti

1. **Imágenes** (no se pudieron leer desde la carpeta de Google Drive compartida — este entorno no
   tiene acceso a `drive.google.com` — necesito que las envíes por otro medio: adjuntas en el chat,
   subidas al repo en GitHub, o un link de descarga directa/zip):
   - Imágenes de `MODA HOMBRE`, organizadas por marca.
   - Imágenes para `NOVEDADES`.
   - Imagen(es) de fondo para los cuadros `HOMBRE` / `MUJER` del selector de categoría.
   - Logo (si existe alguno además del texto "LA DOLCE VITA").
2. **Datos de contacto:** dirección/ciudad en Ecuador, teléfono/WhatsApp, email, redes sociales.
3. **Confirmación de stack:** ¿Next.js + Tailwind está bien, o prefieres otra tecnología?

En cuanto me pases las imágenes y estos datos, armo la estructura del proyecto (frontend con la
estética definida arriba) y la dejo lista en el repo.

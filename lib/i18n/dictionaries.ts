import type { Locale } from "./config";

const es = {
  nav: { home: "HOME", contact: "CONTACTO", cart: "CARRITO" },
  hero: {
    title: "LA DOLCE VITA",
    subtitle: "Sastrería y moda masculina italiana, en Ecuador.",
  },
  novelties: {
    title: "NOVEDADES",
    comingSoon: "Muy pronto nuevas piezas en esta sección.",
  },
  product: { addToCart: "Agregar al carrito", added: "Agregado" },
  cart: {
    title: "Carrito",
    empty: "Tu carrito está vacío.",
    remove: "Quitar",
    subtotal: "Subtotal",
    checkout: "Finalizar compra",
    checkoutNote:
      "El pago en línea estará disponible próximamente. Contáctanos para completar tu pedido.",
    continue: "Seguir comprando",
  },
  contact: {
    title: "Contacto",
    comingSoon:
      "Estamos completando esta sección. Muy pronto encontrarás aquí nuestra dirección, teléfono y redes sociales.",
  },
  footer: { addressPending: "dirección próximamente", rights: "Todos los derechos reservados." },
};

const en: typeof es = {
  nav: { home: "HOME", contact: "CONTACT", cart: "CART" },
  hero: {
    title: "LA DOLCE VITA",
    subtitle: "Italian tailoring and menswear, in Ecuador.",
  },
  novelties: {
    title: "NEW ARRIVALS",
    comingSoon: "New pieces coming soon to this section.",
  },
  product: { addToCart: "Add to cart", added: "Added" },
  cart: {
    title: "Cart",
    empty: "Your cart is empty.",
    remove: "Remove",
    subtotal: "Subtotal",
    checkout: "Checkout",
    checkoutNote: "Online payment will be available soon. Contact us to complete your order.",
    continue: "Continue shopping",
  },
  contact: {
    title: "Contact",
    comingSoon:
      "We're putting the finishing touches on this section. Our address, phone and social media will be here soon.",
  },
  footer: { addressPending: "address coming soon", rights: "All rights reserved." },
};

const it: typeof es = {
  nav: { home: "HOME", contact: "CONTATTI", cart: "CARRELLO" },
  hero: {
    title: "LA DOLCE VITA",
    subtitle: "Sartoria e moda maschile italiana, in Ecuador.",
  },
  novelties: {
    title: "NOVITÀ",
    comingSoon: "Presto nuovi capi in questa sezione.",
  },
  product: { addToCart: "Aggiungi al carrello", added: "Aggiunto" },
  cart: {
    title: "Carrello",
    empty: "Il tuo carrello è vuoto.",
    remove: "Rimuovi",
    subtotal: "Subtotale",
    checkout: "Completa l'ordine",
    checkoutNote: "Il pagamento online sarà disponibile a breve. Contattaci per completare l'ordine.",
    continue: "Continua lo shopping",
  },
  contact: {
    title: "Contatti",
    comingSoon:
      "Stiamo completando questa sezione. Presto troverai qui indirizzo, telefono e social media.",
  },
  footer: { addressPending: "indirizzo in arrivo", rights: "Tutti i diritti riservati." },
};

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}

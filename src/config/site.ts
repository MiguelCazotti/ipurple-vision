/**
 * Configuração central da IPurple Imports.
 * Edite links, telefone, endereço e produtos aqui — nada mais precisa ser tocado.
 */

import productProMax from "@/assets/product-pro-max.jpg";
import productPro from "@/assets/product-pro.jpg";
import productStandard from "@/assets/product-standard.jpg";
import productAir from "@/assets/product-air.jpg";
import catSmartphones from "@/assets/cat-smartphones.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catAirpods from "@/assets/cat-airpods.jpg";
import catMacbook from "@/assets/cat-macbook.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import lifestyleHand from "@/assets/lifestyle-hand.jpg";
import boxes from "@/assets/boxes.jpg";
import scooterMello from "@/assets/scooter-mello.jpg";
import scooterShowroom from "@/assets/scooter-showroom.jpg";

/* ------------------------------------------------------------------ */
/* Marca e contato                                                     */
/* ------------------------------------------------------------------ */

export const BRAND = {
  name: "IPurple Imports",
  logoTop: "IPURPLE",
  logoBottom: "IMPORTS",
  city: "Duque de Caxias - RJ",
};

export const CONTACT = {
  phoneDisplay: "(21) 97180-6102",
  /** Somente dígitos, com DDI 55 — usado no link do WhatsApp */
  whatsappNumber: "5521971806102",
  whatsappMessage:
    "Olá! Vim pelo site da IPurple Imports e gostaria de saber mais sobre os produtos disponíveis.",
  addressLine1: "Av. Perimetral Professor José de Souza Herdy, 1235 - Loja B",
  addressLine2: "Duque de Caxias - RJ",
};

/** Link do Instagram da loja — altere aqui quando o perfil oficial for definido. */
export const INSTAGRAM_URL = "https://www.instagram.com/ipurpleimports";
export const INSTAGRAM_HANDLE = "@ipurpleimports";
export const INSTAGRAM_FOLLOWERS = "12,4 mil";

export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61556232695254";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Av. Perimetral Professor José de Souza Herdy, 1235 - Loja B, Duque de Caxias - RJ",
  );

export const WHATSAPP_URL =
  `https://wa.me/${CONTACT.whatsappNumber}?text=` +
  encodeURIComponent(CONTACT.whatsappMessage);

export function whatsappUrlFor(product?: string) {
  const text = product
    ? `Olá! Vim pelo site da IPurple Imports e tenho interesse no ${product}. Pode me passar mais informações?`
    : CONTACT.whatsappMessage;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "iPhones", href: "#iphones" },
  { label: "Scooters", href: "#scooters" },
  { label: "Vídeos", href: "#videos" },
  { label: "Smartphones", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

/* ------------------------------------------------------------------ */
/* Produtos — sem preços, sem estoque inventado                        */
/* ------------------------------------------------------------------ */

export type Product = {
  id: string;
  name: string;
  description: string;
  storage: string[];
  colors: { name: string; hex: string }[];
  image: string;
  price: string;
  availability: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    description: "A maior tela e o sistema de câmeras mais completo da linha.",
    storage: ["256 GB", "512 GB", "1 TB"],
    colors: [
      { name: "Titânio Preto", hex: "#2b2b2f" },
      { name: "Titânio Natural", hex: "#b8b0a5" },
      { name: "Titânio Deserto", hex: "#c8a882" },
    ],
    image: productProMax,
    price: "Consultar preço",
    availability: "Consultar disponibilidade",
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    description: "Desempenho profissional em um corpo compacto e leve.",
    storage: ["128 GB", "256 GB", "512 GB"],
    colors: [
      { name: "Dourado", hex: "#cbab7c" },
      { name: "Titânio Preto", hex: "#2b2b2f" },
      { name: "Prata", hex: "#d8dade" },
    ],
    image: productPro,
    price: "Consultar preço",
    availability: "Consultar disponibilidade",
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    description: "O equilíbrio ideal entre câmera, bateria e design.",
    storage: ["128 GB", "256 GB"],
    colors: [
      { name: "Azul", hex: "#2b4bcf" },
      { name: "Preto", hex: "#17171a" },
      { name: "Branco", hex: "#f1f1f3" },
    ],
    image: productStandard,
    price: "Consultar preço",
    availability: "Consultar disponibilidade",
  },
  {
    id: "iphone-air",
    name: "iPhone Air",
    description: "Extremamente fino, leve e pensado para o dia a dia.",
    storage: ["256 GB", "512 GB"],
    colors: [
      { name: "Prata", hex: "#dcdee2" },
      { name: "Grafite", hex: "#3a3a40" },
    ],
    image: productAir,
    price: "Consultar preço",
    availability: "Consultar disponibilidade",
  },
];

/* ------------------------------------------------------------------ */
/* Categorias                                                          */
/* ------------------------------------------------------------------ */

export const CATEGORIES = [
  { name: "Scooters elétricas", caption: "Mobilidade para o dia a dia", image: scooterShowroom },
  { name: "iPhone", caption: "Linha completa", image: productProMax },
  { name: "Smartphones", caption: "Android premium", image: catSmartphones },
  { name: "Apple Watch", caption: "Saúde e performance", image: catWatch },
  { name: "AirPods", caption: "Áudio sem fio", image: catAirpods },
  { name: "MacBook", caption: "Trabalho e criação", image: catMacbook },
  { name: "Acessórios", caption: "Capas, cabos e carregadores", image: catAccessories },
];

export const SCOOTERS = [
  {
    name: "Scooter Mello 500W",
    description:
      "Confortável, econômica e prática para deixar os trajetos do dia a dia mais leves.",
    specs: ["Motor 500W", "Elétrica", "Uso urbano"],
    price: "Consulte as condições",
    image: scooterMello,
  },
  {
    name: "Scooters elétricas",
    description:
      "Modelos modernos, silenciosos e sustentáveis para uma nova forma de se movimentar.",
    specs: ["Mais economia", "Conforto", "Design moderno"],
    price: "A partir de R$ 4.899,99",
    image: scooterShowroom,
  },
];

export const FACEBOOK_VIDEOS = [
  {
    title: "Scooter Mello 500W",
    description: "Estilo, praticidade e economia para os seus trajetos.",
    url: "https://www.facebook.com/61556232695254/videos/1385441363767495/",
  },
  {
    title: "Seu novo jeito de se movimentar",
    description: "Conheça as scooters elétricas disponíveis na IPurple.",
    url: "https://www.facebook.com/61556232695254/videos/990487003746381/",
  },
  {
    title: "O futuro da mobilidade",
    description: "Economia, praticidade e liberdade para o seu dia a dia.",
    url: "https://www.facebook.com/61556232695254/videos/2249116659193481/",
  },
];

/* ------------------------------------------------------------------ */
/* Feed do Instagram (representação visual)                            */
/* ------------------------------------------------------------------ */

export const INSTAGRAM_POSTS = [
  { image: productProMax, caption: "Linha Pro Max disponível" },
  { image: storeInterior, caption: "Nossa loja em Duque de Caxias" },
  { image: catAirpods, caption: "AirPods para todos os perfis" },
  { image: boxes, caption: "Produtos lacrados" },
  { image: lifestyleHand, caption: "Seu próximo upgrade" },
  { image: catWatch, caption: "Apple Watch em várias versões" },
];

export const EXPERIENCE_IMAGE = productStandard;
export const HERO_REFLECTION = lifestyleHand;

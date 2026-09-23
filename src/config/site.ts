/**
 * Configuração central da IPurple Imports.
 * Edite links, telefone, endereço e produtos aqui — nada mais precisa ser tocado.
 */

import productProMax from "@/assets/product-pro-max.jpg";
import productPro from "@/assets/product-pro.jpg";
import productStandard from "@/assets/product-standard.jpg";
import productAir from "@/assets/product-air.jpg";
import catSmartphones from "@/assets/cat-smartphones.jpg";
import catAirpods from "@/assets/cat-airpods.jpg";
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
/* iPhones — seleção enxuta focada nos modelos mais procurados         */
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
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    description: "Desempenho Pro, câmera avançada e acabamento premium.",
    storage: ["128 GB", "256 GB", "512 GB"],
    colors: [
      { name: "Preto Espacial", hex: "#403E3D" },
      { name: "Prata", hex: "#F0F2F2" },
      { name: "Ouro", hex: "#F4E8CE" },
      { name: "Deep Purple", hex: "#594F63" },
    ],
    image: productProMax,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    description: "Ótimo equilíbrio entre desempenho, câmera e bateria.",
    storage: ["128 GB", "256 GB", "512 GB"],
    colors: [
      { name: "Meia-noite", hex: "#222930" },
      { name: "Starlight", hex: "#FAF6F2" },
      { name: "Azul", hex: "#A0B4C7" },
      { name: "Roxo", hex: "#E6DDEB" },
    ],
    image: productStandard,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    description: "Tela grande, câmera Pro e excelente desempenho.",
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"],
    colors: [
      { name: "Grafite", hex: "#54524F" },
      { name: "Prata", hex: "#F1F2ED" },
      { name: "Sierra Blue", hex: "#A7C1D9" },
      { name: "Ouro", hex: "#FAE7CF" },
    ],
    image: productPro,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    description: "Design moderno, ótima câmera e desempenho para o dia a dia.",
    storage: ["128 GB", "256 GB", "512 GB"],
    colors: [
      { name: "Meia-noite", hex: "#232A31" },
      { name: "Starlight", hex: "#FAF6F2" },
      { name: "Azul", hex: "#276787" },
      { name: "Verde", hex: "#394C38" },
    ],
    image: productAir,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    description: "Design clássico, tela OLED e ótimo desempenho.",
    storage: ["64 GB", "128 GB", "256 GB"],
    colors: [
      { name: "Preto", hex: "#25212B" },
      { name: "Branco", hex: "#F6F2EF" },
      { name: "Azul", hex: "#023B63" },
      { name: "Verde", hex: "#D8EFD5" },
    ],
    image: productStandard,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    description: "Um dos modelos mais procurados para quem busca ótimo custo-benefício.",
    storage: ["64 GB", "128 GB", "256 GB"],
    colors: [
      { name: "Preto", hex: "#1F2020" },
      { name: "Branco", hex: "#F9F6EF" },
      { name: "Verde", hex: "#AEE1CD" },
      { name: "Roxo", hex: "#D1CDDA" },
    ],
    image: productAir,
    price: "Consultar preço",
    availability: "Consulte disponibilidade",
  },
];

/* ------------------------------------------------------------------ */
/* Categorias                                                          */
/* ------------------------------------------------------------------ */

export const CATEGORIES = [
  {
    name: "Scooters elétricas",
    caption: "Mobilidade para o dia a dia",
    image: scooterShowroom,
  },
  {
    name: "iPhone",
    caption: "Modelos mais procurados",
    image: productProMax,
  },
  {
    name: "Smartphones",
    caption: "Android premium",
    image: catSmartphones,
  },
  {
    name: "AirPods",
    caption: "Áudio sem fio",
    image: catAirpods,
  },
  {
    name: "Acessórios",
    caption: "Capas, cabos e carregadores",
    image: catAccessories,
  },
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
/* Feed visual                                                         */
/* ------------------------------------------------------------------ */

export const INSTAGRAM_POSTS = [
  { image: productProMax, caption: "iPhones disponíveis" },
  { image: storeInterior, caption: "Nossa loja em Duque de Caxias" },
  { image: catAirpods, caption: "AirPods para todos os perfis" },
  { image: boxes, caption: "Produtos disponíveis" },
  { image: lifestyleHand, caption: "Seu próximo upgrade" },
];

export const EXPERIENCE_IMAGE = productStandard;
export const HERO_REFLECTION = lifestyleHand;

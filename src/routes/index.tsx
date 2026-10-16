import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Instagram, MessageCircle, ShieldCheck, MapPin, type LucideIcon } from "lucide-react";
import storeWheelAsset from "@/assets/store/loja-roleta.png.asset.json";
import storeShowcaseAsset from "@/assets/store/loja-vitrine-logo.png.asset.json";
import feedShowcaseOneAsset from "@/assets/store/feed-vitrine-1.png.asset.json";
import feedIphonesAsset from "@/assets/store/feed-iphones-mesa.png.asset.json";
import feedShowcaseTwoAsset from "@/assets/store/feed-vitrine-2.png.asset.json";
import feedEnvironmentAsset from "@/assets/store/feed-ambiente.png.asset.json";
import feedServiceAsset from "@/assets/store/feed-atendimento.png.asset.json";
import feedLaunchesAsset from "@/assets/store/feed-lancamentos.png.asset.json";

export const Route = createFileRoute("/")({
  component: ReiDoIphone,
  head: () => ({
    meta: [
      { title: "Rei do Iphone — Loja de iPhone em Volta Redonda" },
      { name: "description", content: "Conheça os iPhones e modelos disponíveis na Rei do Iphone." },
      { property: "og:title", content: "Rei do Iphone — Loja de iPhone em Volta Redonda" },
      { property: "og:description", content: "Conheça os iPhones e modelos disponíveis na Rei do Iphone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const products = [
  { name: "iPhone 18 Pro Max", colors: [{ name: "Preto", hex: "#1D1D1F" }, { name: "Prateado", hex: "#F5F5F5" }, { name: "Glacial", hex: "#BFD8E8" }, { name: "Bordô", hex: "#702A3A" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-18-pro-max-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-18-pro-max-colors.png" } },
  { name: "iPhone 18 Pro", colors: [{ name: "Preto", hex: "#1D1D1F" }, { name: "Prateado", hex: "#F5F5F5" }, { name: "Glacial", hex: "#BFD8E8" }, { name: "Bordô", hex: "#702A3A" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-18-pro-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-18-pro-colors.png" } },
  { name: "iPhone 17 Pro Max", colors: [{ name: "Cinza", hex: "#F5F5F5" }, { name: "Azul Profundo", hex: "#32374A" }, { name: "Laranja", hex: "#F77E2D" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-max-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-max-colors.png" } },
  { name: "iPhone 17 Pro", colors: [{ name: "Cinza", hex: "#F5F5F5" }, { name: "Azul Profundo", hex: "#32374A" }, { name: "Laranja", hex: "#F77E2D" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-colors.png" } },
  { name: "iPhone 17", colors: [{ name: "Lavanda", hex: "#DFCEEA" }, { name: "Azul Neblina", hex: "#96AED1" }, { name: "Sálvia", hex: "#A9B689" }, { name: "Preto", hex: "#353839" }, { name: "Branco", hex: "#F5F5F5" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-colors.png" } },
  { name: "iPhone 16 Pro Max", colors: [{ name: "Titânio Natural", hex: "#C2BCB2" }, { name: "Titânio Deserto", hex: "#BFA48F" }, { name: "Titânio Preto", hex: "#3C3C3D" }, { name: "Titânio Branco", hex: "#F2F1ED" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-max-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-max-colors.png" } },
  { name: "iPhone 16 Pro", colors: [{ name: "Titânio Natural", hex: "#C2BCB2" }, { name: "Titânio Deserto", hex: "#BFA48F" }, { name: "Titânio Preto", hex: "#3C3C3D" }, { name: "Titânio Branco", hex: "#F2F1ED" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-colors.png" } },
  { name: "iPhone 16", colors: [{ name: "Rosa", hex: "#F2ADDA" }, { name: "Ultramarino", hex: "#9AADF6" }, { name: "Azul-petróleo", hex: "#B0D4D2" }, { name: "Preto", hex: "#3C4042" }, { name: "Branco", hex: "#FAFAFA" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-colors.png" } },
  { name: "iPhone 15 Pro Max", colors: [{ name: "Titânio Azul", hex: "#2F4452" }, { name: "Titânio Natural", hex: "#837F7D" }, { name: "Titânio Preto", hex: "#1B1B1B" }, { name: "Titânio Branco", hex: "#DDDDDD" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png" } },
  { name: "iPhone 15 Pro", colors: [{ name: "Titânio Azul", hex: "#2F4452" }, { name: "Titânio Natural", hex: "#837F7D" }, { name: "Titânio Preto", hex: "#1B1B1B" }, { name: "Titânio Branco", hex: "#DDDDDD" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro.png" } },
  { name: "iPhone 15", colors: [{ name: "Rosa", hex: "#E3C8CA" }, { name: "Azul", hex: "#CED5D9" }, { name: "Verde", hex: "#CAD4C5" }, { name: "Amarelo", hex: "#E5E0C1" }, { name: "Preto", hex: "#35393B" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15.png" } },
  { name: "iPhone 14 Pro Max", colors: [{ name: "Deep Purple", hex: "#594F63" }, { name: "Preto Espacial", hex: "#403E3D" }, { name: "Prata", hex: "#F0F2F2" }, { name: "Ouro", hex: "#F4E8CE" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-max-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-max-colors.png" } },
  { name: "iPhone 14 Pro", colors: [{ name: "Deep Purple", hex: "#594F63" }, { name: "Preto Espacial", hex: "#403E3D" }, { name: "Prata", hex: "#F0F2F2" }, { name: "Ouro", hex: "#F4E8CE" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-colors.png" } },
  { name: "iPhone 14", colors: [{ name: "Roxo", hex: "#E6DDEB" }, { name: "Azul", hex: "#A0B4C7" }, { name: "Amarelo", hex: "#F9E479" }, { name: "Meia-noite", hex: "#222930" }, { name: "Starlight", hex: "#FAF6F2" }, { name: "Red", hex: "#FC0324" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-colors-spring-2023.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-colors-spring-2023.png" } },
  { name: "iPhone 13 Pro Max", colors: [{ name: "Grafite", hex: "#3A3A3C" }, { name: "Dourado", hex: "#D6C7A1" }, { name: "Prateado", hex: "#F0F0F0" }, { name: "Azul-Sierra", hex: "#9BB5CE" }, { name: "Verde-alpino", hex: "#5F6F65" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-max-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-max-colors.png" } },
  { name: "iPhone 13 Pro", colors: [{ name: "Grafite", hex: "#3A3A3C" }, { name: "Dourado", hex: "#D6C7A1" }, { name: "Prateado", hex: "#F0F0F0" }, { name: "Azul-Sierra", hex: "#9BB5CE" }, { name: "Verde-alpino", hex: "#5F6F65" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-colors.png" } },
  { name: "iPhone 13", colors: [{ name: "Red", hex: "#FC0324" }, { name: "Estelar", hex: "#FAF6F2" }, { name: "Meia-noite", hex: "#222930" }, { name: "Azul", hex: "#A0B4C7" }, { name: "Rosa", hex: "#E3C8CA" }, { name: "Verde", hex: "#A9B689" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-colors.png" } },
  { name: "iPhone 12 Pro Max", colors: [{ name: "Prateado", hex: "#F0F0F0" }, { name: "Grafite", hex: "#3A3A3C" }, { name: "Dourado", hex: "#D6C7A1" }, { name: "Azul-Pacífico", hex: "#344B64" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-12-pro-max/iphone12-pro-max-colors.jpg", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-12-pro-max/iphone12-pro-max-colors.jpg" } },
  { name: "iPhone 12 Pro", colors: [{ name: "Prateado", hex: "#F0F0F0" }, { name: "Grafite", hex: "#3A3A3C" }, { name: "Dourado", hex: "#D6C7A1" }, { name: "Azul-Pacífico", hex: "#344B64" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-12-pro/iphone12-pro-colors.jpg", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-12-pro/iphone12-pro-colors.jpg" } },
  { name: "iPhone 12", colors: [{ name: "Preto", hex: "#222222" }, { name: "Branco", hex: "#F5F5F5" }, { name: "Red", hex: "#FC0324" }, { name: "Verde", hex: "#A9B689" }, { name: "Azul", hex: "#A0B4C7" }, { name: "Roxo", hex: "#E6DDEB" }], images: { black: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2021-iphone12-colors.png", white: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2021-iphone12-colors.png" } },
];

const storePhotos = [
  { image: feedIphonesAsset.url, alt: "iPhones disponíveis na Rei do Iphone", tag: "IPHONES", title: "Escolha seu novo iPhone", position: "object-center" },
  { image: feedShowcaseOneAsset.url, alt: "Vitrine de produtos Apple da Rei do Iphone", tag: "PRONTA ENTREGA", title: "Tecnologia Apple em um só lugar", position: "object-center" },
  { image: feedShowcaseTwoAsset.url, alt: "Estantes com iPhones e acessórios Apple", tag: "NOSSA VITRINE", title: "Modelos para todos os estilos", position: "object-center" },
  { image: feedLaunchesAsset.url, alt: "Novos modelos de iPhone na loja", tag: "LANÇAMENTOS", title: "As novidades já chegaram", position: "object-center" },
  { image: feedServiceAsset.url, alt: "Área de atendimento da Rei do Iphone", tag: "ATENDIMENTO", title: "Um espaço feito para você", position: "object-center" },
  { image: feedEnvironmentAsset.url, alt: "Ambiente interno da loja Rei do Iphone", tag: "NOSSA LOJA", title: "Venha conhecer a Rei do Iphone", position: "object-center" },
  { image: storeWheelAsset.url, alt: "Espaço da Rei do Iphone com roleta de prêmios", tag: "EXPERIÊNCIA", title: "Sua visita pode valer prêmios", position: "object-center" },
  { image: storeShowcaseAsset.url, alt: "Vitrine de iPhones e logo da Rei do Iphone", tag: "Rei do Iphone", title: "Conectando você ao melhor da Apple", position: "object-center" },
];

const trustItems: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShieldCheck, title: "5 anos", text: "+ de 7.000 clientes" },
  { icon: ShieldCheck, title: "1 ano", text: "de garantia" },
  { icon: MapPin, title: "Loja física", text: "Volta Redonda" },
];

const whatsapp = "https://wa.me/5521979529575?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rei%20do%20Iphone%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20iPhones.";
const whatsappForIphone = (model: string, color: string) => `https://wa.me/5521979529575?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${model} na cor ${color}.`)}`;

function IphoneCard({ product }: { product: (typeof products)[number] }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-[#D1D5DB]/40">
      <div className="relative aspect-[4/4.5] overflow-hidden bg-white">
        {imageFailed ? (
          <div role="img" aria-label={`Ilustração de fallback do ${product.name}`} className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8]">
            <svg viewBox="0 0 180 280" className="h-[78%] max-w-[70%] drop-shadow-xl" aria-hidden="true">
              <rect x="28" y="4" width="124" height="272" rx="25" fill="#252525" stroke="#777" strokeWidth="3" />
              <rect x="36" y="13" width="108" height="254" rx="19" fill="#111" />
              <rect x="74" y="18" width="32" height="7" rx="4" fill="#555" />
              <circle cx="90" cy="251" r="5" fill="#b7b7b7" />
            </svg>
          </div>
        ) : (
          <img src={product.images.black} alt={`${product.name} — cores disponíveis`} loading="lazy" onError={() => setImageFailed(true)} className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold">{product.name}</h3>
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name}`} className="shrink-0 rounded-full border border-[#D1D5DB]/35 p-2.5 text-[#D1D5DB] hover:bg-[#D1D5DB] hover:text-black"><ArrowRight size={16} /></a>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2" aria-label={`Cores disponíveis para ${product.name}`}>
          {product.colors.map((color) => (
            <span key={color.name} className="inline-flex items-center gap-1.5 text-[11px] text-white/55">
              <a href={whatsappForIphone(product.name, color.name)} target="_blank" rel="noreferrer" aria-label={`Pedir informações sobre ${product.name} na cor ${color.name}`} title={`Consultar ${product.name} — ${color.name}`} className="inline-flex rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1D5DB]">
                <span aria-hidden="true" className="h-4 w-4 rounded-full border border-white/25" style={{ backgroundColor: color.hex }} />
              </a>
              {color.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ReiDoIphone() {
  return (
    <main className="site-particle-bg min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-[#9CA3AF]/15 bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3 text-xl font-black tracking-tight" aria-label="Rei do Iphone — início">
            <img src={"/logo-rei-do-iphone.png"} alt="Logo da Rei do Iphone" className="h-11 w-11 rounded-full border border-[#9CA3AF]/40 object-cover" />
            <span className="hidden sm:inline">Rei do Iphone</span>
          </a>
          <nav className="hidden gap-7 text-sm text-white/65 md:flex">
            <a href="#loja" className="hover:text-[#D1D5DB]">Inicio</a>
            <a href="#iphones" className="hover:text-[#D1D5DB]">iPhones</a>
            <a href="#contato" className="hover:text-[#D1D5DB]">Contato</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#D1D5DB] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#F3F4F6]">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-[640px] overflow-hidden border-b border-[#9CA3AF]/10">
        <img src={storeShowcaseAsset.url} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-transparent to-[#080808]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
          <img src={"/logo-rei-do-iphone.png"} alt="Rei do Iphone" className="mx-auto mb-7 h-32 w-32 rounded-full border border-[#D1D5DB]/50 object-cover shadow-2xl md:h-40 md:w-40" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[.35em] text-[#D1D5DB]">Rei do Iphone</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Conectando você ao melhor da Apple.</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">Loja de iPhone em Volta Redonda.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#iphones" className="inline-flex items-center gap-2 rounded-full bg-[#D1D5DB] px-6 py-3.5 text-sm font-bold text-black hover:bg-[#F3F4F6]">Ver iPhones <ArrowRight size={17} /></a>
            <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB]/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-[#D1D5DB]/10"><Instagram size={17} /> @saycell_</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#9CA3AF]/10 bg-white/[.015]">
        <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center justify-center gap-3 px-5 py-7 text-center">
              <Icon size={21} className="text-[#D1D5DB]" />
              <div><p className="font-bold">{title}</p><p className="text-xs text-white/45">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="iphones" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[.3em] text-[#D1D5DB]">Apple</p><h2 className="text-3xl font-black md:text-4xl">Nossos Modelos</h2></div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden text-sm font-bold text-[#D1D5DB] md:block">Consultar disponibilidade →</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <IphoneCard key={product.name} product={product} />
          ))}       </div>
        <div className="mt-8 text-center"><p className="text-xs text-white/40">Pague só na entrega.</p></div>
      </section>

      <section id="loja" className="scroll-mt-20 border-b border-border/20 bg-[var(--brand-canvas)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-xl text-center md:mb-14">
            <img src={"/logo-rei-do-iphone.png"} alt="Rei do Iphone" className="mx-auto mb-4 h-14 w-14 rounded-full border border-[var(--brand-silver)]/40 object-cover" />
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[var(--brand-silver)]">Rei do Iphone por dentro</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Nosso feed</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/55">Produtos, novidades e o espaço que preparamos para você.</p>
          </div>

          <div className="mx-auto grid max-w-md gap-7 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {storePhotos.map((photo) => (
              <article key={photo.alt} className="group overflow-hidden rounded-2xl border border-[var(--brand-silver)]/20 bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(255,255,255,0.10)]">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-foreground/10 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={"/logo-rei-do-iphone.png"} alt="" className="h-9 w-9 shrink-0 rounded-full border border-[var(--brand-silver)]/50 object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">saycell_</p>
                      <p className="truncate text-[11px] text-foreground/45">Volta Redonda</p>
                    </div>
                  </div>
                  <Instagram size={18} className="shrink-0 text-[var(--brand-silver)]" aria-hidden="true" />
                </div>

                <div className="relative aspect-[9/16] overflow-hidden bg-background">
                  <img src={photo.image} alt={photo.alt} loading="lazy" className={`h-full w-full object-cover ${photo.position} transition duration-700 group-hover:scale-[1.02]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[.2em] text-[var(--brand-silver)]">{photo.tag}</p>
                    <h3 className="max-w-xs text-xl font-semibold leading-tight text-foreground">{photo.title}</h3>
                    <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-silver)] px-5 py-3.5 text-xs font-black uppercase text-background transition hover:bg-[var(--brand-silver-light)]">
                      Ver disponibilidade <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#D1D5DB]/20 bg-[#0d0d0d] p-8 text-center md:p-12">
          <img src={"/logo-rei-do-iphone.png"} alt="Logo da Rei do Iphone" className="mx-auto h-28 w-28 rounded-full border border-[#D1D5DB]/40 object-cover" />
          <h2 className="mt-4 text-3xl font-black">Rei do Iphone</h2>
          <p className="mt-2 text-sm text-white/50">Loja física em Volta Redonda • Pague só na entrega</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#D1D5DB] px-6 py-3.5 text-sm font-black text-black"><MessageCircle size={18} /> WhatsApp</a>
            <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB]/30 px-6 py-3.5 text-sm font-black"><Instagram size={18} /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#9CA3AF]/10 py-7 text-center text-xs text-white/35">
        <p>Rei do Iphone • Loja de iPhone em Volta Redonda</p>
        <p className="mt-1">© {new Date().getFullYear()} Rei do Iphone</p>
      </footer>
    </main>
  );
}

import { BRAND, INSTAGRAM_URL, MAPS_URL } from "@/config/site";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#iphones" },
  { label: "Instagram", href: INSTAGRAM_URL, external: true },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: MAPS_URL, external: true },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-sm font-extrabold tracking-[0.28em] text-gradient">
            {BRAND.logoTop}
          </p>
          <p className="text-[10px] tracking-[0.42em] text-muted-foreground">
            {BRAND.logoBottom}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © 2026 {BRAND.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

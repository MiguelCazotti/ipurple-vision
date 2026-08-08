import { CATEGORIES, whatsappUrlFor } from "@/config/site";
import { Reveal } from "./Reveal";

export function CategoryGrid() {
  return (
    <section id="categorias" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Tecnologia para todos os{" "}
            <span className="text-gradient">momentos</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.05}>
              <a
                href={whatsappUrlFor(cat.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-52 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary-light/50 hover:shadow-[0_30px_80px_-45px_var(--primary)] sm:h-72"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 size-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_120%,oklch(0.55_0.24_295/45%),transparent_60%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1 sm:p-6">
                  <h3 className="font-display text-base font-bold sm:text-xl">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    {cat.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, whatsappUrlFor } from "@/config/site";
import { Reveal } from "./Reveal";

export function ProductSection() {
  return (
    <section id="iphones" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Escolha o seu próximo <span className="text-gradient">iPhone</span>.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Performance, câmera e design para acompanhar o seu ritmo.
          </p>
        </Reveal>

        <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 0.06}
              className="w-[82vw] shrink-0 snap-center sm:w-auto"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:border-primary-light/40 hover:shadow-[0_30px_80px_-40px_var(--primary)] sm:flex-row">
                <div
                  aria-hidden="true"
                  className="radial-glow pointer-events-none absolute -left-16 top-1/2 size-56 -translate-y-1/2 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative w-full overflow-hidden bg-black sm:w-2/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-full"
                  />
                </div>

                <div className="relative flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {product.storage.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium tracking-wide text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <span
                        key={c.name}
                        title={c.name}
                        className="size-4 rounded-full border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                    <span className="text-[10px] text-muted-foreground">
                      {product.colors.length} cores
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      {product.price}
                    </span>
                    <a
                      href={whatsappUrlFor(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-[image:var(--gradient-brand)]"
                    >
                      Tenho interesse <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

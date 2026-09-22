import { ArrowUpRight, BatteryCharging, Gauge, Zap } from "lucide-react";
import { SCOOTERS, whatsappUrlFor } from "@/config/site";
import { Reveal } from "./Reveal";

const icons = [Zap, BatteryCharging, Gauge];

export function ScooterSection() {
  return (
    <section id="scooters" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="radial-glow pointer-events-none absolute -right-48 top-0 size-[620px] opacity-40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
            Mobilidade elétrica
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
            Seu novo jeito de <span className="text-gradient">se movimentar</span>.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Scooters elétricas para quem busca economia, conforto e praticidade na cidade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {SCOOTERS.map((scooter, index) => (
            <Reveal key={scooter.name} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card/60">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={scooter.image}
                    alt={scooter.name}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-bold backdrop-blur-xl">
                    {scooter.price}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold">{scooter.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{scooter.description}</p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {scooter.specs.map((spec, specIndex) => {
                      const Icon = icons[specIndex] ?? Zap;
                      return (
                        <div key={spec} className="glass-panel flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl px-2 text-center">
                          <Icon className="size-4 text-primary-light" />
                          <span className="text-[10px] font-semibold text-muted-foreground sm:text-xs">{spec}</span>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    href={whatsappUrlFor(scooter.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary-light"
                  >
                    Consultar no WhatsApp <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
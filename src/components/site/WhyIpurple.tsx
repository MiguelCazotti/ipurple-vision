import { Headphones, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    num: "01",
    title: "Produtos selecionados",
    icon: Sparkles,
    text: "Cada item passa por curadoria antes de chegar até você.",
  },
  {
    num: "02",
    title: "Atendimento especializado",
    icon: UserRoundCheck,
    text: "Ajudamos você a escolher o aparelho certo para o seu uso.",
  },
  {
    num: "03",
    title: "Compra segura",
    icon: ShieldCheck,
    text: "Transparência do primeiro contato até a entrega.",
  },
  {
    num: "04",
    title: "Suporte personalizado",
    icon: Headphones,
    text: "Continuamos por perto depois da compra, sempre que precisar.",
  },
];

export function WhyIpurple() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Por que <span className="text-gradient">IPurple</span>?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-light/40">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-px h-px bg-[image:var(--gradient-brand)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="font-display text-xs font-bold tracking-[0.3em] text-muted-foreground">
                  {item.num}
                </span>
                <item.icon className="mt-6 size-6 text-primary-light" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const STATS = [
  { value: "4,9★", label: "Avaliação no Google" },
  { value: "86+", label: "Avaliações" },
  { value: "100%", label: "Atendimento personalizado" },
];

export function TrustSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="radial-glow pointer-events-none absolute left-1/2 top-1/2 size-[700px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-display text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-2xl text-balance font-display text-lg leading-relaxed text-muted-foreground sm:text-2xl">
            Uma loja que conquistou clientes pela qualidade dos produtos e pelo
            atendimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

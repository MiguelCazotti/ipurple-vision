import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ActionLink } from "./ActionLink";
import { IPhoneShowcase } from "./IPhoneShowcase";
import { WHATSAPP_URL } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
        <div className="radial-glow absolute -top-40 left-1/2 size-[900px] max-w-[160vw] -translate-x-1/2 blur-3xl opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="glass-panel inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground sm:text-[11px]">
            TECNOLOGIA • PERFORMANCE • ESTILO
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Seu próximo
            <br />
            <span className="text-gradient">iPhone</span> está
            <br />
            aqui.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-balance text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
            Os melhores smartphones, acessórios e experiências em tecnologia, com
            atendimento de quem entende do assunto.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ActionLink href="#iphones" className="w-full sm:w-auto">
              Ver produtos <ArrowRight className="size-4" />
            </ActionLink>
            <ActionLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </ActionLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <IPhoneShowcase />
        </motion.div>
      </div>
    </section>
  );
}

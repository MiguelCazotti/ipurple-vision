import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/config/site";
import { ActionLink } from "./ActionLink";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="radial-glow pointer-events-none absolute left-1/2 top-1/2 size-[820px] max-w-[170vw] -translate-x-1/2 -translate-y-1/2 blur-3xl"
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Pronto para encontrar o seu próximo{" "}
            <span className="text-gradient">iPhone</span>?
          </h2>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Fale com a IPurple Imports e descubra as opções disponíveis.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ActionLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </ActionLink>
            <ActionLink
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Instagram className="size-4" /> Ver Instagram
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

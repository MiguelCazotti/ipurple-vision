import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  BRAND,
  CONTACT,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/config/site";
import { ActionLink } from "./ActionLink";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {BRAND.name}
              </h2>
              <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
                <span className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary-light" />
                  <span>
                    {CONTACT.addressLine1}
                    <br />
                    {CONTACT.addressLine2}
                  </span>
                </span>
                <a
                  href={`tel:+${CONTACT.whatsappNumber}`}
                  className="mt-4 flex items-center gap-3 text-foreground transition-colors hover:text-primary-light"
                >
                  <Phone className="size-4 shrink-0 text-primary-light" />
                  {CONTACT.phoneDisplay}
                </a>
              </address>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col justify-center gap-3">
              <ActionLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </ActionLink>
              <ActionLink
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Instagram className="size-4" /> Instagram
              </ActionLink>
              <ActionLink
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <MapPin className="size-4" /> Google Maps
              </ActionLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

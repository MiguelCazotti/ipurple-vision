import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, NAV_LINKS, WHATSAPP_URL } from "@/config/site";
import { ActionLink } from "./ActionLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex min-w-0 shrink-0 flex-col leading-none">
          <span className="font-display text-sm font-extrabold tracking-[0.28em] text-gradient sm:text-base">
            {BRAND.logoTop}
          </span>
          <span className="text-[9px] font-medium tracking-[0.42em] text-muted-foreground sm:text-[10px]">
            {BRAND.logoBottom}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary-light after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ActionLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-5 py-2.5 sm:inline-flex"
          >
            Comprar agora
          </ActionLink>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass-panel grid size-10 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-display text-lg tracking-tight text-foreground"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <ActionLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full"
                onClick={() => setOpen(false)}
              >
                Comprar agora
              </ActionLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

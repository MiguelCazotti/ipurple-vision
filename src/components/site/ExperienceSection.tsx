import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EXPERIENCE_IMAGE } from "@/config/site";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-black py-24 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="radial-glow pointer-events-none absolute right-0 top-1/3 size-[600px] max-w-[130vw] translate-x-1/3 opacity-50 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div style={{ y: textY, opacity }}>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Não é apenas
            <br />
            um celular.
            <br />
            É a sua próxima
            <br />
            <span className="text-gradient">experiência</span>.
          </h2>
        </motion.div>

        <motion.div style={{ y }} className="relative flex justify-center">
          <div className="animate-ip-float">
            <img
              src={EXPERIENCE_IMAGE}
              alt="Smartphone flutuando com iluminação roxa"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[380px] w-auto rounded-3xl object-contain drop-shadow-[0_40px_80px_oklch(0.55_0.24_295/45%)] sm:h-[520px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

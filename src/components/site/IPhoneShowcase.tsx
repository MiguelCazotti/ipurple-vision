import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { BadgeCheck, Heart, MessageCircle, Send } from "lucide-react";
import {
  BRAND,
  INSTAGRAM_FOLLOWERS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS,
} from "@/config/site";

function InstagramScreen() {
  const feed = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2.1rem] bg-[#0a0a0f] text-[10px] text-white/90">
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[8px] font-semibold text-white/70">
        <span>9:41</span>
        <span className="tracking-widest">5G ▮▮▮</span>
      </div>

      {/* perfil */}
      <div className="px-4 pt-3">
        <div className="flex items-center gap-3">
          <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] p-[2px]">
            <span className="grid size-full place-items-center rounded-full bg-[#0a0a0f] font-display text-[11px] font-bold text-white">
              iP
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <span className="truncate font-semibold">{INSTAGRAM_HANDLE}</span>
              <BadgeCheck className="size-3 shrink-0 text-tech-blue" />
            </div>
            <p className="truncate text-[8px] text-white/50">
              {BRAND.name} · {BRAND.city}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-center text-[8px] text-white/60">
          <div>
            <p className="text-[11px] font-bold text-white">248</p>
            <p>publicações</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-white">{INSTAGRAM_FOLLOWERS}</p>
            <p>seguidores</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-white">312</p>
            <p>seguindo</p>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-lg bg-[image:var(--gradient-brand)] py-1.5 text-center text-[9px] font-semibold">
            Seguir
          </span>
          <span className="flex-1 rounded-lg bg-white/10 py-1.5 text-center text-[9px] font-semibold">
            Mensagem
          </span>
        </div>

        {/* stories */}
        <div className="mt-3 flex gap-3 overflow-hidden">
          {["Novidades", "iPhones", "Watch", "Loja"].map((s) => (
            <div key={s} className="flex w-11 shrink-0 flex-col items-center gap-1">
              <span className="size-11 rounded-full bg-[image:var(--gradient-brand)] p-[2px]">
                <span className="block size-full rounded-full border-2 border-[#0a0a0f] bg-white/10" />
              </span>
              <span className="truncate text-[7px] text-white/60">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* feed animado */}
      <div className="mt-3 h-[52%] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_88%,transparent)]">
        <div className="animate-ip-feed">
          {feed.map((post, i) => (
            <div key={i} className="px-3 pb-3">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-24 w-full object-cover"
                />
                <div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 text-[8px] text-white/70">
                  <Heart className="size-2.5" />
                  <MessageCircle className="size-2.5" />
                  <Send className="size-2.5" />
                  <span className="ml-auto truncate">{post.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* barra inferior */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0a0a0f]/90 px-6 py-2 backdrop-blur">
        <div className="flex items-center justify-between text-white/50">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`size-3 rounded-[4px] border ${i === 0 ? "border-white bg-white/20" : "border-white/30"}`}
            />
          ))}
        </div>
        <span className="mx-auto mt-2 block h-1 w-24 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

export function IPhoneShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), {
    stiffness: 90,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-12, 12]), {
    stiffness: 90,
    damping: 20,
  });

  const handleMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={wrapRef}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto flex w-full max-w-sm items-center justify-center py-6 sm:py-10"
      style={{ perspective: "1400px" }}
    >
      {/* glow de fundo */}
      <div
        aria-hidden="true"
        className="radial-glow pointer-events-none absolute left-1/2 top-1/2 size-[125%] -translate-x-1/2 -translate-y-1/2 blur-2xl"
      />
      {/* partículas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {[12, 28, 44, 62, 78, 90].map((left, i) => (
          <span
            key={left}
            className="animate-ip-particle absolute bottom-8 size-1 rounded-full bg-primary-light"
            style={{
              left: `${left}%`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="animate-ip-float">
          <div
            className="animate-ip-spin-y"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-[520px] w-[256px] rounded-[2.6rem] bg-[linear-gradient(150deg,oklch(0.42_0.09_295),oklch(0.16_0.02_285)_38%,oklch(0.1_0.01_285)_60%,oklch(0.5_0.12_290))] p-[3px] shadow-[0_40px_100px_-30px_oklch(0.55_0.24_295/60%)] sm:h-[600px] sm:w-[296px]">
              <div className="relative size-full overflow-hidden rounded-[2.4rem] bg-black p-[6px]">
                <div className="relative size-full overflow-hidden rounded-[2.1rem] bg-[#0a0a0f]">
                  <InstagramScreen />
                  {/* dynamic island */}
                  <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                  {/* reflexo */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(1_0_0/16%)_0%,transparent_28%,transparent_70%,oklch(1_0_0/8%)_100%)]"
                  />
                </div>
              </div>
              {/* botões laterais */}
              <span className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l bg-white/25" />
              <span className="absolute -left-[3px] top-44 h-14 w-[3px] rounded-l bg-white/25" />
              <span className="absolute -right-[3px] top-40 h-20 w-[3px] rounded-r bg-white/25" />
            </div>
          </div>
        </div>

        {/* sombra no chão */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-[100%] bg-primary/40 blur-2xl"
        />
      </motion.div>
    </div>
  );
}

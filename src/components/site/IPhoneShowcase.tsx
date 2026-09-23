import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FACEBOOK_VIDEOS } from "@/config/site";

export function IPhoneShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [videoIndex] = useState(() =>
    Math.floor(Math.random() * FACEBOOK_VIDEOS.length),
  );

  const video = FACEBOOK_VIDEOS[videoIndex];
  const videoUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&autoplay=true&mute=false&width=500`;

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
      <div
        aria-hidden="true"
        className="radial-glow pointer-events-none absolute left-1/2 top-1/2 size-[125%] -translate-x-1/2 -translate-y-1/2 blur-2xl"
      />
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
                  <iframe
                    key={video.url}
                    src={videoUrl}
                    title={video.title}
                    className="absolute inset-0 size-full border-0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(1_0_0/16%)_0%,transparent_28%,transparent_70%,oklch(1_0_0/8%)_100%)]" />
                  <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
              <span className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l bg-white/25" />
              <span className="absolute -left-[3px] top-44 h-14 w-[3px] rounded-l bg-white/25" />
              <span className="absolute -right-[3px] top-40 h-20 w-[3px] rounded-r bg-white/25" />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-[100%] bg-primary/40 blur-2xl"
        />
      </motion.div>
    </div>
  );
}

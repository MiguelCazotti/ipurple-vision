import { Heart, Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_POSTS, INSTAGRAM_URL } from "@/config/site";
import { ActionLink } from "./ActionLink";
import { Reveal } from "./Reveal";

export function InstagramSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Veja o que está acontecendo na{" "}
            <span className="text-gradient">IPurple</span>.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Novidades, ofertas e lançamentos direto no nosso Instagram.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {INSTAGRAM_POSTS.map((post, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <div className="flex items-center gap-3 text-xs text-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="size-3.5" /> 124
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="size-3.5" /> 12
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[11px] text-muted-foreground">
                    {post.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-3">
          <ActionLink
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="size-4" /> Ver Instagram
          </ActionLink>
          <span className="text-xs text-muted-foreground">{INSTAGRAM_HANDLE}</span>
        </Reveal>
      </div>
    </section>
  );
}

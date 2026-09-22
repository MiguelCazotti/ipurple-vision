import { ExternalLink, Facebook, Play } from "lucide-react";
import { FACEBOOK_URL, FACEBOOK_VIDEOS } from "@/config/site";
import { ActionLink } from "./ActionLink";
import { Reveal } from "./Reveal";

function embedUrl(url: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;
}

export function FacebookVideos() {
  return (
    <section id="videos" className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex max-w-3xl items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Play className="ml-0.5 size-5 fill-current" />
          </span>
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Veja as scooters <span className="text-gradient">em movimento</span>.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Vídeos publicados pela IPurple Imports Matriz no Facebook.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FACEBOOK_VIDEOS.map((video, index) => (
            <Reveal key={video.url} delay={index * 0.06}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[9/16] bg-background">
                  <iframe
                    src={embedUrl(video.url)}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="size-full border-0"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold">{video.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{video.description}</p>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light">
                    Abrir no Facebook <ExternalLink className="size-3" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <ActionLink href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" variant="outline">
            <Facebook className="size-4" /> Ver página no Facebook
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const TAG_COLORS: Record<string, string> = {
  "Motion / Edit":   "hsl(195,80%,62%)",
  "Motion Graphics": "hsl(195,80%,62%)",
  "Video Editing":   "hsl(220,70%,65%)",
  "Short-form":      "hsl(32,80%,62%)",
  "Google Drive":    "hsl(120,45%,55%)",
};

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40" style={{ borderTop: "1px solid rgba(220,200,170,0.10)" }}>
      <div className="section-gutter mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          Selected work
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-5">
          <BlurText
            text="Some things I've made."
            as="h2"
            className="font-display uppercase text-foreground max-w-[18ch]"
            style={{ fontSize: "clamp(38px, 5vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
            delay={0.07}
            startDelay={0.05}
          />
          <p className="text-[15px] text-foreground/50 max-w-xs leading-relaxed md:text-right">
            Motion graphics, edits, and short-form — a mix of what I've been building.
          </p>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="section-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIO_ITEMS.map((item, i) => {
          const isYouTube     = item.url.includes("youtu");
          const isShort       = item.url.includes("shorts");
          const isDrive       = item.url.includes("drive.google");
          const accentColor   = TAG_COLORS[item.tag] ?? "hsl(var(--ochre))";

          // Extract YouTube video ID for thumbnail
          let thumbUrl: string | null = null;
          const ytMatch = item.url.match(/(?:youtu\.be\/|v=|shorts\/)([A-Za-z0-9_-]{11})/);
          if (ytMatch) {
            thumbUrl = `https://i.ytimg.com/vi/${ytMatch[1]}/hqdefault.jpg`;
          }

          // Full-width for the last item (Google Drive)
          const isWide = i === PORTFOLIO_ITEMS.length - 1;

          return (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`liquid-glass rounded-2xl overflow-hidden group relative flex flex-col ${isWide ? "sm:col-span-2 lg:col-span-3" : ""}`}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 28 } }}
            >
              {/* Thumbnail / placeholder */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: isWide ? "21/6" : isShort ? "9/14" : "16/9" }}
              >
                {thumbUrl ? (
                  <img
                    src={thumbUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  // Google Drive — no thumbnail, just a styled placeholder
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(120,30%,10%) 0%, hsl(120,20%,7%) 100%)",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                        style={{ background: "rgba(100,220,100,0.12)" }}
                      >
                        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                          <path d="M12 2L2 19.5h7l3-5.5 3 5.5h7L12 2z" fill="rgba(100,220,100,0.7)" />
                        </svg>
                      </div>
                      <p className="text-sm text-foreground/50">Full portfolio on Google Drive</p>
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center">
                    {isYouTube ? (
                      <Play className="size-5 fill-current text-foreground ml-0.5" />
                    ) : (
                      <ArrowUpRight className="size-5 text-foreground" />
                    )}
                  </div>
                </div>

                {/* Top gradient */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Card footer */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display uppercase text-foreground text-lg leading-tight">{item.title}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: `${accentColor}18`,
                      color: accentColor,
                    }}
                  >
                    {item.tag}
                  </span>
                  <ArrowUpRight className="size-4 text-foreground/30 group-hover:text-foreground/70 transition-colors" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

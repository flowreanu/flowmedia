import { motion } from "framer-motion";
import { Layers, Scissors, Music2, ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = { Layers, Scissors, Music2 };

export function ServicesBento() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="section-gutter mb-14">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          What I do
        </span>
        <BlurText
          text="Three crafts. One editor."
          as="h2"
          className="font-display uppercase mt-5 text-foreground"
          style={{ fontSize: "clamp(42px, 6vw, 96px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
          delay={0.07}
          startDelay={0.05}
        />
        <p className="mt-4 text-foreground/50 max-w-md text-[15px] leading-relaxed">
          Motion, editing, and sound — handled by one person who cares about all three equally.
        </p>
      </div>

      {/* 3-card grid — first card tall, two stacked beside */}
      <div className="section-gutter grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-5">

        {/* Card 0 — tall hero card */}
        <motion.div
          className="liquid-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group flex flex-col min-h-[480px]"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 28 } }}
        >
          {/* Glow accent */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, hsl(var(--ochre)) 0%, transparent 70%)", filter: "blur(40px)" }}
          />

          <div className="flex items-start justify-between mb-6">
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <Layers className="size-5 text-foreground" />
            </div>
            <ArrowUpRight className="size-5 text-foreground/20 group-hover:text-ochre transition-colors" />
          </div>

          <div className="mt-auto">
            <h3
              className="font-display uppercase text-foreground mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 0.92 }}
            >
              {SERVICES[0].title}
            </h3>
            <p className="text-[15px] text-foreground/55 leading-relaxed max-w-[36ch]">
              {SERVICES[0].body}
            </p>
            <div className="mt-6 liquid-glass rounded-full px-4 py-1.5 inline-block">
              <span className="text-xs text-foreground/60">{SERVICES[0].tag}</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-px w-14" style={{ background: "linear-gradient(to right, hsl(var(--ochre)), transparent)" }} />
          </div>
        </motion.div>

        {/* Right column — two stacked cards */}
        <div className="flex flex-col gap-5">
          {([1, 2] as const).map((idx, i) => {
            const service = SERVICES[idx];
            const Icon = ICON_MAP[service.icon] ?? Scissors;
            return (
              <motion.div
                key={service.title}
                className="liquid-glass rounded-2xl p-7 relative overflow-hidden group flex flex-col flex-1 min-h-[220px]"
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay: (i + 1) * 0.1 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 28 } }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="size-4 text-foreground/20 group-hover:text-ochre transition-colors" />
                </div>

                <h3
                  className="font-display uppercase text-foreground mb-3"
                  style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: 0.95 }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{service.body}</p>

                <div className="mt-auto pt-5">
                  <div className="liquid-glass rounded-full px-3 py-1 inline-block mb-3">
                    <span className="text-xs text-foreground/55">{service.tag}</span>
                  </div>
                  <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--ochre)), transparent)" }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

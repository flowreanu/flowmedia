import { motion } from "framer-motion";
import { User, Clock, Repeat2, Headphones } from "lucide-react";
import { BlurText } from "./BlurText";
import { REASONS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = { User, Clock, Repeat2, Headphones };

export function Pourquoi() {
  return (
    <section className="relative py-28 md:py-40" style={{ borderTop: "1px solid rgba(220,200,170,0.10)" }}>
      <div className="section-gutter text-center mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          Why work with me
        </span>
        <BlurText
          text="No agency overhead. Just good work."
          as="h2"
          className="font-display uppercase mx-auto mt-5 text-foreground"
          style={{ fontSize: "clamp(36px, 5vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
          delay={0.07}
          startDelay={0.05}
        />
        <p className="mt-4 text-foreground/50 text-[15px] leading-relaxed max-w-lg mx-auto">
          When you hire FlowMedia, you work directly with Andrei — start to finish.
        </p>
      </div>

      <div className="section-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REASONS.map((reason, i) => {
          const Icon = ICON_MAP[reason.icon] ?? User;
          return (
            <motion.div
              key={reason.title}
              className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 min-h-[260px]"
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay: i * 0.09 }}
            >
              <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display uppercase text-xl text-foreground tracking-tight mb-2">{reason.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{reason.body}</p>
              </div>
              <div className="mt-auto">
                <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--ochre)), transparent)" }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

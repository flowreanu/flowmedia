import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { BlurText } from "./BlurText";
import { FAQ_ITEMS } from "@/lib/constants";

function AccordionItem({ q, a, open, onToggle }: {
  q: string; a: string; open: boolean; onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(220,200,170,0.12)" }}>
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left hover:text-ochre transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span
          className="font-display uppercase text-foreground group-hover:text-ochre transition-colors"
          style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
        >
          {q}
        </span>
        <span className="shrink-0 liquid-glass rounded-full w-8 h-8 flex items-center justify-center">
          {open ? <Minus className="size-3.5" style={{ color: "hsl(var(--ochre))" }} />
                : <Plus className="size-3.5 text-foreground/60" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-foreground/60 leading-relaxed max-w-[60ch] pb-7">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="section-gutter grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-16">
        {/* Left — sticky heading */}
        <div className="md:sticky md:top-24 md:self-start">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
            FAQ
          </span>
          <BlurText
            text="Frequently asked."
            as="h2"
            className="font-display uppercase mt-5 text-foreground"
            style={{ fontSize: "clamp(38px, 5vw, 76px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
            delay={0.07}
            startDelay={0.05}
          />
          <p className="mt-5 text-[15px] text-foreground/55 leading-relaxed max-w-[32ch]">
            Still have questions? We're one message away.
          </p>
          <a
            href="mailto:hello@framecraft.studio"
            className="mt-8 inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-sm text-foreground hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Contact us
          </a>
        </div>

        {/* Right — accordion */}
        <div style={{ borderTop: "1px solid rgba(220,200,170,0.12)" }}>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

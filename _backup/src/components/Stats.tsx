import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedStat({ value }: { value: string }) {
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Extract numeric portion and suffix
    const match   = value.match(/^([\d.]+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const target  = parseFloat(match[1]);
    const suffix  = match[2];
    const start   = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const p   = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      const current = Math.round(eased * target * 10) / 10;
      setDisplay(`${Number.isInteger(current) ? current : current.toFixed(0)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(210, 60%, 10%) 0%, hsl(220, 18%, 7%) 50%, hsl(195, 40%, 8%) 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(100,220,255,0.05) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(100,220,255,0.05) 80px)",
        }}
      />

      {/* Top / bottom fades */}
      <div className="absolute top-0 inset-x-0 h-48 z-[2] gradient-fade-t pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 z-[2] gradient-fade-b pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 section-gutter">
        <div className="liquid-glass rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 }}
              >
                <span
                  className="font-display italic text-foreground leading-none"
                  style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
                >
                  <AnimatedStat value={stat.value} />
                </span>
                <span className="text-xs text-foreground/50 mt-3 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

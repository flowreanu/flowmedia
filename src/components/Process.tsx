import { motion } from "framer-motion";
import { BlurText } from "./BlurText";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40">
      {/* Heading */}
      <div className="section-gutter mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          How it works
        </span>
        <BlurText
          text="From raw footage to final export."
          as="h2"
          className="font-display uppercase mt-5 text-foreground max-w-[18ch]"
          style={{ fontSize: "clamp(38px, 5vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
          delay={0.07}
          startDelay={0.05}
        />
      </div>

      {/* Steps */}
      <div className="section-gutter grid grid-cols-1 md:grid-cols-4 gap-0">
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            className="relative px-0 md:px-8 py-10 md:py-14 flex flex-col gap-4 items-start"
            style={i > 0 ? { borderLeft: "1px solid rgba(220,200,170,0.12)" } : {}}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.12 }}
          >
            {/* Big number */}
            <span
              className="font-display leading-none select-none -mb-4"
              style={{
                fontSize: "clamp(80px, 10vw, 140px)",
                color: "hsl(var(--ochre) / 0.2)",
              }}
            >
              {step.n}
            </span>
            <h3
              className="font-display uppercase text-foreground tracking-tight"
              style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
            >
              {step.title}
            </h3>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-[28ch]">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

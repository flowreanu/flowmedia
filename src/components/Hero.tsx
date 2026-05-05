import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { ScrubSequence } from "./ScrubSequence";
import { BlurText } from "./BlurText";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT, PARTNERS } from "@/lib/constants";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: HeroProps) {
  return (
    <section
      ref={scrollRef as React.RefObject<HTMLElement>}
      className="relative bg-background"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={scrollRef}
          className="absolute inset-0 w-full h-full z-0"
        />

        <p className="sr-only">
          FlowMedia — Motion graphics, video editing, and sound design by Andrei.
        </p>

        {/* Vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(120% 80% at 50% 60%, transparent 30%, rgba(0,0,0,0.70) 100%)" }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-[35vh] z-[2] gradient-fade-b pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-background"
                style={{ background: "hsl(var(--ochre))" }}
              >
                Freelancer
              </span>
              <span className="pr-3 text-sm text-foreground/80">Available for projects · Andrei</span>
            </div>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Motion. Sound. Story."
            as="h1"
            className="mt-6 font-display uppercase text-foreground max-w-[14ch] leading-none"
            style={{ fontSize: "clamp(52px, 9vw, 136px)", lineHeight: 0.92, letterSpacing: "-0.01em" } as React.CSSProperties}
            delay={0.09}
            startDelay={0.15}
          />

          {/* Sub */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="mt-6 text-base md:text-lg text-foreground/60 max-w-md leading-relaxed"
          >
            I'm Andrei — a freelance motion designer and video editor who makes visuals that people actually watch until the end.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <a
              href="#cta"
              className="flex items-center gap-1.5 rounded-full px-7 py-3.5 text-base font-medium text-background hover:opacity-90 transition-opacity"
              style={{ background: "hsl(var(--ochre))" }}
            >
              Work with me <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#work"
              className="liquid-glass-strong flex items-center gap-1.5 rounded-full px-7 py-3.5 text-base text-foreground hover:bg-white/5 transition-colors"
            >
              <Play className="size-4 fill-current" /> See my work
            </a>
          </motion.div>

          {/* Tools row */}
          <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4 px-6">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/60">
              Tools I work with
            </span>
            <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
              {PARTNERS.map((p) => (
                <span key={p} className="font-display italic text-lg md:text-xl text-foreground/40 tracking-tight">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

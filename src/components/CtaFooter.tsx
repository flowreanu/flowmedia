import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";

const FOOTER_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube",   href: "https://www.youtube.com/@tyDified" },
  { label: "Vimeo",     href: "https://vimeo.com" },
  { label: "Email",     href: "mailto:andrei@proton.me" },
];

export function CtaFooter() {
  return (
    <section id="cta" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(210,60%,14%) 0%, hsl(220,18%,7%) 70%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          mixBlendMode: "overlay",
        }}
      />

      {/* Glow */}
      <div
        className="absolute z-[1] rounded-full pointer-events-none"
        style={{
          width: "60vw", height: "60vw",
          top: "5%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, hsl(195,80%,50%,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="absolute top-0 inset-x-0 h-40 z-[2] gradient-fade-t pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 z-[3] gradient-fade-b pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
            Let's make something
          </span>
        </motion.div>

        <BlurText
          text="Got a project in mind?"
          as="h2"
          className="font-display italic text-foreground mt-6"
          style={{ fontSize: "clamp(48px, 9vw, 160px)", lineHeight: 0.88, letterSpacing: "-0.02em" } as React.CSSProperties}
          delay={0.09}
          startDelay={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.65 }}
          className="mt-8 text-base md:text-lg text-foreground/55 max-w-md leading-relaxed"
        >
          Drop me a message with a brief and I'll get back to you with a quote — same day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex items-center gap-3 flex-wrap justify-center"
        >
          <a
            href="mailto:andrei@proton.me"
            className="flex items-center gap-1.5 rounded-full px-8 py-4 text-base font-medium text-background hover:opacity-90 transition-opacity"
            style={{ background: "hsl(var(--ochre))" }}
          >
            andrei@proton.me <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#work"
            className="liquid-glass-strong flex items-center gap-1.5 rounded-full px-8 py-4 text-base text-foreground hover:bg-white/5 transition-colors"
          >
            See my work first
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 w-full mt-auto" style={{ borderTop: "1px solid rgba(220,200,170,0.08)" }}>
        <div className="section-gutter py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-foreground/35">
            © 2026 FlowMedia · Andrei · All rights reserved.
          </span>
          <nav className="flex items-center gap-6">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-foreground/35 hover:text-foreground/65 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

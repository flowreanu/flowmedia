import { motion } from "framer-motion";
import { Smartphone, FileVideo, Mic2, Sparkles, Check, Info } from "lucide-react";
import { BlurText } from "./BlurText";

const SERVICES = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Short-Form Content",
    sub: "TikTok · Reels · Shorts",
    description:
      "Optimized for high retention and engagement. Dynamic jump cuts, animated captions, sound design, B-roll integration, and color grading.",
    packages: [
      { label: "Single Video",                     usd: "$45",       ron: "210 RON" },
      { label: "Starter Bundle — 10 videos",        usd: "$400",      ron: "1,840 RON" },
      { label: "Growth Monthly — 20–30 videos",     usd: "From $800", ron: "3,680 RON" },
    ],
    note: null,
    highlight: false,
  },
  {
    icon: FileVideo,
    emoji: "🎥",
    title: "Long-Form Content",
    sub: "YouTube · Vlogs · VSLs",
    description:
      "Comprehensive storytelling and post-production for videos up to 15 minutes. Narrative editing, audio mixing, lower thirds, and transitions.",
    packages: [
      { label: "Standard Edit — clean cuts & basic graphics",          usd: "From $125", ron: "575 RON" },
      { label: "Premium Edit — advanced motion & sound design",        usd: "From $250", ron: "1,150 RON" },
    ],
    note: "Prices vary based on raw footage length and complexity.",
    highlight: true, // featured card
  },
  {
    icon: Mic2,
    emoji: "🎙️",
    title: "Podcast & Interview",
    sub: "Multi-cam · Audio · Highlights",
    description:
      "Multi-camera switching, audio cleanup, and visual polish for long-form interviews and podcast episodes.",
    packages: [
      { label: "Full Episode — audio & video sync",          usd: "$120", ron: "550 RON" },
      { label: "Pro Bundle — episode + 3 highlight reels",   usd: "$200", ron: "920 RON" },
    ],
    note: null,
    highlight: false,
  },
  {
    icon: Sparkles,
    emoji: "🚀",
    title: "Motion Design & Corporate",
    sub: "Logo Animations · Ads · Explainers",
    description:
      "Logo animations, explainer videos, high-end ads, and custom transitions tailored to your brand identity.",
    packages: [
      { label: "Custom Project",  usd: "Quote",  ron: "Based on scope" },
      { label: "Hourly Rate",     usd: "$35",    ron: "160 RON" },
    ],
    note: null,
    highlight: false,
  },
];

const FINE_PRINT = [
  { icon: "↩", label: "Revisions",      text: "Each project includes 2 rounds of free revisions. Additional tweaks are billed at hourly rate." },
  { icon: "⏱", label: "Turnaround",     text: "24–48h for Shorts. 3–5 business days for Long-form. Rush delivery (24h) available at +50%." },
  { icon: "💳", label: "Workflow",       text: "50% upfront deposit required for new clients or large-scale projects." },
  { icon: "📦", label: "Delivery",       text: "Final files delivered in 4K/1080p, optimized for your platform of choice." },
];

export function Rates() {
  return (
    <section id="rates" className="relative py-28 md:py-40" style={{ borderTop: "1px solid rgba(220,200,170,0.10)" }}>
      {/* Heading */}
      <div className="section-gutter mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          Rate card
        </span>
        <BlurText
          text="Simple, transparent pricing."
          as="h2"
          className="font-display uppercase mt-5 text-foreground"
          style={{ fontSize: "clamp(38px, 5.5vw, 88px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
          delay={0.07}
          startDelay={0.05}
        />
        <p className="mt-4 text-foreground/50 max-w-lg text-[15px] leading-relaxed">
          Every project is different — these are starting points. If you're unsure which tier fits, just send me a brief and I'll quote you directly.
        </p>
      </div>

      {/* Cards grid */}
      <div className="section-gutter grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className={`rounded-2xl p-7 md:p-8 relative overflow-hidden flex flex-col gap-6 ${
                service.highlight ? "liquid-glass-strong" : "liquid-glass"
              }`}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: i * 0.09,
              }}
            >
              {/* Glow for highlighted card */}
              {service.highlight && (
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--ochre) / 0.15) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
              )}

              {/* Featured badge */}
              {service.highlight && (
                <div
                  className="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-semibold text-background"
                  style={{ background: "hsl(var(--ochre))" }}
                >
                  Most popular
                </div>
              )}

              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <Icon className="size-5 text-foreground" />
                </div>
                <div>
                  <h3
                    className="font-display uppercase text-foreground leading-none"
                    style={{ fontSize: "clamp(22px, 2.2vw, 30px)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-foreground/45 mt-1 tracking-wide uppercase">{service.sub}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/55 leading-relaxed">{service.description}</p>

              {/* Packages */}
              <div className="flex flex-col gap-3">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.label}
                    className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <Check className="size-3.5 shrink-0" style={{ color: "hsl(var(--ochre))" }} />
                      <span className="text-sm text-foreground/75 leading-snug">{pkg.label}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-display text-lg text-foreground leading-none">{pkg.usd}</p>
                      <p className="text-[11px] text-foreground/40 mt-0.5">{pkg.ron}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              {service.note && (
                <div className="flex items-start gap-2 text-xs text-foreground/40 leading-relaxed">
                  <Info className="size-3.5 mt-0.5 shrink-0" style={{ color: "hsl(var(--ochre) / 0.6)" }} />
                  {service.note}
                </div>
              )}

              {/* Accent line */}
              <div className="mt-auto">
                <div
                  className="h-px w-12"
                  style={{ background: "linear-gradient(to right, hsl(var(--ochre)), transparent)" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fine print */}
      <motion.div
        className="section-gutter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="liquid-glass rounded-2xl p-7 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-display uppercase text-lg text-foreground/80 tracking-wide">💡 The Fine Print</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FINE_PRINT.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <p className="font-display uppercase text-sm text-foreground/60 tracking-wide">{item.label}</p>
                <p className="text-sm text-foreground/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA nudge */}
      <motion.div
        className="section-gutter mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-foreground/50 text-sm max-w-sm">
          Not sure which package fits? Send me a quick brief — I'll give you an honest quote within a few hours.
        </p>
        <a
          href="#cta"
          className="shrink-0 rounded-full px-6 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          style={{ background: "hsl(var(--ochre))" }}
        >
          Get a quote →
        </a>
      </motion.div>
    </section>
  );
}

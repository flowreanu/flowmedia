import { BlurText } from "./BlurText";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = { quote: string; name: string; role: string };

function Card({ quote, name, role }: Testimonial) {
  return (
    <div className="liquid-glass rounded-2xl p-7 w-[340px] md:w-[420px] shrink-0 flex flex-col gap-4">
      {/* Quote mark */}
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        className="shrink-0 opacity-60"
        style={{ color: "hsl(var(--ochre))" }}
      >
        <path
          d="M0 16V9.6C0 4.267 3.2 1.067 9.6 0L10.4 1.6C7.467 2.4 5.6 4 5.6 6.4H8V16H0ZM12 16V9.6C12 4.267 15.2 1.067 21.6 0L22.4 1.6C19.467 2.4 17.6 4 17.6 6.4H20V16H12Z"
          fill="currentColor"
        />
      </svg>

      <p className="italic text-[15px] text-foreground/80 leading-relaxed flex-1">
        {quote}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar */}
        <div
          className="size-9 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold text-background"
          style={{ background: "linear-gradient(135deg, hsl(var(--ochre)), hsl(var(--terra)))" }}
        >
          {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground leading-tight">{name}</p>
          <p className="text-xs text-foreground/50 uppercase tracking-wide mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [
    ...TESTIMONIALS.slice(3),
    ...TESTIMONIALS.slice(0, 3),
    ...TESTIMONIALS.slice(3),
    ...TESTIMONIALS.slice(0, 3),
  ];

  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      <div className="section-gutter mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/75">
          Client stories
        </span>
        <BlurText
          text="Don't take our word for it."
          as="h2"
          className="font-display uppercase mt-5 text-foreground max-w-[18ch]"
          style={{ fontSize: "clamp(38px, 5vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.01em" } as React.CSSProperties}
          delay={0.07}
          startDelay={0.05}
        />
      </div>

      {/* Marquee rows */}
      <div
        className="relative flex flex-col gap-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 — forward */}
        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee 38s linear infinite" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
        >
          {row1.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>

        {/* Row 2 — reverse */}
        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee-rev 44s linear infinite" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
        >
          {row2.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

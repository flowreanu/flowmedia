import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "Rates",    href: "#rates" },
  { label: "Process",  href: "#process" },
  { label: "FAQ",      href: "#faq" },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed z-50 left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-32px))]"
        initial={{ top: "1rem", opacity: 0 }}
        animate={{ top: scrolled ? "0.5rem" : "1rem", opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      >
        <div className="liquid-glass rounded-full px-2 py-2 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 pl-3 shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(var(--ochre)), hsl(195,60%,45%))" }}
            >
              <span className="text-[11px] font-bold text-background" style={{ fontFamily: "'Bebas Neue'" }}>FM</span>
            </div>
            <span className="font-display text-lg tracking-tight text-foreground">FlowMedia</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="liquid-glass-strong rounded-full px-4 py-2 text-sm font-medium text-foreground hidden sm:flex items-center gap-1 hover:bg-white/5 transition-colors"
            >
              Work with me <ArrowUpRight className="size-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ background: "rgba(11,14,20,0.97)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-4xl text-foreground hover:text-ochre transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full px-8 py-3 font-display text-2xl text-background hover:opacity-90 transition-opacity"
            style={{ background: "hsl(var(--ochre))" }}
          >
            WORK WITH ME
          </a>
        </motion.div>
      )}
    </>
  );
}

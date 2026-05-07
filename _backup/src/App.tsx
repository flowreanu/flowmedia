import { useRef } from "react";
import { Navbar }        from "@/components/Navbar";
import { Hero }          from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Work }          from "@/components/Work";
import { Pourquoi }      from "@/components/Pourquoi";
import { Process }       from "@/components/Process";
import { Stats }         from "@/components/Stats";
import { Testimonials }  from "@/components/Testimonials";
import { Faq }           from "@/components/Faq";
import { CtaFooter }     from "@/components/CtaFooter";

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <div className="bg-background text-foreground min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <main>
        <Hero scrollRef={heroRef} />
        <ServicesBento />
        <Work />
        <Pourquoi />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <CtaFooter />
      </main>
    </div>
  );
}

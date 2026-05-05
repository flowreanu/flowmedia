import { motion, useInView } from "framer-motion";
import { useRef, CSSProperties } from "react";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  startDelay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function BlurText({
  text,
  className = "",
  style,
  delay = 0.07,
  startDelay = 0,
  as: Tag = "h2",
}: Props) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words  = text.split(" ");

  return (
    <div ref={ref} className={className} style={style} role="heading" aria-level={Tag === "h1" ? 1 : 2}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[filter,transform,opacity]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 24 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number],
            delay: startDelay + i * delay,
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </div>
  );
}

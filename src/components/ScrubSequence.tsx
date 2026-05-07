import { useEffect, useRef } from "react";

export type ScrubSequenceProps = {
  framesPath: string;
  frameCount: number;
  ext?: "jpg" | "webp";
  className?: string;
  scrollTargetRef: React.RefObject<HTMLElement | null>;
};

const pad4 = (n: number) => String(n).padStart(5, "0");

export function ScrubSequence({
  framesPath,
  frameCount,
  ext = "jpg",
  className,
  scrollTargetRef,
}: ScrubSequenceProps) {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const imagesRef      = useRef<HTMLImageElement[]>([]);
  const rafRef         = useRef<number | null>(null);
  const visibleRef     = useRef(true);
  const hasFramesRef   = useRef(false);
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    const urls = Array.from(
      { length: frameCount },
      (_, i) => `${framesPath}/frame_${pad4(i + 1)}.${ext}`
    );
    const first = new Image();
    first.src = urls[0];
    first.onload = () => { hasFramesRef.current = true; };
    imgs[0] = first;
    urls.slice(1).forEach((src, i) => {
      const img = new Image();
      img.src = src;
      imgs[i + 1] = img;
    });
    imagesRef.current = imgs;
  }, [framesPath, frameCount, ext]);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = "100%";
      canvas.style.height = "100%";
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Intersection observer — pause rAF when off-screen
  useEffect(() => {
    const el = scrollTargetRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scrollTargetRef]);

  // rAF loop
  useEffect(() => {
    const tick = () => {
      if (visibleRef.current && !prefersReduced.current) {
        const idx = currentIndex();
        if (hasFramesRef.current) {
          drawFrame(idx);
        } else {
          drawFallback(idx);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentIndex = () => {
    const el = scrollTargetRef.current;
    if (!el) return 0;
    const rect  = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    return Math.min(frameCount - 1, Math.floor(progress * (frameCount - 1)));
  };

  const drawFrame = (idx: number) => {
    const img = imagesRef.current[idx];
    if (img && img.complete && img.naturalWidth > 0) drawImage(img);
  };

  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width, ch = canvas.height;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale, dh = ih * scale;
    const dx = (cw - dw) / 2, dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Animated fallback — cinematic gradient scrub simulation
  const drawFallback = (idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width, ch = canvas.height;
    const t = idx / Math.max(frameCount - 1, 1);

    ctx.clearRect(0, 0, cw, ch);

    // Deep navy base
    ctx.fillStyle = `hsl(220, 18%, 7%)`;
    ctx.fillRect(0, 0, cw, ch);

    // Animated grid lines — simulating a timeline/edit suite
    ctx.strokeStyle = `rgba(100, 220, 255, ${0.03 + t * 0.04})`;
    ctx.lineWidth = 0.5;
    const gridSpacing = 80;
    for (let x = 0; x < cw; x += gridSpacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, ch); ctx.stroke();
    }
    for (let y = 0; y < ch; y += gridSpacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cw, y); ctx.stroke();
    }

    // Central light bloom — shifts with scroll
    const bx = cw * (0.3 + t * 0.4);
    const by = ch * 0.5;
    const grad = ctx.createRadialGradient(bx, by, 0, bx, by, cw * 0.6);
    grad.addColorStop(0, `rgba(30, 180, 255, ${0.12 + t * 0.08})`);
    grad.addColorStop(0.4, `rgba(0, 90, 180, ${0.06 + t * 0.04})`);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, ch);

    // Horizontal "timeline" bands
    const bands = 5;
    for (let b = 0; b < bands; b++) {
      const by2 = ch * (0.3 + b * 0.1);
      const bh = 2 + b * 1.5;
      const alpha = (0.06 + t * 0.1) * (1 - b / bands);
      const bgrad = ctx.createLinearGradient(0, 0, cw, 0);
      bgrad.addColorStop(0, "rgba(30,200,255,0)");
      bgrad.addColorStop(t, `rgba(30,200,255,${alpha})`);
      bgrad.addColorStop(1, "rgba(30,200,255,0)");
      ctx.fillStyle = bgrad;
      ctx.fillRect(0, by2, cw, bh);
    }

    // Playhead line
    const phx = cw * t;
    const phGrad = ctx.createLinearGradient(phx - 40, 0, phx + 40, 0);
    phGrad.addColorStop(0, "rgba(30,220,255,0)");
    phGrad.addColorStop(0.5, "rgba(30,220,255,0.7)");
    phGrad.addColorStop(1, "rgba(30,220,255,0)");
    ctx.strokeStyle = phGrad;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(phx, 0); ctx.lineTo(phx, ch); ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ transform: "translateZ(0)", willChange: "contents" }}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of a label like "12,000+" or "95%" from 0 when in view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/([\d,]+)/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[1].length) : value;

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setN(target);
          return;
        }
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  /** max rotation in degrees at the edges */
  max?: number;
  /** show a moving light sheen that follows the pointer */
  glare?: boolean;
};

/**
 * Pointer-follow 3D tilt. Rotates its children on a perspective plane toward the
 * cursor and (optionally) sweeps a soft highlight across them. Falls back to a
 * flat, static card when the pointer is coarse or reduced-motion is requested.
 */
export function Tilt({ children, className, max = 10, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const enabled = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
      el.style.setProperty("--glare", "0.35");
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--glare", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn(
        "group/tilt relative [transform:perspective(1200px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] transition-transform duration-300 ease-out will-change-transform",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-[var(--glare,0)] transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.5), transparent 45%)",
          }}
        />
      )}
    </div>
  );
}

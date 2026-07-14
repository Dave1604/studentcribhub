import { stats } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";

export function StatsBar() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center md:text-left">
            <p className="font-display text-4xl text-foreground sm:text-5xl">
              <CountUp value={s.value} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

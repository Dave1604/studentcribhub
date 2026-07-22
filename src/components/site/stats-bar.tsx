import { Users, KeyRound, Wrench, Heart, type LucideIcon } from "lucide-react";
import { stats } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";

const icons: LucideIcon[] = [Users, KeyRound, Wrench, Heart];

export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-none px-4 py-12 sm:px-6 md:grid-cols-4 md:gap-8">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.label} delay={i * 90}>
              <div className="group flex flex-col items-center gap-2 text-center md:items-start md:text-left">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <p className="font-display text-4xl leading-none text-foreground sm:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

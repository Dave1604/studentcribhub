import { Scissors, Zap, Hammer, Wrench, ArrowUpRight, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";

const icons: Record<string, LucideIcon> = {
  scissors: Scissors,
  zap: Zap,
  hammer: Hammer,
  wrench: Wrench,
};

export function CampusServices() {
  return (
    <section id="services" className="scroll-mt-16 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Campus services
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Just a tap away
          </h2>
          <p className="mt-3 text-muted-foreground">
            Need a haircut before class or a leak fixed? Book trusted, vetted
            providers right from your dashboard.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.name} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-foreground">{s.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

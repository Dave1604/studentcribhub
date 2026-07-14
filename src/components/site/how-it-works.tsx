import { Search, Calendar, ShieldCheck, type LucideIcon } from "lucide-react";
import { steps } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";

const icons: Record<string, LucideIcon> = {
  search: Search,
  calendar: Calendar,
  shield: ShieldCheck,
};

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            From searching to moving in
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps — no agents, no endless WhatsApp back-and-forth.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.n} delay={i * 120}>
                <li className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl leading-none text-primary/5 transition-colors group-hover:text-primary/10">
                    {step.n}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

import { Search, Calendar, ShieldCheck, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { steps } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { Tilt } from "@/components/motion/tilt";
import { Button } from "@/components/ui/button";

const icons: Record<string, LucideIcon> = {
  search: Search,
  calendar: Calendar,
  shield: ShieldCheck,
};

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* sticky editorial intro */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            From searching to
            <br />
            <span className="italic text-primary">moving in</span>
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Three simple steps — no agents, no endless WhatsApp back-and-forth.
            Just verified homes and a booking you can trust.
          </p>
          <Button
            variant="outline"
            className="mt-7 h-11 gap-2 px-5"
            nativeButton={false}
            render={<Link href="/search" />}
          >
            Start your search <ArrowRight className="size-4" />
          </Button>
        </Reveal>

        {/* connected timeline */}
        <ol className="relative">
          <span
            aria-hidden
            className="absolute bottom-6 left-[1.65rem] top-6 w-px bg-gradient-to-b from-primary/40 via-border to-transparent"
          />
          {steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.n} delay={i * 120} className="relative">
                <li className="flex gap-5 pb-6 last:pb-0">
                  <span className="relative z-10 grid size-[3.3rem] shrink-0 place-items-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                    <Icon className="size-5" />
                    <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow">
                      {step.n}
                    </span>
                  </span>
                  <Tilt
                    max={5}
                    glare={false}
                    className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </Tilt>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

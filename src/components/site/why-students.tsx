import { Check, Quote } from "lucide-react";
import { features } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";

export function WhyStudents() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why students choose us
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Built to make student life <span className="italic text-primary">simpler</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Finding affordable, trustworthy housing on campus is stressful. We
            connect you with verified landlords and reliable local providers — so
            you can focus on what actually matters.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* review card cluster */}
        <Reveal delay={140} className="relative">
          <figure className="relative rounded-[1.75rem] border border-border bg-card p-8 shadow-xl">
            <Quote className="size-8 text-primary/20" />
            <blockquote className="mt-3 font-display text-2xl leading-snug text-foreground">
              Found a verified hostel 5 minutes from campus in a day. Paid
              securely, no wahala. Wish I had this in my first year.
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                AO
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-foreground">Amara O.</span>
                <span className="text-muted-foreground">300L · University of Lagos</span>
              </span>
            </figcaption>
          </figure>
          <div
            aria-hidden
            className="animate-float-slow absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[1.75rem] border border-border bg-accent/50"
          />
        </Reveal>
      </div>
    </section>
  );
}

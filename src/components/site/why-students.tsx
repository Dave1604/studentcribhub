import { ShieldCheck, Star, Lock, Zap, Quote, type LucideIcon } from "lucide-react";
import { features, sampleReviews } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { Tilt } from "@/components/motion/tilt";

const featureIcons: LucideIcon[] = [ShieldCheck, Star, Lock, Zap];
const [lead, ...rest] = sampleReviews;

export function WhyStudents() {
  return (
    <section className="grain relative overflow-hidden border-b border-border bg-secondary/30">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-0 size-[30rem] rounded-full bg-primary/5 blur-[100px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why students choose us
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Built to make student life <span className="italic text-primary">simpler</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Finding affordable, trustworthy housing on campus is stressful. We
            connect you with verified landlords and reliable local providers — so
            you can focus on what actually matters.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <li
                  key={f}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium leading-tight text-foreground">{f}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* layered testimonial cluster */}
        <Reveal delay={140} className="relative">
          <Tilt max={8} glare={false} className="relative z-10">
            <figure className="relative rounded-[1.75rem] border border-border bg-card p-8 shadow-xl">
              <Quote className="size-9 text-primary/20" />
              <blockquote className="mt-3 font-display text-2xl leading-snug text-foreground sm:text-[1.7rem]">
                Found a verified hostel 5 minutes from campus in a day. Paid
                securely, no wahala. Wish I had this in my first year.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                  {lead.initials}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-foreground">{lead.name}</span>
                  <span className="text-muted-foreground">{lead.meta}</span>
                </span>
                <span className="ml-auto flex items-center gap-0.5 text-brand-amber">
                  {Array.from({ length: lead.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
              </figcaption>
            </figure>
          </Tilt>

          {/* secondary review peeking behind */}
          <div className="relative z-0 mx-4 -mt-4 rounded-b-[1.5rem] border border-t-0 border-border bg-card/70 px-6 pb-5 pt-8 shadow-sm backdrop-blur">
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{rest[0].body}&rdquo;
            </p>
            <p className="mt-2 text-xs font-medium text-foreground">
              {rest[0].name} · {rest[0].meta}
            </p>
          </div>

          {/* floating aggregate rating badge */}
          <div className="animate-float absolute -right-3 -top-5 z-20 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <p className="font-display text-2xl leading-none text-foreground">4.8</p>
            <div className="mt-1 flex items-center gap-0.5 text-brand-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-[0.7rem] text-muted-foreground">2,000+ reviews</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

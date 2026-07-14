import Image from "next/image";
import { Search, MapPin, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/motion/parallax";
import { Marquee } from "@/components/motion/marquee";
import { campuses } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-brand-amber/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="animate-rise inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <ShieldCheck className="size-3.5 text-primary" />
            Every home verified before it&apos;s listed
          </span>

          <h1
            className="animate-rise mt-6 font-display text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Find your next
            <br />
            <span className="italic text-primary">student home</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Browse verified hostels and apartments near your campus — and book
            trusted local services, all in one place.
          </p>

          <form
            action="/search"
            className="animate-rise mt-8 rounded-2xl border border-border bg-background/95 p-2 shadow-xl shadow-primary/5 backdrop-blur sm:flex sm:items-center sm:gap-1"
            style={{ animationDelay: "240ms" }}
          >
            <label className="flex flex-[1.4] items-center gap-2 rounded-xl px-3 py-2.5">
              <MapPin className="size-5 shrink-0 text-muted-foreground" />
              <select
                name="campus"
                aria-label="University or area"
                defaultValue=""
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value="">University or area…</option>
                {campuses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
              <span className="text-sm text-muted-foreground">Budget</span>
              <select
                name="max"
                aria-label="Monthly budget"
                defaultValue=""
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value="">Any price</option>
                <option value="60000">Under ₦60k</option>
                <option value="100000">Under ₦100k</option>
                <option value="150000">Under ₦150k</option>
              </select>
            </label>
            <Button
              type="submit"
              className="mt-2 h-11 w-full gap-2 px-6 text-[0.95rem] transition-transform hover:scale-[1.02] sm:mt-0 sm:w-auto"
            >
              <Search className="size-4" />
              Search
            </Button>
          </form>

          <div
            className="animate-rise mt-5 flex items-center gap-6 text-sm text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-brand-amber text-brand-amber" />
              4.8 average rating
            </span>
            <span className="hidden sm:block">·</span>
            <span className="hidden sm:block">12,000+ students housed</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Parallax speed={0.1} className="absolute inset-0 scale-110">
              <Image
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&q=80&auto=format&fit=crop"
                alt="A bright, furnished student room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-background/90 p-4 shadow-lg backdrop-blur">
                <div>
                  <p className="text-sm font-semibold text-foreground">Sunrise Court</p>
                  <p className="text-xs text-muted-foreground">0.4 km from UNILAG · Verified</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  ₦85k/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust ribbon */}
      <div className="border-t border-border/70 bg-background/60 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Marquee
            items={[
              "University of Lagos",
              "Covenant University",
              "University of Ibadan",
              "Yaba College of Technology",
              "Obafemi Awolowo University",
              "University of Benin",
              "Lagos State University",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

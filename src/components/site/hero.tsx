import Image from "next/image";
import { Search, MapPin, ShieldCheck, Star, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/motion/marquee";
import { Tilt } from "@/components/motion/tilt";
import { campuses } from "@/lib/data";

const proof = [
  { initials: "AO", tint: "bg-primary/15 text-primary" },
  { initials: "TB", tint: "bg-brand-amber/20 text-[oklch(0.5_0.12_78)]" },
  { initials: "ZK", tint: "bg-primary/10 text-primary" },
  { initials: "JU", tint: "bg-accent text-accent-foreground" },
];

export function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
      {/* animated aurora mesh — living atmosphere instead of two static blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="animate-aurora absolute -right-40 -top-48 size-[42rem] rounded-full bg-primary/20 blur-[110px]" />
        <div className="animate-aurora-slow absolute -left-40 top-24 size-[34rem] rounded-full bg-brand-amber/20 blur-[100px]" />
        <div className="animate-aurora absolute bottom-0 left-1/3 size-[28rem] rounded-full bg-primary/10 blur-[90px] [animation-delay:-8s]" />
      </div>
      <div aria-hidden className="bg-grid mask-fade-edges pointer-events-none absolute inset-0 -z-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div>
          <span className="animate-rise inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <ShieldCheck className="size-3.5 text-primary" />
            Every home verified before it&apos;s listed
          </span>

          <h1
            className="animate-rise mt-6 font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[5.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Find your next
            <br />
            <span className="relative italic text-primary">
              student home
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 w-[min(100%,20rem)] text-primary/35"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 150 3 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="animate-rise mt-7 max-w-md text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Browse verified hostels and apartments near your campus — and book
            trusted local services, all in one place.
          </p>

          <form
            action="/search"
            className="animate-rise mt-8 max-w-xl rounded-2xl border border-border bg-background/95 p-2 shadow-xl shadow-primary/5 backdrop-blur sm:flex sm:items-center sm:gap-1"
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

          {/* proof stack — fills the old dead space with real social proof */}
          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {proof.map((p) => (
                  <span
                    key={p.initials}
                    className={`grid size-9 place-items-center rounded-full border-2 border-background text-xs font-semibold shadow-sm ${p.tint}`}
                  >
                    {p.initials}
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-foreground">12,000+ students</p>
                <p className="text-muted-foreground">already found their home</p>
              </div>
            </div>
            <div className="hidden h-9 w-px bg-border sm:block" />
            <div className="flex items-center gap-1.5 text-sm">
              <Star className="size-4 fill-brand-amber text-brand-amber" />
              <span className="font-semibold text-foreground">4.8</span>
              <span className="text-muted-foreground">average rating</span>
            </div>
          </div>
        </div>

        {/* Hero visual — layered 3D card cluster */}
        <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
          <Tilt max={9} className="mx-auto max-w-md lg:mr-0 lg:ml-auto">
            {/* main property card */}
            <div className="preserve-3d relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 shadow-2xl shadow-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&q=80&auto=format&fit=crop"
                alt="A bright, furnished student room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="scale-105 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
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

            {/* floating card — verified badge, popped forward */}
            <div className="animate-float absolute -left-6 top-10 z-10 [transform:translateZ(70px)] sm:-left-10">
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur">
                <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" />
                </span>
                <div className="text-xs leading-tight">
                  <p className="font-semibold text-foreground">Verified in 24h</p>
                  <p className="text-muted-foreground">Inspected on-site</p>
                </div>
              </div>
            </div>

            {/* floating card — live demand stat */}
            <div className="animate-float-slow absolute -right-5 top-1/2 z-10 [transform:translateZ(90px)] sm:-right-9">
              <div className="rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex items-center gap-1.5 text-primary">
                  <TrendingUp className="size-4" />
                  <span className="font-display text-2xl leading-none text-foreground">2,500+</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">rooms secured</p>
              </div>
            </div>

            {/* floating card — review bubble */}
            <div className="animate-float absolute -bottom-6 left-6 z-10 [transform:translateZ(55px)] [animation-delay:-3s]">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 px-3.5 py-2 shadow-xl backdrop-blur">
                <Sparkles className="size-4 text-brand-amber" />
                <p className="text-xs font-medium text-foreground">
                  &ldquo;Booked in a day, no wahala.&rdquo;
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Trust ribbon */}
      <div className="relative border-t border-border/70 bg-background/60 py-4 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

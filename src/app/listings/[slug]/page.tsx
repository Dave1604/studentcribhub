import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Star,
  MapPin,
  BedDouble,
  Bath,
  ShieldCheck,
  CalendarCheck,
  Lock,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { getListing, listings, naira, sampleReviews } from "@/lib/data";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return { title: "Listing not found — StudentCribHub" };
  return {
    title: `${listing.title} — ${listing.campus} | StudentCribHub`,
    description: listing.description,
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link
            href="/search"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back to results
          </Link>

          {/* Title row */}
          <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {listing.type}
                </span>
                {listing.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <ShieldCheck className="size-3.5" />
                    Verified
                  </span>
                )}
              </div>
              <h1 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {listing.title}
              </h1>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                {listing.address} · {listing.distanceKm} km from {listing.campus}
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2">
              <Star className="size-4 fill-brand-amber text-brand-amber" />
              <span className="font-semibold">{listing.rating}</span>
              <span className="text-sm text-muted-foreground">({listing.reviews})</span>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-5 grid gap-2 sm:grid-cols-4 sm:grid-rows-2 sm:[&>*:first-child]:col-span-2 sm:[&>*:first-child]:row-span-2">
            {listing.images.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 ? "aspect-[4/3] sm:aspect-auto" : "hidden aspect-square sm:block"
                }`}
              >
                <Image
                  src={src}
                  alt={`${listing.title} photo ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="min-w-0">
              {/* quick facts */}
              <div className="flex flex-wrap gap-6 border-b border-border pb-6 text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <BedDouble className="size-5 text-muted-foreground" />
                  {listing.beds} bed{listing.beds > 1 ? "s" : ""}
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Bath className="size-5 text-muted-foreground" />
                  {listing.baths} bath{listing.baths > 1 ? "s" : ""}
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <CalendarCheck className="size-5 text-muted-foreground" />
                  {listing.available}
                </span>
              </div>

              <Reveal>
                <section className="border-b border-border py-6">
                  <h2 className="font-display text-2xl text-foreground">About this place</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{listing.description}</p>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-b border-border py-6">
                  <h2 className="font-display text-2xl text-foreground">What this place offers</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {listing.amenities.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2.5 rounded-lg border border-transparent px-3 py-2 text-sm transition-colors hover:border-border hover:bg-secondary/40"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" />
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              {/* Landlord */}
              <Reveal>
                <section className="border-b border-border py-6">
                  <h2 className="font-display text-2xl text-foreground">Your landlord</h2>
                  <div className="mt-4 flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                      {listing.landlord.initials}
                    </span>
                    <div>
                      <p className="flex items-center gap-1.5 font-semibold text-foreground">
                        {listing.landlord.name}
                        {listing.landlord.verified && (
                          <ShieldCheck className="size-4 text-primary" />
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Typically responds {listing.landlord.responseTime}
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              {/* Reviews */}
              <Reveal>
                <section className="py-6">
                  <h2 className="flex items-center gap-2 font-display text-2xl text-foreground">
                    <Star className="size-5 fill-brand-amber text-brand-amber" />
                    {listing.rating} · {listing.reviews} reviews
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {sampleReviews.map((r) => (
                      <figure
                        key={r.name}
                        className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid size-9 place-items-center rounded-full bg-secondary text-sm font-semibold">
                            {r.initials}
                          </span>
                          <figcaption className="text-sm">
                            <span className="block font-semibold text-foreground">{r.name}</span>
                            <span className="text-muted-foreground">{r.meta}</span>
                          </figcaption>
                        </div>
                        <div className="mt-3 flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`size-3.5 ${
                                i < r.rating
                                  ? "fill-brand-amber text-brand-amber"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            </div>

            {/* Sticky booking card */}
            <aside className="lg:relative">
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
                <div aria-hidden className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-brand-amber" />
                <div className="p-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl text-foreground">
                      {naira.format(listing.pricePerMonth)}
                    </span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="size-4 fill-brand-amber text-brand-amber" />
                    {listing.rating} · {listing.reviews} reviews
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <label className="flex flex-col gap-1 rounded-lg border border-border px-3 py-2 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30">
                      <span className="text-xs font-medium text-muted-foreground">Move in</span>
                      <input
                        type="date"
                        className="bg-transparent text-sm outline-none"
                        aria-label="Move-in date"
                      />
                    </label>
                    <label className="flex flex-col gap-1 rounded-lg border border-border px-3 py-2 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30">
                      <span className="text-xs font-medium text-muted-foreground">Duration</span>
                      <select className="bg-transparent text-sm outline-none" aria-label="Duration">
                        <option>Full year</option>
                        <option>One semester</option>
                        <option>Monthly</option>
                      </select>
                    </label>
                  </div>

                  <Button className="mt-4 h-11 w-full text-[0.95rem] transition-transform hover:scale-[1.02]">
                    Request to book
                  </Button>
                  <Button variant="outline" className="mt-2 h-11 w-full text-[0.95rem]">
                    Message landlord
                  </Button>

                  <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="size-3.5" />
                    Secure payment · You won&apos;t be charged yet
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

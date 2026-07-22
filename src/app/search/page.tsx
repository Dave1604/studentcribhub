import Link from "next/link";
import { SlidersHorizontal, SearchX, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ListingCard } from "@/components/site/listing-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Tilt } from "@/components/motion/tilt";
import { listings, roomTypes, campuses } from "@/lib/data";

type SearchParams = {
  campus?: string;
  type?: string;
  max?: string;
  sort?: string;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { campus = "", type = "", max = "", sort = "recommended" } = await searchParams;
  const maxPrice = max ? Number(max) : 0;

  let results = listings.filter((l) => {
    if (campus && l.campus !== campus) return false;
    if (type && l.type !== type) return false;
    if (maxPrice && l.pricePerMonth > maxPrice) return false;
    return true;
  });

  results = [...results].sort((a, b) => {
    if (sort === "price-asc") return a.pricePerMonth - b.pricePerMonth;
    if (sort === "price-desc") return b.pricePerMonth - a.pricePerMonth;
    if (sort === "rating") return b.rating - a.rating;
    return Number(b.verified) - Number(a.verified) || b.rating - a.rating;
  });

  const verifiedCount = results.filter((l) => l.verified).length;

  const selectCls =
    "h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-secondary/30">
        {/* Textured results header */}
        <div className="grain relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-secondary/30">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
            <div className="animate-aurora absolute -right-32 -top-40 size-[32rem] rounded-full bg-primary/15 blur-[100px]" />
            <div className="animate-aurora-slow absolute -left-24 top-10 size-72 rounded-full bg-brand-amber/15 blur-[90px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Student housing
            </p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {campus || "Homes near you"}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium text-foreground">
                  {results.length} {results.length === 1 ? "home" : "homes"}
                </span>
                {verifiedCount > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-muted-foreground backdrop-blur">
                    <ShieldCheck className="size-3.5 text-primary" />
                    {verifiedCount} verified
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur">
          <form
            action="/search"
            className="mx-auto flex max-w-7xl flex-wrap items-end gap-3 px-4 py-4 sm:px-6"
          >
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Campus / area</label>
              <select name="campus" defaultValue={campus} className={selectCls}>
                <option value="">All campuses</option>
                {campuses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Room type</label>
              <select name="type" defaultValue={type} className={selectCls}>
                <option value="">Any type</option>
                {roomTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Max budget</label>
              <select name="max" defaultValue={max} className={selectCls}>
                <option value="">Any price</option>
                <option value="60000">Under ₦60k</option>
                <option value="100000">Under ₦100k</option>
                <option value="150000">Under ₦150k</option>
                <option value="200000">Under ₦200k</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Sort by</label>
              <select name="sort" defaultValue={sort} className={selectCls}>
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>

            <Button type="submit" className="h-10 gap-2 px-5">
              <SlidersHorizontal className="size-4" />
              Apply
            </Button>
          </form>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((l, i) => (
                <Reveal key={l.id} delay={(i % 3) * 90}>
                  <Tilt max={6} glare={false} className="h-full">
                    <ListingCard listing={l} />
                  </Tilt>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center rounded-2xl border border-dashed border-border bg-background py-16 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground">
                <SearchX className="size-6" />
              </span>
              <h2 className="mt-4 font-display text-xl text-foreground">No homes match those filters</h2>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Try widening your budget or clearing a filter to see more places near you.
              </p>
              <Button variant="outline" className="mt-5" nativeButton={false} render={<Link href="/search" />}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

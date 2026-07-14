import Link from "next/link";
import { SlidersHorizontal, SearchX } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ListingCard } from "@/components/site/listing-card";
import { Button } from "@/components/ui/button";
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

  const selectCls =
    "h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-secondary/30">
        {/* Filter bar */}
        <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur">
          <form
            action="/search"
            className="mx-auto flex max-w-6xl flex-wrap items-end gap-3 px-4 py-4 sm:px-6"
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

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              {campus || "All campuses"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "home" : "homes"} found
            </p>
          </div>

          {results.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          ) : (
            <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-background py-16 text-center">
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

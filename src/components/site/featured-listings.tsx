import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/data";
import { ListingCard } from "./listing-card";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedListings() {
  const featured = listings.slice(0, 3);
  return (
    <section id="listings" className="scroll-mt-16 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Featured
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Top-rated hostels &amp; apartments
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hand-checked homes students actually rate.
            </p>
          </div>
          <Button
            variant="ghost"
            className="hidden gap-1 sm:inline-flex"
            nativeButton={false}
            render={<Link href="/search" />}
          >
            View all <ArrowRight className="size-4" />
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((l, i) => (
            <Reveal key={l.id} delay={i * 110}>
              <ListingCard listing={l} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

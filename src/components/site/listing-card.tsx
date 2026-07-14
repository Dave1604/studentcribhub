import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, BedDouble, Bath, ShieldCheck } from "lucide-react";
import { naira, type Listing } from "@/lib/data";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {listing.verified ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              <ShieldCheck className="size-3.5" />
              Verified
            </span>
          ) : (
            <span />
          )}
          <span className="rounded-full bg-foreground/85 px-2.5 py-1 text-xs font-medium text-background backdrop-blur">
            {listing.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-tight text-foreground transition-colors group-hover:text-primary">
            {listing.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold">
            <Star className="size-4 fill-brand-amber text-brand-amber" />
            {listing.rating}
          </span>
        </div>

        <p className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" />
          <span className="truncate">
            {listing.campus} · {listing.distanceKm} km
          </span>
        </p>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BedDouble className="size-4" /> {listing.beds} bed{listing.beds > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="size-4" /> {listing.baths} bath{listing.baths > 1 ? "s" : ""}
          </span>
        </div>

        <div className="mt-auto flex items-baseline justify-between border-t border-border pt-3">
          <p className="text-lg font-bold text-foreground">
            {naira.format(listing.pricePerMonth)}
            <span className="text-sm font-normal text-muted-foreground">/mo</span>
          </p>
          <p className="text-xs text-muted-foreground">{listing.reviews} reviews</p>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground sm:px-14 md:py-20">
            <div
              aria-hidden
              className="animate-float-slow pointer-events-none absolute -right-16 -top-16 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="animate-float pointer-events-none absolute -bottom-20 -left-10 size-72 rounded-full bg-white/5 blur-3xl"
            />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  See how StudentCribHub can work for you
                </h2>
                <p className="mt-4 max-w-md text-primary-foreground/80">
                  Whether you&apos;re looking for a home or listing one, get started
                  in minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button
                  variant="secondary"
                  className="h-11 gap-2 px-6 text-[0.95rem] transition-transform hover:scale-[1.03]"
                  nativeButton={false}
                  render={<Link href="/search" />}
                >
                  Find a room <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-11 border-white/30 bg-transparent px-6 text-[0.95rem] text-primary-foreground transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  nativeButton={false}
                  render={<Link href="#" />}
                >
                  List your property
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

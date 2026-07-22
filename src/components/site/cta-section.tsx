import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const avatars = ["AO", "TB", "ZK", "JU"];

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground shadow-2xl shadow-primary/20 sm:px-14 md:py-24">
            {/* atmosphere */}
            <div
              aria-hidden
              className="animate-aurora pointer-events-none absolute -right-16 -top-16 size-96 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden
              className="animate-aurora-slow pointer-events-none absolute -bottom-24 -left-10 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <ShieldCheck className="size-3.5" />
                Verified homes · secure payments
              </span>

              <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                Your next home is
                <br />
                <span className="italic">a search away</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-primary-foreground/85">
                Whether you&apos;re looking for a room or listing one, get started in
                minutes — no agents, no stress.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  variant="secondary"
                  className="h-12 gap-2 px-7 text-[0.95rem] shadow-lg transition-transform hover:scale-[1.03]"
                  nativeButton={false}
                  render={<Link href="/search" />}
                >
                  Find a room <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-white/30 bg-transparent px-7 text-[0.95rem] text-primary-foreground transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  nativeButton={false}
                  render={<Link href="#" />}
                >
                  List your property
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-primary-foreground/80">
                <div className="flex -space-x-2.5">
                  {avatars.map((a) => (
                    <span
                      key={a}
                      className="grid size-8 place-items-center rounded-full border-2 border-primary bg-white/20 text-xs font-semibold backdrop-blur"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <span>Joined by 12,000+ students</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

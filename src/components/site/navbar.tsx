import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            S
          </span>
          <span className="text-lg">
            Student<span className="text-primary">Crib</span>Hub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/search" className="transition-colors hover:text-foreground">
            Find a room
          </Link>
          <Link href="/#services" className="transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/#how" className="transition-colors hover:text-foreground">
            How it works
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<Link href="#" />}
          >
            Log in
          </Button>
          <Button size="sm" nativeButton={false} render={<Link href="#" />}>
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}

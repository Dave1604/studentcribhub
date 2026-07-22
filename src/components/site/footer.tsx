import Link from "next/link";

const groups = [
  {
    title: "Students",
    links: ["Find a room", "How it works", "Campus services", "Safety & trust"],
  },
  {
    title: "Partners",
    links: ["List your property", "Become a provider", "Pricing", "Partner login"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Help center", "Blog"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                S
              </span>
              <span className="text-lg">
                Student<span className="text-primary">Crib</span>Hub
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Verified student housing and trusted campus services, all in one place.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {g.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="transition-colors hover:text-foreground">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} StudentCribHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

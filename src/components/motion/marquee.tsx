import { Fragment } from "react";

/** Pure-CSS infinite marquee. Duplicates items so the -50% translate loops seamlessly. */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                aria-hidden={dup === 1}
                className="text-sm font-medium tracking-wide text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

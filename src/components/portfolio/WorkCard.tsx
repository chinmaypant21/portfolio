import type { Work } from "@/content/portfolio";
import { InProgress } from "@/components/portfolio/InProgress";
import { linkTarget, renderInline } from "@/lib/inline";
import { cn } from "@/lib/utils";

/**
 * Collapsible work card built on native <details>/<summary>, so it is
 * keyboard- and screen-reader-accessible without extra scripting.
 * Summary content must be phrasing or heading elements, hence the spans.
 */
export function WorkCard({
  work,
  className,
}: {
  work: Work;
  className?: string | undefined;
}) {
  const hasDetails = Boolean(work.highlights?.length || work.links?.length);

  return (
    <details
      className={cn(
        "panel group min-w-0 open:border-border-strong open:hover:bg-surface",
        className,
      )}
    >
      <summary className="group/summary block cursor-pointer list-none rounded-lg p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset md:p-8 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          <span className="label-mono text-accent">{work.kind}</span>
          {work.ongoing ? (
            <InProgress />
          ) : (
            <span className="label-mono">{work.year}</span>
          )}
        </span>

        <h3 className="display mt-5 text-xl font-medium leading-snug md:text-2xl">
          {work.title}
        </h3>
        {work.project ? (
          <span className="mt-2 block font-mono text-xs text-muted-foreground">
            {work.project}
          </span>
        ) : null}

        <span className="mt-4 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {renderInline(work.summary)}
        </span>

        <span className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </span>

        {hasDetails ? (
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs transition-colors group-hover/summary:text-accent">
            <span className="group-open:hidden">Show details</span>
            <span className="hidden group-open:inline">Hide details</span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </span>
        ) : null}
      </summary>

      {hasDetails ? (
        <div className="mx-6 border-t border-border pb-8 pt-6 md:mx-8">
          {work.highlights?.length ? (
            <ul className="max-w-2xl space-y-2">
              {work.highlights.map((point) => (
                <li
                  key={point}
                  className="bullet text-sm leading-relaxed text-muted-foreground"
                >
                  {renderInline(point)}
                </li>
              ))}
            </ul>
          ) : null}

          {work.links?.length ? (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
              {work.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...linkTarget(link.href)}
                  className="link-underline"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </details>
  );
}

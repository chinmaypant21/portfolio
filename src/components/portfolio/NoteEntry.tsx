import { useEffect, useRef } from "react";

import type { Note, NoteBlock } from "@/content/portfolio";
import { InProgress } from "@/components/portfolio/InProgress";
import { linkTarget, renderInline } from "@/lib/inline";
import { cn } from "@/lib/utils";

const WORDS_PER_MINUTE = 220;

function blockText(block: NoteBlock): string[] {
  switch (block.type) {
    case "p":
      return [block.text];
    case "list":
      return block.items;
    case "code":
      return [block.code];
    case "stats":
      return block.items.flatMap((item) => [item.value, item.label]);
  }
}

function readingMinutes(note: Note) {
  const words = [
    note.excerpt,
    ...note.sections.flatMap((s) => s.blocks.flatMap(blockText)),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function noteAnchor(id: string) {
  return `note-${id}`;
}

export function NoteEntry({ note }: { note: Note }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const anchor = noteAnchor(note.id);

  // Open the note when a link targets it, e.g. "Write-up →" on a work card.
  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === `#${anchor}` && ref.current)
        ref.current.open = true;
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, [anchor]);

  const close = () => {
    if (!ref.current) return;
    ref.current.open = false;
    ref.current.scrollIntoView({ block: "start" });
  };

  return (
    <details
      ref={ref}
      id={anchor}
      name="notes"
      className="panel group min-w-0 scroll-mt-24 open:border-border-strong open:hover:bg-surface"
    >
      <summary className="group/summary block cursor-pointer list-none rounded-lg p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset md:p-8 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-wrap items-center justify-between gap-3">
          <span className="label-mono text-accent">{note.project}</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {note.ongoing ? <InProgress /> : null}
            <span className="label-mono">
              {note.date} · {readingMinutes(note)} min read
            </span>
          </span>
        </span>

        <h3 className="display mt-4 text-lg font-medium leading-snug md:text-xl">
          {note.title}
        </h3>
        <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {note.excerpt}
        </span>

        <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs transition-colors group-hover/summary:text-accent">
          <span className="group-open:hidden">Read note</span>
          <span className="hidden group-open:inline">Close note</span>
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>

      <div className="mx-6 border-t border-border pb-8 pt-8 md:mx-8">
        <div className="space-y-10">
          {note.sections.map((section, i) => (
            <section key={section.heading}>
              <h4 className="label-mono flex gap-3">
                <span className="text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h4>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="rule-top mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-6 font-mono text-xs">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {note.links?.map((link) => (
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
          <button
            type="button"
            onClick={close}
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            Close note ↑
          </button>
        </div>
      </div>
    </details>
  );
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {renderInline(block.text)}
        </p>
      );

    case "list":
      return (
        <ul className="max-w-2xl space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="bullet text-sm leading-relaxed text-muted-foreground"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );

    case "code": {
      const highlight = block.highlight ?? [];
      return (
        <figure className="min-w-0">
          <pre className="overflow-x-auto rounded-md border border-border bg-background py-4 font-mono text-xs leading-relaxed text-muted-foreground">
            {/* min-w-full lets highlighted rows stretch across the scroll width */}
            <code className="inline-block min-w-full">
              {block.code.split("\n").map((line, i) => (
                <span
                  key={i}
                  className={cn(
                    "block px-4",
                    highlight.includes(i + 1) && "bg-accent/10 text-accent",
                  )}
                >
                  {line || " "}
                </span>
              ))}
            </code>
          </pre>
          {block.caption ? (
            <figcaption className="mt-2 font-mono text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    case "stats":
      return (
        <dl className="grid gap-5 sm:grid-cols-3">
          {block.items.map((item) => (
            // dt before dd for valid markup; flex-col-reverse puts the value on top
            <div
              key={item.label}
              className="flex flex-col-reverse gap-2 border-l border-border-strong pl-4"
            >
              <dt className="text-xs leading-snug text-muted-foreground">
                {item.label}
              </dt>
              <dd className="display text-2xl font-medium text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

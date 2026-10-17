import type { ReactNode } from "react";

/** Opens off-site links in a new tab; keeps on-page anchors in place. */
export function linkTarget(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noreferrer" }
    : {};
}

// Supported syntax in content strings: [label](href), `code`, **bold**
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(INLINE)) {
    const [whole, label, href, code, bold] = match;
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));

    if (label !== undefined && href !== undefined) {
      nodes.push(
        <a
          key={start}
          href={href}
          {...linkTarget(href)}
          className="link-underline text-foreground"
        >
          {label}
        </a>,
      );
    } else if (code !== undefined) {
      nodes.push(
        <code
          key={start}
          className="rounded-sm bg-muted px-1 py-px font-mono text-[0.85em] text-foreground"
        >
          {code}
        </code>,
      );
    } else if (bold !== undefined) {
      nodes.push(
        <strong key={start} className="font-medium text-foreground">
          {bold}
        </strong>,
      );
    }

    last = start + whole.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

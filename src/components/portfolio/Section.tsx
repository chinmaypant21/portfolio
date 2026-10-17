import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rule-top scroll-mt-20 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <header className="md:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="label-mono">{index}</span>
            <h2 className="display text-2xl font-medium md:text-3xl">{title}</h2>
          </div>
          {lead ? (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{lead}</p>
          ) : null}
        </header>
        {/* min-w-0 stops wide content (e.g. code blocks) from stretching the column */}
        <div className="min-w-0 md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

import type { Work } from "@/content/portfolio";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="panel group p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="label-mono text-accent">{work.kind}</span>
        <span className="label-mono">{work.year}</span>
      </div>

      <h3 className="display mt-5 text-xl font-medium leading-snug md:text-2xl">{work.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{work.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      {work.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {work.links.map((link) => (
            <a key={link.label} href={link.href} className="link-underline">
              {link.label} →
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

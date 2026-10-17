import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { WorkCard } from "@/components/portfolio/WorkCard";
import { Footer } from "@/components/portfolio/Footer";
import {
  community,
  credentials,
  engineering,
  notes,
  profile,
  research,
  securityWork,
} from "@/content/portfolio";

const title = `${profile.name}`;
const description =
  "Software engineer and cybersecurity master's student at KTH. Security projects, published research, lab work, and technical write-ups.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Research", href: "#research" },
  { label: "Notes", href: "#notes" },
  { label: "Certifications", href: "#credentials" },
  { label: "Community", href: "#community" },
];

function renderInlineLinks(text: string) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/g);
  return parts.map((part, i) => {
    if (i % 3 === 2) return null;
    if (i % 3 === 1) {
      return (
        <a
          key={i}
          href={parts[i + 1]}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-foreground"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="font-mono text-xs tracking-widest uppercase">
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-7 font-mono text-xs md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="link-underline font-mono text-xs">
            Contact
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6 md:px-10">
        <Hero />

        <Section
          id="work"
          index="01"
          title="Selected security work"
          lead="Security research, engineering work, tooling, and lab exercises — grouped by the kind of problem rather than the employer."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {securityWork.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </Section>

        <Section
          id="engineering"
          index="02"
          title="Engineering"
          lead="Software work I've done so far, and how it shapes the way I approach security."
        >
          <ul className="divide-y divide-border">
            {engineering.map((role) => (
              <li key={role.company} className="py-6 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium">
                    {role.title}
                    <span className="text-muted-foreground"> · {role.company}</span>
                  </h3>
                  <span className="label-mono">{role.period}</span>
                </div>
                {role.summary ? (
                  <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {role.summary}
                  </p>
                ) : null}
                <ul className="mt-3 max-w-2xl space-y-2">
                  {role.highlights.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  {role.stack.join(" / ")}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="research"
          index="03"
          title="Research"
          lead="Publications, preprints, and longer technical investigations."
        >
          <ul className="divide-y divide-border">
            {research.map((paper) => (
              <li key={paper.title} className="py-6 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="label-mono text-accent">{paper.venue}</span>
                  <span className="label-mono">{paper.year}</span>
                </div>
                <h3 className="display mt-3 max-w-2xl text-lg font-medium leading-snug md:text-xl">
                  {paper.title}
                </h3>
                {paper.authors ? (
                  <p className="mt-2 max-w-2xl font-mono text-xs text-muted-foreground">
                    {paper.authors}
                  </p>
                ) : null}
                <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {paper.abstract}
                </p>

                {paper.links?.length ? (
                  <div className="mt-4 flex gap-6 font-mono text-xs">
                    {paper.links.map((link) => (
                      <a key={link.label} href={link.href} className="link-underline">
                        {link.label} →
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="notes"
          index="04"
          title="Security notes"
          lead="Write-ups and working notes from things I read, break, or rebuild."
        >
          <div className="grid gap-4">
            {notes.map((note) => (
              <a key={note.title} href={note.href} className="panel block p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="label-mono">{note.date}</span>
                  <span className="label-mono">{note.readingTime}</span>
                </div>
                <h3 className="display mt-4 text-lg font-medium md:text-xl">{note.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {note.excerpt}
                </p>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="credentials"
          index="05"
          title="Certifications"
          lead="Certifications and programmes."
        >
          <ul className="divide-y divide-border">
            {credentials.map((item) => (
              <li
                key={item.title}
                className="flex flex-wrap items-baseline justify-between gap-3 py-5 first:pt-0"
              >
                <h3 className="text-base font-medium">
                  {item.title}
                  <span className="text-muted-foreground"> · {item.issuer}</span>
                </h3>
                <span className="label-mono">{item.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="community"
          index="06"
          title="Community & Open Source"
          lead="Hackathons, mentoring, volunteering, and open-source involvement."
        >
          <ul className="divide-y divide-border">
            {community.map((item) => (
              <li key={item.title + item.org} className="py-6 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-base font-medium">
                    {item.title}
                    {item.org ? (
                      <span className="text-muted-foreground"> · {item.org}</span>
                    ) : null}
                  </h3>
                  <span className="label-mono">{item.period}</span>
                </div>
                <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {renderInlineLinks(item.summary)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Footer />
      </main>
    </div>
  );
}

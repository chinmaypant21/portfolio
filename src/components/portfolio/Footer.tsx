import { profile } from "@/content/portfolio";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  // { label: "Résumé", href: profile.resume }, // hidden for now
];

const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;

export function Footer() {
  return (
    <footer id="contact" className="rule-top py-16 md:py-20">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="label-mono">Get in touch</p>
          <a
            href={`mailto:${profile.email}`}
            className="display mt-4 inline-block text-2xl font-medium hover:text-accent md:text-4xl"
          >
            {profile.email}
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="link-underline">
              {link.label}
            </a>
          ))}
          <a href={phoneHref} className="link-underline">
            Phone
          </a>
        </nav>
      </div>

      <div className="mt-16 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="label-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="label-mono">Built with Lovable, who also read my résumé so you wouldn&apos;t have to ♥</p>
      </div>
    </footer>
  );
}

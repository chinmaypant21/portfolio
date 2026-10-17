import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <h1 className="display max-w-3xl text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl font-mono text-xs text-accent">
        {profile.study}
        <span className="text-muted-foreground"> · {profile.location}</span>
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        {profile.tagline}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs">
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {profile.availability}
        </span>

        {/* Résumé link hidden for now
        <a className="link-underline" href={profile.resume}>
          Résumé
        </a>
        */}
      </div>

    </section>
  );
}

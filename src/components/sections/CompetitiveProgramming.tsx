import { Trophy, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cp } from "@/data/content";

export function CompetitiveProgramming() {
  return (
    <Section id="competitive" className="bg-soft">
      <SectionHeading
        index="04"
        subtitle="Competitive Programming"
        title="Problem-solving, at scale"
      />

      {/* Headline stat badges */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {cp.highlights.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-default bg-card px-3 py-4 text-center sm:p-5">
              <div className="text-2xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Platform cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cp.platforms.map((p, i) => {
          const inner = (
            <div className="flex h-full flex-col rounded-2xl border border-default bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-500/50">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r ${p.accent}`}
                />
                {p.url && (
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p
                className={`bg-gradient-to-r ${p.accent} bg-clip-text text-sm font-semibold text-transparent`}
              >
                {p.rank}
              </p>
              <p className="mt-1 text-sm text-muted">{p.detail}</p>
              <p className="mt-4 font-mono text-sm">{p.solved}</p>
            </div>
          );

          return (
            <Reveal key={p.name} delay={i * 0.08}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div className="group h-full">{inner}</div>
              )}
            </Reveal>
          );
        })}

        {/* Other judges — one card with linked chips */}
        <Reveal delay={cp.platforms.length * 0.08}>
          <div className="flex h-full flex-col rounded-2xl border border-default bg-card p-6">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r ${cp.otherJudges.accent}`}
            />
            <h3 className="mt-4 text-lg font-semibold">Other Judges</h3>
            <p className="mt-1 font-mono text-sm text-muted">
              {cp.otherJudges.solved}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cp.otherJudges.links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center gap-1 rounded-md bg-soft px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                  >
                    {l.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Achievements */}
      <Reveal delay={0.1}>
        <div className="mt-6 rounded-2xl border border-default bg-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <Trophy className="h-4 w-4" />
            Achievements
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {cp.achievements.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-400" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

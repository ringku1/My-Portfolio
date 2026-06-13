import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" subtitle="About" title="A bit about me" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-base leading-relaxed text-muted md:col-span-3">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-2xl border border-default bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              At a glance
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              {about.glance.map((row) => (
                <div key={row.label} className="flex justify-between gap-4">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-right font-medium">
                    {row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-400 hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

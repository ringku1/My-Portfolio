import { GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/content";

export function Education() {
  return (
    <Section id="education" className="bg-soft">
      <SectionHeading index="06" subtitle="Education" title="Academic background" />
      <div className="space-y-4">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.08}>
            <div className="flex flex-col gap-4 rounded-2xl border border-default bg-card p-6 sm:flex-row sm:items-center">
              <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <span className="font-mono text-xs text-muted">{edu.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted">
                  {edu.degree} · {edu.location}
                </p>
                <p className="mt-2 inline-flex rounded-md bg-brand-500/10 px-2.5 py-1 text-sm font-medium text-accent">
                  {edu.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

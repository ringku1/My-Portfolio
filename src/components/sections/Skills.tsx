import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="05" subtitle="Skills" title="Tools I work with" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.08}>
            <div className="h-full rounded-2xl border border-default bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-400">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-default bg-soft px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand-500/50 hover:text-brand-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

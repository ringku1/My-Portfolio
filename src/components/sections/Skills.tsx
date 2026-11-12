import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="05" subtitle="Skills" title="Tools I work with" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.08}>
            <div className="h-full rounded-2xl border border-default bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-default bg-soft px-3 py-1.5 text-sm font-medium"
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

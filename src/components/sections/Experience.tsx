import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" className="bg-soft">
      <SectionHeading index="02" subtitle="Experience" title="Where I've worked" />

      <ol className="relative ml-3 border-l border-default">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 0.08}>
            <div className="relative pb-10 pl-8 last:pb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-soft)] bg-brand-500" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  {job.current && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-brand-500/15 px-2 py-0.5 align-middle text-xs font-medium text-brand-400">
                      Current
                    </span>
                  )}
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>

              <p className="mt-0.5 text-sm font-medium text-brand-400">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </p>

              <ul className="mt-3 space-y-2">
                {job.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

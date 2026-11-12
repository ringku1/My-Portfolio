import { Briefcase } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { experience, type Experience as Job } from "@/data/content";

type CompanyGroup = { company: string; companyUrl?: string; roles: Job[] };

/** Merge consecutive roles at the same company so promotions read as one story. */
function groupByCompany(jobs: Job[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const job of jobs) {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) last.roles.push(job);
    else groups.push({ company: job.company, companyUrl: job.companyUrl, roles: [job] });
  }
  return groups;
}

/** "Jun 2025 — Oct 2025" + "Jun 2026 — Present" → "Jun 2025 — Present". */
function overallPeriod(roles: Job[]): string {
  const [first] = roles;
  const last = roles[roles.length - 1];
  const end = first.period.split("—")[1]?.trim();
  const start = last.period.split("—")[0]?.trim();
  return start && end ? `${start} — ${end}` : first.period;
}

export function Experience() {
  const groups = groupByCompany(experience);

  return (
    <Section id="experience" className="bg-soft">
      <SectionHeading index="02" subtitle="Experience" title="Where I've worked" />

      <div className="space-y-6">
        {groups.map((group, gi) => (
          <Reveal key={`${group.company}-${gi}`} delay={gi * 0.08}>
            <div className="rounded-2xl border border-default bg-card p-5 sm:p-7">
              {/* Company header */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-accent">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {group.companyUrl ? (
                        <a
                          href={group.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          {group.company}
                        </a>
                      ) : (
                        group.company
                      )}
                    </h3>
                    {group.roles.length > 1 && (
                      <p className="text-xs text-muted">
                        {group.roles.length} roles · promoted from{" "}
                        {group.roles[group.roles.length - 1].role}
                      </p>
                    )}
                  </div>
                </div>
                <span className="font-mono text-xs text-muted">
                  {overallPeriod(group.roles)}
                </span>
              </div>

              {/* Role timeline */}
              <ol className="relative mt-6 ml-[5px] border-l border-default">
                {group.roles.map((job) => (
                  <li
                    key={`${job.role}-${job.period}`}
                    className="relative pb-7 pl-6 last:pb-0 sm:pl-8"
                  >
                    <span
                      aria-hidden
                      className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-[var(--card)] ${
                        job.current ? "bg-brand-500" : "bg-[var(--border)]"
                      }`}
                    >
                      {job.current && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-brand-500 opacity-60" />
                      )}
                    </span>

                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-semibold">
                        {job.role}
                        {job.current && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-brand-500/15 px-2 py-0.5 align-middle text-xs font-medium text-accent">
                            Current
                          </span>
                        )}
                      </h4>
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                    </div>

                    <ul className="mt-2 space-y-1.5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span
                            aria-hidden
                            className="mt-[9px] h-1 w-1 flex-none rounded-full bg-brand-400"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

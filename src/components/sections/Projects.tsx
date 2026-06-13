import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-default bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-brand-400">
          {project.title}
        </h3>
        <div className="flex flex-none items-center gap-1.5 text-muted">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-md p-1.5 transition-colors hover:bg-soft hover:text-brand-400"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${project.liveLabel ?? "live site"}`}
              className="rounded-md p-1.5 transition-colors hover:bg-soft hover:text-brand-400"
            >
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-brand-500/10 px-2.5 py-1 font-mono text-xs text-brand-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-brand-400 hover:underline"
        >
          {project.liveLabel ?? "Live demo"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" subtitle="Projects" title="Things I've built" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

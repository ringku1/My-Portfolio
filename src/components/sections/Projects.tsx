import { ArrowUpRight, Github, Lock, Star } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/content";

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, github, live, liveLabel, featured } = project;
  // The whole card links to the live site if there is one, else the repo.
  const primary = live || github;
  const interactive = Boolean(primary);

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border border-default bg-card p-5 transition-all duration-300 sm:p-6 ${
        interactive
          ? "hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/10 focus-within:border-brand-500/50"
          : ""
      } ${featured ? "overflow-hidden" : ""}`}
    >
      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl"
        />
      )}

      {featured && (
        <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-accent">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-semibold leading-snug transition-colors ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          } ${interactive ? "group-hover:text-accent" : ""}`}
        >
          {primary ? (
            // Stretched link: makes the whole card clickable while keeping a
            // single, well-named link for screen readers.
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {interactive && (
          <ArrowUpRight
            aria-hidden
            className="mt-1 h-5 w-5 flex-none text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>

      <p
        className={`mt-3 flex-1 leading-relaxed text-muted ${
          featured ? "text-sm sm:text-base" : "text-sm"
        }`}
      >
        {description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-brand-500/10 px-2.5 py-1 font-mono text-xs text-accent"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Explicit links sit above the stretched link (z-10) so each stays clickable. */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-default pt-4 text-sm">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 font-medium text-accent hover:underline"
          >
            {liveLabel ?? "Live demo"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code on GitHub`}
            className="relative z-10 inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        )}
        {!github && (
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Lock className="h-3.5 w-3.5" />
            Private repo
          </span>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" subtitle="Projects" title="Things I've built" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 0.06}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

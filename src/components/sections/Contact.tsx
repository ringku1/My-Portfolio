import { Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-default bg-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-600/15 blur-[100px]" />
          </div>

          <p className="font-mono text-sm uppercase tracking-widest text-brand-400">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m open to interesting roles and collaborations. The fastest way
            to reach me is email — I&apos;ll get back to you soon.
          </p>

          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

import { Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-default bg-card px-5 py-12 text-center sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-600/20 blur-[100px]" />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-accent sm:text-sm">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m open to interesting roles and collaborations. The fastest way
            to reach me is email — I&apos;ll get back to you soon.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5 sm:px-6"
              >
                <Mail className="h-4 w-4 flex-none" />
                <span className="break-all">{profile.email}</span>
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
            <SocialLinks showEmail={false} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

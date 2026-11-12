"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code2, Download, MapPin, Trophy } from "lucide-react";
import { cp, profile } from "@/data/content";
import { SocialLinks } from "@/components/SocialLinks";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Pulled from the competitive-programming data so numbers stay in one place.
const heroFacts = [
  { Icon: Code2, text: `${cp.highlights[0].value} ${cp.highlights[0].label.toLowerCase()}` },
  ...(cp.platforms[0]
    ? [{ Icon: Trophy, text: `${cp.platforms[0].name} ${cp.platforms[0].rank}` }]
    : []),
];

export function Hero() {
  // Center partition line fades out as you scroll down, returns near the top.
  const { scrollY } = useScroll();
  const lineOpacity = useTransform(scrollY, [0, 220], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-20 lg:pt-16 lg:pb-0"
    >
      {/* Ambient gradient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col-reverse gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:flex-1"
          >
            <motion.p
              variants={item}
              className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-default bg-card px-3 py-1 text-xs text-muted sm:rounded-full sm:text-sm"
            >
              <span className="relative flex h-2 w-2 flex-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              <span>
                Currently at{" "}
                <a
                  href={profile.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {profile.company.name}
                </a>
              </span>
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-xl font-semibold text-gradient sm:text-2xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-base leading-relaxed sm:mt-6 text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Quick credibility facts */}
            <motion.ul
              variants={item}
              className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted sm:mt-5"
            >
              <li className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 flex-none text-accent" />
                {profile.location}
              </li>
              {heroFacts.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 flex-none text-accent" />
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={item}
              className="mt-7 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              {/* Buttons share a row (full-width halves on phones). */}
              <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:gap-4">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-3 sm:px-5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5 sm:flex-none"
                >
                  <Download className="h-4 w-4 flex-none" />
                  <span className="sm:hidden">Resume</span>
                  <span className="hidden sm:inline">Download Resume</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-default bg-card px-3 py-3 text-sm font-semibold transition-colors hover:border-brand-500/50 hover:text-accent sm:px-5"
                >
                  <span>
                    <span className="hidden sm:inline">View </span>Projects
                  </span>
                  <ArrowDown className="h-4 w-4 flex-none" />
                </a>
              </div>
              <SocialLinks className="sm:ml-1" />
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full sm:-inset-3 bg-gradient-to-tr from-brand-500/40 to-violet-500/40 blur-2xl"
              />
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-brand-500/40 sm:h-40 sm:w-40 lg:h-72 lg:w-72">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 7rem, (max-width: 1024px) 10rem, 18rem"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-fading center partition line (replaces the old arrow) */}
      <motion.div
        aria-hidden
        style={{ opacity: lineOpacity }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-400/70 to-transparent sm:block"
      />
    </section>
  );
}

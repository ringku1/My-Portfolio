"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/content";
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

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl px-5"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-default bg-card px-3 py-1 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          Junior Software Engineer @ AppifyLab
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
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
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-2 text-sm text-muted"
        >
          <MapPin className="h-4 w-4 text-brand-400" />
          {profile.location}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-default bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-brand-500/50 hover:text-brand-400"
          >
            View Projects
          </a>
          <SocialLinks className="ml-1" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}

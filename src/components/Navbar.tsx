"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .filter((_, i, a) => i === 0 || i === a.length - 1)
  .join("");

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  // Reading-progress bar along the bottom edge of the header.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Header background + scroll-spy, computed together on scroll.
  // A section is "active" once its top passes 40% of the viewport; at the very
  // bottom of the page the last section wins (short sections can't reach 40%).
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(`#${ids[ids.length - 1]}`);
        return;
      }

      const line = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = `#${id}`;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape, and
  // close if the viewport grows to desktop size.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          open
            ? "border-b border-default bg-[var(--bg)]"
            : scrolled
              ? "border-b border-default bg-page/80 backdrop-blur-md"
              : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-5"
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-2.5"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 font-mono text-xs font-bold text-white shadow-md shadow-brand-500/25 transition-transform group-hover:scale-105">
              {initials}
            </span>
            <span className="truncate text-[15px] font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-md px-3 py-2 text-sm transition-colors hover:text-[var(--fg)] ${
                      isActive ? "text-[var(--fg)]" : "text-muted"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden
                        className="absolute inset-0 -z-10 rounded-md bg-brand-500/10"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-none items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-lg border border-brand-500/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-brand-500/10 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-card text-muted transition-colors hover:text-accent lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain border-t border-default bg-[var(--bg)] lg:hidden"
            >
              <ul className="mx-auto max-w-5xl space-y-1 px-5 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === link.href ? "location" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base transition-colors hover:bg-soft hover:text-accent ${
                        active === link.href ? "bg-soft font-medium text-accent" : "text-muted"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={profile.resumeUrl}
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-3 text-base font-semibold text-white"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-[-1px] h-0.5 origin-left bg-gradient-to-r from-brand-500 to-violet-500"
        />
      </header>

      {/* Backdrop: tap outside the mobile menu to close it */}
      <AnimatePresence>
        {open && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

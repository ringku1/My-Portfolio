import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Anchored, padded, max-width-constrained section container. */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-5">{children}</div>
    </section>
  );
}

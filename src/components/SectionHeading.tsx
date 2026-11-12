import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Small monospace index, e.g. "01". */
  index?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 sm:mb-10 md:mb-14">
      <div className="flex items-center gap-2 sm:gap-3">
        {index && (
          <span className="font-mono text-xs text-accent sm:text-sm">{index}</span>
        )}
        <span className="h-px w-6 flex-none bg-brand-500/50 sm:w-8" />
        <span className="min-w-0 font-mono text-xs uppercase tracking-wider text-muted sm:text-sm sm:tracking-widest">
          {subtitle}
        </span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Small monospace index, e.g. "01". */
  index?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono text-sm text-brand-400">{index}</span>
        )}
        <span className="h-px w-8 bg-brand-500/50" />
        <span className="font-mono text-sm uppercase tracking-widest text-muted">
          {subtitle}
        </span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

type SocialLinksProps = {
  size?: "sm" | "md";
  className?: string;
  /** Set false where a dedicated email button is already shown. */
  showEmail?: boolean;
};

export function SocialLinks({
  size = "md",
  className = "",
  showEmail = true,
}: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-[18px] w-[18px]" : "h-5 w-5";
  const shown = showEmail ? links : links.filter((l) => l.label !== "Email");

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {shown.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`inline-flex ${box} items-center justify-center rounded-xl border border-default bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-accent`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}

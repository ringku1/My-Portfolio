import { profile } from "@/data/content";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-default">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}

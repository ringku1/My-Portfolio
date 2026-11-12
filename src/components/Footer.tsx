import { profile } from "@/data/content";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">
            © {year}
          </p>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}

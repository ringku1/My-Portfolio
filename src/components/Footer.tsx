import { profile } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default">
      <div className="mx-auto max-w-5xl px-5 py-8 text-center">
        <p className="text-sm text-muted">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

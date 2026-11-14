import { profile } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default">
      <div className="mx-auto max-w-5xl px-5 py-10 text-center">
        <p className="text-sm font-medium">{profile.name}</p>
        <p className="mt-1 text-xs text-muted">
          © {year}
        </p>
      </div>
    </footer>
  );
}

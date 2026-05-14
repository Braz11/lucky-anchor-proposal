import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const STYLES = [
  { slug: "luxury", label: "Luxury Dark" },
  { slug: "urban", label: "Urban Street" },
  { slug: "scandinavian", label: "Scandinavian" },
] as const;

export function StyleSwitcher({ active, accent = "white" }: { active: string; accent?: string }) {
  return (
    <div className="fixed top-4 right-4 z-[100] flex items-center gap-2 backdrop-blur-md bg-black/60 border border-white/10 rounded-full px-2 py-2 text-xs text-white">
      <Link to="/lucky-anchor-proposal/" className="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded-full transition">
        <ArrowLeft className="w-3 h-3" /> Proposta
      </Link>
      <div className="w-px h-4 bg-white/20" />
      {STYLES.map((s) => (
        <Link
          key={s.slug}
          to={`/${s.slug}` as "/luxury"}
          className={`px-3 py-1.5 rounded-full transition ${
            active === s.slug ? "text-black" : "hover:bg-white/10"
          }`}
          style={active === s.slug ? { background: accent } : undefined}
        >
          {s.label}
        </Link>
      ))}
    </div>
  );
}
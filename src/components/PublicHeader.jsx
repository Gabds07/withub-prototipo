import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Logo from "./Logo";

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center gap-6 px-5">
        <Link to="/">
          <Logo />
        </Link>
        <div className="relative hidden flex-1 max-w-md md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Buscar projetos, mentores ou tecnologias…"
            className="w-full rounded-lg border border-line bg-cloud py-2 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/cadastro"
            className="rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </header>
  );
}

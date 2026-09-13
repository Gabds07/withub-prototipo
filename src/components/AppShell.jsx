import { Link, useLocation } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import Logo from "./Logo";

export function AppShell({ nav, user, subtitle, children }) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-cloud">
      <header className="sticky top-0 z-40 border-b border-line-soft bg-white">
        <div className="mx-auto flex h-16 max-w-content items-center gap-6 px-5">
          <Link to="/"><Logo /></Link>
          <div className="relative hidden flex-1 max-w-sm md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Buscar projetos, mentores ou tecnologias…"
              className="w-full rounded-lg border border-line bg-cloud py-2 pl-9 pr-3 text-sm placeholder:text-muted focus:border-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="relative rounded-md p-2 text-muted hover:bg-cloud hover:text-ink">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-violet ring-2 ring-white" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                {user.initials}
              </span>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold leading-tight text-ink">{user.name}</p>
                <p className="text-xs leading-tight text-muted">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-content px-5 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
          <aside className="space-y-1">
            {nav.map((item) => {
              const active = location.pathname === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-blue-50 text-blue" : "text-muted hover:bg-white hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

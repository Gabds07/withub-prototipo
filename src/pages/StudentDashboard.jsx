import { Link } from "react-router-dom";
import { LayoutDashboard, FolderGit2, Compass, Bell, Plus, ChevronRight, Users2 } from "lucide-react";
import { AppShell } from "../components/AppShell";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import CategoryChip from "../components/CategoryChip";
import { studentProjects } from "../data/projects";

const nav = [
  { to: "/aluno", label: "Dashboard", icon: LayoutDashboard },
  { to: "/aluno/projetos", label: "Meus Projetos", icon: FolderGit2 },
  { to: "/aluno/explorar", label: "Explorar STEAM", icon: Compass },
  { to: "/aluno/notificacoes", label: "Notificações", icon: Bell },
];

export default function StudentDashboard() {
  return (
    <AppShell
      nav={nav}
      user={{ name: "Eduardo Santos", initials: "ES" }}
      subtitle="Área do Aluno"
    >
      <div className="animate-rise rounded-xl border border-blue-50 bg-blue-50/60 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Há solicitações de contato de recrutadores (3 pendentes)</p>
          <p className="text-xs text-muted">Recrutadores da Embraer e da Weg visualizaram seu portfólio de Engenharia e enviaram propostas de mentoria ou entrevista.</p>
        </div>
        <button className="shrink-0 rounded-md bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-graphite">
          Visualizar contatos
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Projetos ativos" value="3" />
        <StatCard label="Validados pelo mentor" value="1" accent="text-approved" />
        <StatCard label="Visualizações por recrutadores" value="142" accent="text-blue" />
        <StatCard label="Contato de recrutadores" value="3" accent="text-violet" />
      </div>

      <div className="mt-6 rounded-xl border border-line-soft bg-white p-5 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-ink">Meus Projetos Acadêmicos</h2>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
              <Users2 className="h-3.5 w-3.5" /> ITA — Instituto Tecnológico de Aeronáutica
            </p>
          </div>
          <Link
            to="/aluno/novo-projeto"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-gradient px-3.5 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            <Plus className="h-4 w-4" /> Novo Projeto
          </Link>
        </div>

        <div className="divide-y divide-line-soft">
          {studentProjects.map((p) => (
            <Link
              key={p.id}
              to={p.status === "draft" ? "/aluno/novo-projeto" : `/projeto/${p.id}`}
              className="group flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold text-ink group-hover:text-blue">{p.title}</h3>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted">{p.updated}</span>
                  <span className="text-line">·</span>
                  <CategoryChip id={p.category} />
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge status={p.status} label={p.statusLabel} />
                {p.mentorValidated && (
                  <span className="hidden text-xs font-medium text-approved sm:inline">✔ Validado pelo mentor</span>
                )}
                <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink group-hover:border-blue group-hover:text-blue">
                  Editar
                </span>
                <ChevronRight className="h-4 w-4 text-line" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

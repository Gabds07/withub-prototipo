import { useState } from "react";
import { LayoutDashboard, FolderGit2, Compass, Bell, UploadCloud, Lock, Building2, Globe2, GitCommitHorizontal } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { categories } from "../data/projects";

const nav = [
  { to: "/aluno", label: "Dashboard", icon: LayoutDashboard },
  { to: "/aluno/projetos", label: "Meus Projetos", icon: FolderGit2 },
  { to: "/aluno/explorar", label: "Explorar STEAM", icon: Compass },
  { to: "/aluno/notificacoes", label: "Notificações", icon: Bell },
];

const visibilityOptions = [
  { id: "private", label: "Privado", desc: "Visível apenas para você e o mentor.", icon: Lock },
  { id: "internal", label: "Interno", desc: "Visível para toda a sua instituição.", icon: Building2 },
  { id: "public", label: "Público", desc: "Visível na vitrine e para recrutadores.", icon: Globe2 },
];

export default function NewProject() {
  const [visibility, setVisibility] = useState("private");
  const [category, setCategory] = useState("engineering");

  return (
    <AppShell nav={nav} user={{ name: "Eduardo Santos", initials: "ES" }} subtitle="Área do Aluno">
      <div className="mb-5">
        <h1 className="text-xl font-bold text-ink">Novo Projeto Acadêmico</h1>
        <p className="mt-1 text-sm text-muted">Estruture seu projeto para curadoria do mentor e futura publicação.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Section title="Informações gerais">
            <Field label="Título do projeto">
              <input
                type="text"
                placeholder="Ex.: Rover Explorador Autônomo com LiDAR"
                className="input"
              />
            </Field>
            <Field label="Descrição técnica">
              <textarea
                rows={4}
                placeholder="Descreva objetivo, metodologia e resultados obtidos…"
                className="input resize-none"
              />
            </Field>
            <Field label="Categoria STEAM">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      category === c.id ? "border-transparent text-white" : "border-line-soft text-muted hover:border-line"
                    }`}
                    style={category === c.id ? { backgroundColor: c.color } : {}}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Integrantes da equipe">
              <input type="text" placeholder="Adicione colegas pelo e-mail institucional" className="input" />
            </Field>
          </Section>

          <Section title="Arquivos do projeto">
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-line py-10 text-center">
              <UploadCloud className="h-6 w-6 text-muted" />
              <p className="text-sm font-medium text-ink">Arraste arquivos ou toque para enviar</p>
              <p className="text-xs text-muted">Vídeo, imagens, código-fonte (.zip) ou PDF — ideal para envio direto do celular em campo.</p>
              <button className="mt-2 rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-ink hover:border-blue hover:text-blue">
                Selecionar arquivos
              </button>
            </div>
          </Section>

          <Section title="Histórico de progresso">
            <div className="space-y-4">
              {[
                { v: "v0.3", label: "Upload de vídeo de demonstração", date: "hoje" },
                { v: "v0.2", label: "Ajuste na descrição técnica após comentário do mentor", date: "há 3 dias" },
                { v: "v0.1", label: "Criação do projeto", date: "há 1 semana" },
              ].map((entry, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <GitCommitHorizontal className="h-4 w-4 text-blue" />
                    {i < 2 && <div className="mt-1 h-full w-px bg-line-soft" />}
                  </div>
                  <div className="pb-1">
                    <p className="font-mono-num text-xs font-semibold text-ink">{entry.v} <span className="font-sans font-normal text-muted">— {entry.label}</span></p>
                    <p className="text-xs text-muted">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title="Privacidade">
            <div className="space-y-2">
              {visibilityOptions.map((opt) => {
                const Icon = opt.icon;
                const active = visibility === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setVisibility(opt.id)}
                    className={`flex w-full items-start gap-3 rounded-lg border p-3 text-left transition ${
                      active ? "border-blue bg-blue-50" : "border-line-soft hover:border-line"
                    }`}
                  >
                    <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-blue" : "text-muted"}`} />
                    <div>
                      <p className={`text-sm font-semibold ${active ? "text-blue" : "text-ink"}`}>{opt.label}</p>
                      <p className="text-xs text-muted">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Section>

          <div className="rounded-xl border border-line-soft bg-white p-5 shadow-card">
            <p className="text-xs text-muted">
              Ao enviar, seu projeto entra na fila de análise do mentor vinculado à sua instituição.
            </p>
            <button className="mt-4 w-full rounded-md bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110">
              Enviar para análise do mentor
            </button>
            <button className="mt-2 w-full rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-line">
              Salvar como rascunho
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #D7DCE3;
          padding: 0.55rem 0.75rem;
          font-size: 0.875rem;
          color: #0D1117;
        }
        .input:focus {
          outline: none;
          border-color: #0B5FFF;
          box-shadow: 0 0 0 3px #EDF3FF;
        }
      `}</style>
    </AppShell>
  );
}

function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-line-soft bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-bold text-ink">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted">{label}</label>
      {children}
    </div>
  );
}

import { useMemo, useState } from "react";
import {
    ArrowUpRight,
    ShieldCheck,
    GraduationCap,
    Building2,
} from "lucide-react";
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../data/projects";

const institutions = [...new Set(projects.map((p) => p.institution))];
const stack = [...new Set(projects.flatMap((p) => p.stack))];

export default function Landing() {
    const [activeCategories, setActiveCategories] = useState([]);
    const [activeStack, setActiveStack] = useState([]);
    const [activeInst, setActiveInst] = useState([]);

    const toggle = (setter, current, value) =>
        setter(
            current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value],
        );

    const filtered = useMemo(() => {
        return projects.filter((p) => {
            if (p.visibility !== "public") return false;
            if (
                activeCategories.length &&
                !activeCategories.includes(p.category)
            )
                return false;
            if (
                activeStack.length &&
                !p.stack.some((s) => activeStack.includes(s))
            )
                return false;
            if (activeInst.length && !activeInst.includes(p.institution))
                return false;
            return true;
        });
    }, [activeCategories, activeStack, activeInst]);

    return (
        <div className="min-h-screen bg-white">
            <PublicHeader />

            {/* Hero */}
            <section className="border-b border-line-soft bg-[radial-gradient(ellipse_120%_100%_at_50%_-20%,#EDF3FF_0%,#FFFFFF_60%)]">
                <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
                    <div className="animate-rise">
                        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                            O ecossistema oficial de ciência e tecnologia
                            acadêmica
                        </div>
                        <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-[3.25rem]">
                            O currículo que a academia
                            <br /> valida e a indústria
                            <br /> reconhece.
                        </h1>
                        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
                            WitHub reúne projetos reais de estudantes STEAM,
                            curados por mentores acadêmicos e prontos para serem
                            auditados por recrutadores técnicos — cada portfólio
                            nasce com procedência.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#projetos"
                                className="inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
                            >
                                Explorar projetos publicados{" "}
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                            <a
                                href="/mentor"
                                className="inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-blue hover:text-blue"
                            >
                                Sou docente / mentor
                            </a>
                        </div>
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line-soft pt-6 max-w-md">
                            <div>
                                <p className="font-mono-num text-2xl font-bold text-ink">
                                    1.284
                                </p>
                                <p className="text-xs text-muted">
                                    projetos validados
                                </p>
                            </div>
                            <div>
                                <p className="font-mono-num text-2xl font-bold text-ink">
                                    96
                                </p>
                                <p className="text-xs text-muted">
                                    instituições
                                </p>
                            </div>
                            <div>
                                <p className="font-mono-num text-2xl font-bold text-ink">
                                    312
                                </p>
                                <p className="text-xs text-muted">
                                    mentores ativos
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="gif-representativo.gif"
                        className="shadow-xl shadow-slate-500/50 rounded-xl"
                    />
                </div>
            </section>

            {/* Trust strip */}
            <section className="border-b border-line-soft bg-cloud">
                <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-10 gap-y-3 px-5 py-5 text-xs font-medium text-muted">
                    <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-approved" />{" "}
                        Curadoria por mentores certificados
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <GraduationCap className="h-3.5 w-3.5 text-blue" />{" "}
                        Vínculo institucional obrigatório
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-violet" />{" "}
                        Conforme LGPD e Estatuto Digital
                    </span>
                </div>
            </section>
            
            <section id="projetos" className="mx-auto max-w-content px-5 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
                    <aside className="space-y-7">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-semibold text-ink">
                                Filtros avançados
                            </h2>
                            {(activeCategories.length ||
                                activeStack.length ||
                                activeInst.length) > 0 && (
                                <button
                                    onClick={() => {
                                        setActiveCategories([]);
                                        setActiveStack([]);
                                        setActiveInst([]);
                                    }}
                                    className="text-xs font-medium text-blue hover:underline"
                                >
                                    Limpar
                                </button>
                            )}
                        </div>

                        <FilterGroup title="Área STEAM">
                            {categories.map((c) => (
                                <FilterCheckbox
                                    key={c.id}
                                    label={c.label}
                                    color={c.color}
                                    checked={activeCategories.includes(c.id)}
                                    onChange={() =>
                                        toggle(
                                            setActiveCategories,
                                            activeCategories,
                                            c.id,
                                        )
                                    }
                                />
                            ))}
                        </FilterGroup>

                        <FilterGroup title="Tecnologias">
                            {stack.slice(0, 6).map((s) => (
                                <FilterCheckbox
                                    key={s}
                                    label={s}
                                    checked={activeStack.includes(s)}
                                    onChange={() =>
                                        toggle(setActiveStack, activeStack, s)
                                    }
                                    mono
                                />
                            ))}
                        </FilterGroup>

                        <FilterGroup title="Instituição">
                            {institutions.map((i) => (
                                <FilterCheckbox
                                    key={i}
                                    label={i}
                                    checked={activeInst.includes(i)}
                                    onChange={() =>
                                        toggle(setActiveInst, activeInst, i)
                                    }
                                />
                            ))}
                        </FilterGroup>
                    </aside>

                    <div>
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-ink">
                                Projetos acadêmicos em destaque{" "}
                                <span className="font-mono-num text-muted">
                                    ({filtered.length})
                                </span>
                            </h2>
                            <select className="rounded-md border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink">
                                <option>Mais recentes</option>
                                <option>Mais visualizados</option>
                                <option>Instituição (A–Z)</option>
                            </select>
                        </div>
                        {filtered.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line py-20 text-center">
                                <p className="text-sm font-medium text-ink">
                                    Nenhum projeto encontrado
                                </p>
                                <p className="mt-1 text-xs text-muted">
                                    Ajuste os filtros para ver mais resultados
                                    publicados.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                {filtered.map((p) => (
                                    <ProjectCard key={p.id} project={p} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function FilterGroup({ title, children }) {
    return (
        <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted">
                {title}
            </p>
            <div className="space-y-2">{children}</div>
        </div>
    );
}

function FilterCheckbox({ label, checked, onChange, color, mono }) {
    return (
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-3.5 w-3.5 rounded border-line text-blue focus:ring-blue-50"
            />
            {color && (
                <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: color }}
                />
            )}
            <span className={mono ? "font-mono-num text-[13px]" : ""}>
                {label}
            </span>
        </label>
    );
}

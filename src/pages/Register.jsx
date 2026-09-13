import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    GraduationCap,
    User,
    Mail,
    Lock,
    Building2,
    Fingerprint,
} from "lucide-react";

export default function Login() {
    const [loginType, setLoginType] = useState("academic");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loginType === "academic") {
            navigate("/aluno");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="flex min-h-screen flex-col justify-center bg-[radial-gradient(ellipse_120%_100%_at_50%_-20%,#EDF3FF_0%,#FFFFFF_60%)] py-12 sm:px-6 lg:px-8">
            <div className="absolute left-5 top-5 sm:left-10 sm:top-8">
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar para o início
                </a>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md animate-rise">
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient bg-blue-500" />
                        WitHub Access
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-ink">
                    Acesse sua conta
                </h2>
                <p className="mt-2 text-center text-sm text-muted">
                    Conecte-se ao ecossistema oficial de ciência e tecnologia.
                </p>
            </div>

            <div
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-rise"
                style={{ animationDelay: "100ms" }}
            >
                <div className="rounded-xl border border-line-soft bg-white px-4 py-8 shadow-xl shadow-slate-200/50 sm:px-10">
                    <div className="mb-6 flex space-x-1 rounded-lg p-1 border border-line-soft bg-slate-50">
                        <button
                            type="button"
                            onClick={() => setLoginType("academic")}
                            className={`flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-sm font-semibold transition-all ${
                                loginType === "academic"
                                    ? "bg-white text-ink shadow-sm ring-1 ring-line-soft"
                                    : "text-muted hover:text-ink"
                            }`}
                        >
                            <GraduationCap className="h-4 w-4" />
                            Acadêmico
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoginType("standard")}
                            className={`flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-sm font-semibold transition-all ${
                                loginType === "standard"
                                    ? "bg-white text-ink shadow-sm ring-1 ring-line-soft"
                                    : "text-muted hover:text-ink"
                            }`}
                        >
                            <User className="h-4 w-4" />
                            Padrão
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {loginType === "academic" && (
                            <>
                                <div>
                                    <label
                                        htmlFor="institution"
                                        className="block text-sm font-medium text-ink"
                                    >
                                        Instituição de Ensino
                                    </label>
                                    <div className="relative mt-1">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Building2 className="h-4 w-4 text-muted" />
                                        </div>
                                        <select
                                            id="institution"
                                            required
                                            className="block w-full rounded-md border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-ink focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Selecione sua instituição
                                            </option>
                                            <option value="usp">
                                                Universidade de São Paulo (USP)
                                            </option>
                                            <option value="unicamp">
                                                Unicamp
                                            </option>
                                            <option value="ufmg">UFMG</option>
                                            <option value="ita">
                                                ITA - Instituto Tecnológico de
                                                Aeronáutica
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="identifier"
                                        className="block text-sm font-medium text-ink"
                                    >
                                        RA ou CPF
                                    </label>
                                    <div className="relative mt-1">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Fingerprint className="h-4 w-4 text-muted" />
                                        </div>
                                        <input
                                            id="identifier"
                                            type="text"
                                            required
                                            placeholder="Digite seu RA ou CPF"
                                            className="block w-full rounded-md border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-ink placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {loginType === "standard" && (
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-ink"
                                >
                                    E-mail corporativo ou pessoal
                                </label>
                                <div className="relative mt-1">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Mail className="h-4 w-4 text-muted" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="seu@email.com"
                                        className="block w-full rounded-md border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-ink placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-ink"
                            >
                                Senha
                            </label>
                            <div className="relative mt-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="h-4 w-4 text-muted" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="block w-full rounded-md border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-ink placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-line text-blue focus:ring-blue"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-xs text-muted"
                                >
                                    Lembrar de mim
                                </label>
                            </div>

                            <div className="text-xs">
                                <a
                                    href="#"
                                    className="font-semibold text-ink hover:text-blue hover:underline"
                                >
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-graphite focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
                            >
                                Entrar na plataforma
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-line-soft" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-xs text-muted">
                                    Novo no WitHub?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="/registro"
                                className="flex w-full justify-center rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-blue hover:text-blue"
                            >
                                Solicitar acesso antecipado
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

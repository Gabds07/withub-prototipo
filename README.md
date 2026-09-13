# WitHub — Protótipo Web

Protótipo funcional em React do WitHub, plataforma de portfólio acadêmico STEAM.

## O que está incluído

- **Landing page** (visitante não autenticado): vitrine pública de projetos, filtros por área STEAM, tecnologia e instituição, página de detalhe de projeto com certificado digital.
- **Área do Aluno**: dashboard com projetos, status e indicadores; fluxo de "Novo Projeto" com upload, categoria STEAM, seletor de privacidade (Privado/Interno/Público) e histórico de versões.
- **Painel do Mentor**: fila de validação com ações de Aprovar/Ajustes/Comentar, exploração de projetos da instituição, histórico de avaliações e indicadores.

A pasta `dist/` já contém uma versão pronta (build de produção) — basta abrir com um servidor estático para visualizar sem instalar nada.

## Rodar em modo desenvolvimento

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (geralmente http://localhost:5173).

## Gerar novo build de produção

```bash
npm run build
npm run preview
```

## Visualizar o build já incluso (sem instalar dependências)

```bash
npx serve dist
```

## Stack

- React 19 + Vite
- React Router
- Tailwind CSS
- lucide-react (ícones)

## Estrutura

```
src/
  assets/        logo da marca
  components/    Header, Footer, cards, badges, layout autenticado
  data/          dados mockados de projetos, fila de validação etc.
  pages/         Landing, ProjectDetail, StudentDashboard, NewProject, MentorPanel
```

## Próximos passos sugeridos

- Conectar aos endpoints reais de autenticação e upload de arquivos.
- Implementar o gerador real de certificado em PDF + QR code (RF12).
- Adicionar a tela de indicadores completos do gestor institucional (RF18).

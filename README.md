# Jishnu Sathyanarayanan — Portfolio & Agentic AI Systems Sandbox

> **AI Engineer • Agentic Systems Developer • Backend Architect**  
> Computer Science Graduate (2026) | SRM Institute of Science and Technology (CGPA: 8.49)  
> Former Research & Developer Intern @ TrenchSecurity

An interactive, impact-first developer portfolio engineered specifically for roles in **AI Engineering, Agentic AI Systems, Backend Engineering, and Software Engineering**.

---

## 🌟 Unique Architectural Highlights & Standout Features

### 1. 🤖 Mini Devin Autonomous Agent Simulator (Interactive Sandbox)
- **Live In-Browser Agent Loop**: Recruiters can test real programming challenges (LRU Cache with TTL, FastAPI Webhook Resilience with DLQ).
- **5-Stage Telemetry**:
  1. *Decomposition & Planning*
  2. *Tool Call (`workspace.write_file`)*
  3. *Subprocess Sandbox (`pytest` runner)*
  4. *AST Traceback Reflection & Patch Synthesizer*
  5. *Self-Healing Verification Loop (100% Green)*
- **Interactive Controls**: Step navigation, mechanical audio feedback, diff comparison, and live terminal output.

### 2. ⚡ Role-Adaptive Persona Lens Switcher
- Instant toggle between three lenses:
  - **🤖 Agentic AI Lens**: Prioritizes Model Context Protocol (MCP), LLM loops, and RAG pipelines.
  - **⚡ Backend & Systems Lens**: Highlights FastAPI, webhooks, databases, and pytest rigor.
  - **🎯 Recruiter Quick Scan**: Executive summary, SRM 8.49 CGPA, TrenchSecurity experience, and immediate availability.

### 3. 📐 Interactive System Design & Architecture Visualizer
- Visual pipeline diagrams for:
  - **TrenchSecurity Production MCP Workflow** (Security Alert -> Normalizer -> MCP Agent Core -> Slack/Teams/Jira)
  - **Mini Devin Self-Healing Loop** (Planner -> Sandbox -> AST Reflection -> Verification)
  - **Enterprise RAG Engine** (PDF Parser -> Semantic Chunking -> ChromaDB Vector Index -> Grounded LLM Response)
- Clickable pipeline nodes with inspectable JSON payloads, latencies, and architectural rationales.

### 4. 🛠️ FastAPI Interactive REST API Playground
- Direct interactive Swagger-like console to test mock endpoints (`/api/v1/agent/mini-devin/execute`, `/api/v1/rag/query`, `/api/v1/health`).
- Live latency measurements and one-click `cURL` command generation.

### 5. 💬 Jishnu AI Copilot (Interactive Assistant & Fit Matcher)
- Real-time assistant configured with Model Context Protocol (MCP) tool-calling traces.
- Answers technical questions, explains design decisions, and evaluates fit against job descriptions.

### 6. ⌨️ Command Palette (`Cmd + K` / `Ctrl + K`)
- Raycast/Linear-style instant keyboard navigation across all sections, lenses, and resume actions.

---

## 🛠️ Tech Stack & Architectural Decisions

| Layer | Technology | Why Chosen? |
|---|---|---|
| **Framework** | **React 19 + TypeScript** | Maximum type safety, modern concurrent rendering, seamless state handling for complex simulation loops. |
| **Build Tool** | **Vite 8** | Sub-second HMR development experience and blazing-fast production bundling (3.2s). |
| **Styling** | **Tailwind CSS v4** | Next-generation CSS compiler using `@tailwindcss/vite`, zero runtime overhead, modern cybernetic dark aesthetic. |
| **Icons** | **Lucide React + Custom SVGs** | Clean, minimalist, scalable developer iconography. |
| **Interactivity** | **Canvas Confetti & Web Audio API** | Subtle mechanical audio clicks and reward celebrations upon agent verification passing. |
| **Data Layer** | **Config-Driven Architecture** | All resume data, projects, skills, and telemetry are isolated in `src/data/portfolioData.ts`. |

---

## 📁 Project Structure

```
D:/jishnu04/jishnu-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Floating header, lens switch, Cmd+K trigger
│   │   ├── Hero.tsx                  # High-impact headline, SRM 8.49 CGPA, boot terminal
│   │   ├── RoleLensBanner.tsx        # Dynamic lens switcher banner
│   │   ├── MiniDevinSimulator.tsx    # Live autonomous coding agent simulator
│   │   ├── ArchitectureVisualizer.tsx# Clickable system design & JSON inspector
│   │   ├── ProjectsSection.tsx       # Mini Devin, RAG Chatbot, TrenchSecurity
│   │   ├── ExperienceSection.tsx     # TrenchSecurity internship & SRM education
│   │   ├── SkillsMatrix.tsx          # Filterable & searchable competencies
│   │   ├── ApiPlayground.tsx         # FastAPI Swagger-like REST tester
│   │   ├── AgentCopilotModal.tsx     # Interactive MCP AI copilot drawer
│   │   ├── ResumeModal.tsx           # Printable full CV view
│   │   ├── CommandPalette.tsx        # Cmd+K quick navigation palette
│   │   ├── SocialIcons.tsx           # Pixel-perfect GitHub & LinkedIn SVGs
│   │   └── Footer.tsx                # Direct CTA, copy email, attribution
│   ├── data/
│   │   └── portfolioData.ts          # Centralized config for all text, links, and metrics
│   ├── types/
│   │   └── portfolio.ts              # TypeScript schemas for all data models
│   ├── App.tsx                       # Root view orchestrator
│   ├── index.css                     # Tailwind CSS v4 styling & dark theme
│   └── main.tsx                      # Vite React 19 entry point
├── public/                           # Static assets & favicon
├── package.json
└── vite.config.ts
```

---

## 🚀 How to Run Locally

1. **Navigate to the project directory:**
   ```powershell
   cd D:\jishnu04\jishnu-portfolio
   ```

2. **Start the development server:**
   ```powershell
   pnpm dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production:**
   ```powershell
   pnpm build
   ```

4. **Preview the production build:**
   ```powershell
   pnpm preview
   ```

---

## 📝 How to Update Your Information Later

All personal information, experiences, projects, links, and metrics are cleanly separated in:
`D:\jishnu04\jishnu-portfolio\src\data\portfolioData.ts`

To update your email, GitHub, LinkedIn, or add a new project, simply edit `portfolioData.ts` — no need to touch any UI or styling code!

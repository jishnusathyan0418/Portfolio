import React, { useState } from 'react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { 
  Terminal, 
  ArrowRight, 
  Play, 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  GraduationCap 
} from 'lucide-react'
import confetti from 'canvas-confetti'

interface HeroProps {
  onOpenResumeModal: () => void
  onOpenCopilot: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenCopilot }) => {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopiedEmail(true)
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
    })
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for AI Engineer & Backend Roles (2026)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Autonomous AI Agents
              </span>{' '}
              & Resilient Backend Systems
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> — a Computer Science graduate from <span className="text-blue-400">SRM IST (CGPA 8.49)</span> and former <span className="text-purple-400">TrenchSecurity Research & Developer Intern</span>. I engineer self-healing agentic workflows, production MCP tools, and high-throughput Python backends that bridge LLM intelligence with real-world infrastructure.
            </p>

            {/* Credential Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">SRM IST Chennai</div>
                  <div className="text-sm font-semibold text-white">CGPA: 8.49 / 10</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">TrenchSecurity</div>
                  <div className="text-sm font-semibold text-white">AI Agent Intern</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Specialization</div>
                  <div className="text-sm font-semibold text-white">MCP & Agent Loops</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#mini-devin"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                Test Mini Devin Agent
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                View Full Resume
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs border border-white/10 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Tech Tag Stream */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono overflow-x-auto pb-1">
              <span className="text-slate-500 uppercase font-semibold">Core Stack:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Python</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">MCP Protocol</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">LangChain</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">ChromaDB</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Pytest</span>
            </div>
          </div>

          {/* Right Column: Live Simulated Agent Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0c101a] border border-white/10 shadow-2xl overflow-hidden text-left font-mono">
              {/* Terminal Title Bar */}
              <div className="bg-[#131722] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    jishnu-agent-runtime v1.0.4
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  sandbox: isolated
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3 text-xs leading-relaxed max-h-[380px] overflow-y-auto">
                <div className="text-slate-400">
                  <span className="text-emerald-400">$</span> python3 -m mini_devin.agent --profile jishnu
                </div>

                <div className="p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/20 text-blue-300 space-y-1">
                  <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> [System Initialization]
                  </div>
                  <div>• Candidate: Jishnu Sathyanarayanan</div>
                  <div>• Degree: B.Tech CS (SRM IST, 2026) | CGPA: 8.49</div>
                  <div>• Experience: TrenchSecurity (AI Agent Intern)</div>
                </div>

                <div className="space-y-1 text-slate-300">
                  <div className="text-purple-400 font-semibold">[Agent: MCP Tool Registry Loaded]</div>
                  <div className="text-slate-400 pl-3">
                    ↳ tool: <code className="text-purple-300">query_rag_vector_db(query)</code>
                  </div>
                  <div className="text-slate-400 pl-3">
                    ↳ tool: <code className="text-purple-300">dispatch_slack_teams_webhook()</code>
                  </div>
                  <div className="text-slate-400 pl-3">
                    ↳ tool: <code className="text-purple-300">run_subprocess_pytest()</code>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Autonomous Self-Healing Ready
                  </div>
                  <p className="text-slate-300">
                    Mini Devin agent loop running with continuous AST traceback reflection & automated patch verification.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Latency: 42ms | Memory: 18MB</span>
                  <button
                    onClick={onOpenCopilot}
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center gap-1"
                  >
                    Ask Copilot <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

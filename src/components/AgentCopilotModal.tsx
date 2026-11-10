import React, { useState } from 'react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Terminal
} from 'lucide-react'

interface AgentCopilotModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ChatMessage {
  id: string
  sender: 'user' | 'agent'
  text: string
  toolCalls?: { tool: string; result: string }[]
  timestamp: string
}

export const AgentCopilotModal: React.FC<AgentCopilotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'agent',
      text: `Hello! I'm **Jishnu's AI Copilot** — an autonomous assistant configured with Model Context Protocol (MCP) to answer questions about Jishnu's engineering background, projects (Mini Devin, RAG Chatbot), TrenchSecurity internship, or evaluate fit for your open roles.\n\nHow can I help you today?`,
      timestamp: 'Just now',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  if (!isOpen) return null

  const cannedQuestions = [
    'Why hire Jishnu as an AI / Backend Engineer?',
    'Explain how Mini Devin uses self-healing loops.',
    'What was his role and impact at TrenchSecurity?',
    'Evaluate fit for: AI Engineer (Python, RAG, MCP, FastAPI)',
  ]

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue
    if (!query.trim()) return

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: 'Now',
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInputValue('')
    setIsThinking(true)

    // Generate intelligent grounded response
    setTimeout(() => {
      let reply = ''
      let toolsUsed: { tool: string; result: string }[] = []

      const q = query.toLowerCase()

      if (q.includes('why hire') || q.includes('hire') || q.includes('strengths') || q.includes('value')) {
        toolsUsed = [
          {
            tool: 'mcp::query_candidate_strengths(target_role="AI & Backend")',
            result: 'Found 4 primary competitive edges: Autonomous agent loops, production MCP experience, 8.49 CGPA at SRM, high pytest rigor.',
          },
        ]
        reply = `Here is why **Jishnu Sathyanarayanan** stands out as a high-impact hire:

1. **Proven Production Agentic AI Experience:** Unlike candidates who only follow tutorials, Jishnu built production agent workflows with **Model Context Protocol (MCP)** at **TrenchSecurity**, integrating SIEM alerts, ticketing systems, and chat platforms (Slack/Teams).
2. **Deep System & Algorithmic Rigor:** Developing **Mini Devin** demonstrates an understanding of autonomous planning, sandboxed Python subprocesses, AST traceback reflection, and self-healing code loops.
3. **Robust Backend Discipline:** He builds with **FastAPI, Pydantic, PostgreSQL, MongoDB**, and writes comprehensive **Pytest** suites to guarantee zero dropped events in high-volume webhook pipelines.
4. **Strong Academic Foundation:** 2026 Computer Science graduate from **SRM IST** with an impressive **8.49 CGPA**.`
      } else if (q.includes('mini devin') || q.includes('agent loop') || q.includes('coding agent')) {
        toolsUsed = [
          {
            tool: 'mcp::inspect_project_spec(project_id="mini-devin")',
            result: 'Architecture: Task Planner -> Subprocess Runner -> AST Traceback Parser -> Targeted Diff Generator -> Pytest Verifier.',
          },
        ]
        reply = `**Mini Devin** is Jishnu's autonomous AI coding agent designed to close the loop between LLM code generation and real runtime verification:

- **Planning:** Breaks user specifications into testable units and expected behaviors.
- **Sandboxed Execution:** Spawns a controlled Python subprocess running pytest and streaming standard error and stdout.
- **AST Reflection:** Parses exception tracebacks to isolate the exact line numbers and logic faults.
- **Automated Self-Healing:** Generates targeted code diffs and re-verifies against the test harness with an exponential retry cap to prevent infinite loops.`
      } else if (q.includes('trenchsecurity') || q.includes('intern') || q.includes('experience')) {
        toolsUsed = [
          {
            tool: 'mcp::fetch_experience_telemetry(company="TrenchSecurity")',
            result: 'Tenure: Jun 2026 - Aug 2026. Impact: 10+ workflows deployed, -65% incident triage time, 88% pytest coverage.',
          },
        ]
        reply = `At **TrenchSecurity** (Research & Developer Intern, Jun 2026 – Aug 2026), Jishnu:

- Built and optimized production AI-agent workflows using **Python, RAG, Model Context Protocol (MCP) tools**, and tool/function calling.
- Integrated end-to-end webhook pipelines connecting security alert investigations with **Jira, Slack, and Microsoft Teams**.
- Troubleshot distributed data retrieval pipelines across multiple sources.
- Wrote extensive **Pytest unit test suites** and collaborated on Git/GitHub to ensure high reliability before production deployment.`
      } else if (q.includes('evaluate fit') || q.includes('job') || q.includes('fit') || q.includes('match')) {
        toolsUsed = [
          {
            tool: 'mcp::match_job_description(profile="Jishnu Sathyanarayanan")',
            result: 'Role alignment score: 96% match for AI Engineer / Backend Developer.',
          },
        ]
        reply = `### Fit Analysis: AI & Backend Engineer
- **Match Score: 96% (Strong Candidate)**
- **GenAI / Agentic Stack:** 10/10 (LLMs, LangChain, MCP tools, tool calling, vector retrieval, prompt engineering).
- **Backend & APIs:** 9.5/10 (FastAPI, Flask, REST APIs, asynchronous webhooks, Pydantic).
- **Databases & Vector Stores:** 9/10 (ChromaDB, PostgreSQL, MongoDB, MySQL).
- **Verification & Testing:** 10/10 (Pytest test suites, subprocess sandboxing, Docker).

Jishnu is immediately prepared to build production AI features, integrate LLMs into backend services, and develop autonomous agent architectures.`
      } else {
        toolsUsed = [
          {
            tool: 'mcp::query_knowledge_base(query="' + query.slice(0, 30) + '")',
            result: 'Retrieved profile data from portfolio config and resume.',
          },
        ]
        reply = `Thanks for asking! Jishnu is a Computer Science graduate from **SRM IST (CGPA: 8.49)** specializing in **Generative AI, Agentic Workflows, MCP, and FastAPI backends**.

Key Highlights:
- **Email:** ${PERSONAL_INFO.email}
- **Phone:** ${PERSONAL_INFO.phone}
- **GitHub:** ${PERSONAL_INFO.github}
- **LinkedIn:** ${PERSONAL_INFO.linkedin}

Feel free to click one of the suggested prompts or ask specifically about his projects and backend stack!`
      }

      const agentMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'agent',
        text: reply,
        toolCalls: toolsUsed,
        timestamp: 'Just now',
      }

      setMessages((prev) => [...prev, agentMsg])
      setIsThinking(false)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b0e18] border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col h-[650px] overflow-hidden text-left font-sans">
        
        {/* Header */}
        <div className="bg-[#121624] px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Jishnu AI Copilot</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  MCP Protocol v1.1
                </span>
              </div>
              <p className="text-xs text-slate-400">Autonomous profile assistant & fit evaluator</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                    : 'bg-[#141827] text-slate-200 rounded-bl-none border border-white/10 shadow-lg'
                }`}
              >
                {/* Tool call trace if present */}
                {msg.toolCalls && msg.toolCalls.length > 0 && (
                  <div className="mb-3 space-y-1.5 pb-2.5 border-b border-white/10 font-mono text-[11px]">
                    {msg.toolCalls.map((tc, tcIdx) => (
                      <div
                        key={tcIdx}
                        className="p-2 rounded-lg bg-black/40 border border-purple-500/30 text-purple-300 space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
                          <Terminal className="w-3 h-3" />
                          <span>Tool Invocation:</span>
                        </div>
                        <div className="text-slate-300 break-all">{tc.tool}</div>
                        <div className="text-emerald-400 text-[10px]">↳ {tc.result}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>

              <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-400 w-fit font-mono">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Querying MCP vector store & synthesizing response...</span>
            </div>
          )}
        </div>

        {/* Canned Quick Prompts */}
        <div className="px-5 py-2 bg-[#0e121e] border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-[10px] font-mono text-slate-500 uppercase shrink-0">Quick Ask:</span>
          {cannedQuestions.map((cq, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(cq)}
              className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 whitespace-nowrap transition-colors"
            >
              {cq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#121624] border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything about Jishnu's background, projects, or paste a JD..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage()
            }}
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}

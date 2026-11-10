import React, { useState, useEffect } from 'react'
import type { RoleLens } from '../types/portfolio'
import { PERSONAL_INFO } from '../data/portfolioData'
import { 
  Search, 
  Terminal, 
  Code2, 
  Layers, 
  Briefcase, 
  Bot, 
  Server, 
  Target, 
  FileText, 
  Mail, 
  Sparkles, 
  ArrowRight
} from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  onLensChange: (lens: RoleLens) => void
  onOpenCopilot: () => void
  onOpenResumeModal: () => void
}

interface CommandItem {
  id: string
  title: string
  subtitle: string
  category: 'Navigation' | 'Lens' | 'Action'
  icon: React.ReactNode
  action: () => void
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onLensChange,
  onOpenCopilot,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const commands: CommandItem[] = [
    {
      id: 'cmd-mini-devin',
      title: 'Run Mini Devin Agent Simulator',
      subtitle: 'Experience autonomous self-healing code loops & pytest verification',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose()
        window.location.hash = '#mini-devin'
      },
    },
    {
      id: 'cmd-architecture',
      title: 'Explore System Design & Architecture',
      subtitle: 'Inspect TrenchSecurity MCP pipeline and RAG vector search',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose()
        window.location.hash = '#architecture'
      },
    },
    {
      id: 'cmd-projects',
      title: 'View Engineering Projects',
      subtitle: 'Mini Devin, PDF RAG Chatbot, TrenchSecurity incident response',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose()
        window.location.hash = '#projects'
      },
    },
    {
      id: 'cmd-api-playground',
      title: 'FastAPI Interactive REST Sandbox',
      subtitle: 'Send mock HTTP requests to test agent and RAG endpoints',
      category: 'Navigation',
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose()
        window.location.hash = '#api-playground'
      },
    },
    {
      id: 'cmd-experience',
      title: 'View TrenchSecurity Experience',
      subtitle: 'Research & Developer Intern (MCP, RAG, Webhooks, Pytest)',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose()
        window.location.hash = '#experience'
      },
    },
    {
      id: 'cmd-copilot',
      title: 'Ask Jishnu AI Copilot',
      subtitle: 'Query candidate fit, MCP workflows, or ask anything',
      category: 'Action',
      icon: <Bot className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose()
        onOpenCopilot()
      },
    },
    {
      id: 'cmd-resume',
      title: 'View / Print Resume',
      subtitle: 'Open full verified CV with education (SRM 8.49 CGPA)',
      category: 'Action',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose()
        onOpenResumeModal()
      },
    },
    {
      id: 'cmd-lens-agentic',
      title: 'Switch Lens: Agentic AI & LLMs',
      subtitle: 'Prioritize autonomous loops, MCP tools, and vector stores',
      category: 'Lens',
      icon: <Sparkles className="w-4 h-4 text-blue-400" />,
      action: () => {
        onLensChange('agentic')
        onClose()
      },
    },
    {
      id: 'cmd-lens-backend',
      title: 'Switch Lens: Backend & APIs',
      subtitle: 'Prioritize FastAPI, webhooks, databases, and pytest',
      category: 'Lens',
      icon: <Server className="w-4 h-4 text-purple-400" />,
      action: () => {
        onLensChange('backend')
        onClose()
      },
    },
    {
      id: 'cmd-lens-recruiter',
      title: 'Switch Lens: Recruiter Quick Match',
      subtitle: 'Executive summary & key candidate qualifications',
      category: 'Lens',
      icon: <Target className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onLensChange('recruiter')
        onClose()
      },
    },
    {
      id: 'cmd-copy-email',
      title: `Copy Email: ${PERSONAL_INFO.email}`,
      subtitle: 'Direct communication link',
      category: 'Action',
      icon: <Mail className="w-4 h-4 text-slate-300" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email)
        onClose()
      },
    },
  ]

  const filtered = commands.filter((c) =>
    `${c.title} ${c.subtitle} ${c.category}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#0e121e] border border-white/10 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden text-left font-sans">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-[#141828] border-b border-white/10 flex items-center gap-3">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search commands, projects, architectures, lenses (e.g. 'Devin', 'FastAPI')..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            autoFocus
            className="flex-1 bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-slate-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full p-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between group transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {item.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#090b12] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Press ESC to dismiss</span>
          <span>Antigravity Command Engine</span>
        </div>

      </div>
    </div>
  )
}

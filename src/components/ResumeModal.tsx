import React from 'react'
import { PERSONAL_INFO, EXPERIENCE, PROJECTS } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  GraduationCap
} from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e121d] border border-white/10 w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-left">
        
        {/* Header Bar */}
        <div className="bg-[#131724] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400 font-mono">
                Jishnu Sathyanarayanan • B.Tech CS (SRM IST, 2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 font-sans leading-relaxed bg-[#0b0e18]">
          
          {/* Header Info */}
          <div className="text-center pb-6 border-b border-white/10 space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm text-blue-400 font-mono">
              AI Engineer • Agentic Systems Developer • Backend Architect
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-white">{PERSONAL_INFO.education.institution}</span>
                <div className="text-slate-400">{PERSONAL_INFO.education.degree}</div>
              </div>
              <div className="text-right sm:text-right font-mono text-xs text-slate-400 mt-1 sm:mt-0">
                <div>{PERSONAL_INFO.education.timeline}</div>
                <div className="text-emerald-400 font-semibold">CGPA: {PERSONAL_INFO.education.cgpa}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Technical Skills
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-white">Languages:</strong> Python, JavaScript, TypeScript, SQL
              </div>
              <div>
                <strong className="text-white">GenAI & Agentic AI:</strong> LLMs, Generative AI, RAG, Prompt Engineering, Agentic AI Loops, LangChain, MCP (Model Context Protocol), Tool/Function Calling, Embeddings, Vector Retrieval
              </div>
              <div>
                <strong className="text-white">Backend & APIs:</strong> FastAPI, Flask, REST APIs, Webhook Integrations, Pydantic, Pytest
              </div>
              <div>
                <strong className="text-white">Vector & Relational DBs:</strong> ChromaDB, PostgreSQL, MongoDB, MySQL
              </div>
              <div>
                <strong className="text-white">Developer Tools:</strong> Git, GitHub, Docker (Basic), Postman, VS Code, Codex, Claude Code
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Work Experience
            </h4>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div className="font-bold text-white">
                    {exp.role} — <span className="text-emerald-400">{exp.company}</span>
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    {exp.period} | {exp.location}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Key Projects
            </h4>
            {PROJECTS.map((proj, pIdx) => (
              <div key={pIdx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div className="font-bold text-white">
                    {proj.title}
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    {proj.period}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Stack: {proj.tags.join(', ')}
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                  {proj.description.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#121624] px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Available immediately for 2026 roles</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}

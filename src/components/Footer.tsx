import React, { useState } from 'react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUp, 
  FileText 
} from 'lucide-react'

interface FooterProps {
  onOpenResumeModal: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#06080d] border-t border-white/10 pt-20 pb-12 overflow-hidden text-left">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Immediate Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Engineer the Next Generation of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Agentic Systems
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need autonomous AI agents with Model Context Protocol, reliable FastAPI webhook architectures, or high-dimensional RAG pipelines — I'm ready to build with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email Directly</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 font-mono text-xs border border-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/10">
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">{PERSONAL_INFO.name}</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                2026 CS Grad • CGPA 8.49
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              AI Engineer & Backend Architect. Former Research & Developer Intern at TrenchSecurity. Built with verification-first discipline.
            </p>
          </div>

          <div className="md:col-span-6 flex items-center md:justify-end gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Phone Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Jishnu Sathyanarayanan. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19, Vite, Tailwind CSS v4 & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

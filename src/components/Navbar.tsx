import React, { useState, useEffect } from 'react'
import type { RoleLens } from '../types/portfolio'
import { PERSONAL_INFO } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { 
  Bot, 
  Server, 
  Terminal, 
  FileText, 
  Search, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react'

interface NavbarProps {
  currentLens: RoleLens
  onLensChange: (lens: RoleLens) => void
  onOpenCommandPalette: () => void
  onOpenCopilot: () => void
  onOpenResumeModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLens,
  onLensChange,
  onOpenCommandPalette,
  onOpenCopilot,
  onOpenResumeModal,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Online Status */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0d1017] rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 text-base">
                  JS
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-white tracking-tight flex items-center gap-2 text-sm sm:text-base">
                  Jishnu S.
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                    Online
                  </span>
                </span>
                <span className="text-xs text-slate-400 hidden sm:block font-mono">
                  Agentic AI & Backend Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121624]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <a
              href="#mini-devin"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              Mini Devin Demo
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              Projects
            </a>
            <a
              href="#architecture"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              System Design
            </a>
            <a
              href="#experience"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              Skills
            </a>
            <a
              href="#api-playground"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              API Sandbox
            </a>
          </nav>

          {/* Actions & Role Lens Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              title="Command Palette (Ctrl+K)"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs border border-white/10 transition-colors font-mono"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-slate-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* AI Copilot Button */}
            <button
              onClick={onOpenCopilot}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-medium shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ask</span> AI Copilot
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/95 border-b border-white/10 px-4 pt-3 pb-5 space-y-3 mt-2 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <button
              onClick={() => {
                onLensChange('agentic')
                setMobileMenuOpen(false)
              }}
              className={`p-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 ${
                currentLens === 'agentic'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-slate-300'
              }`}
            >
              <Bot className="w-3.5 h-3.5" /> Agentic AI
            </button>
            <button
              onClick={() => {
                onLensChange('backend')
                setMobileMenuOpen(false)
              }}
              className={`p-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 ${
                currentLens === 'backend'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-slate-300'
              }`}
            >
              <Server className="w-3.5 h-3.5" /> Backend
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-left">
            <a
              href="#mini-devin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              Mini Devin Agent Demo
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Projects
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              System Design & Architecture
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Work Experience (TrenchSecurity)
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Skills Matrix
            </a>
            <a
              href="#api-playground"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              REST API Sandbox
            </a>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                onOpenResumeModal()
                setMobileMenuOpen(false)
              }}
              className="px-3 py-2 rounded-lg bg-white/10 text-xs font-medium text-white flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

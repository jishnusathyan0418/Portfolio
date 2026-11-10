import React, { useState } from 'react'
import { SKILL_CATEGORIES } from '../data/portfolioData'
import { 
  Bot, 
  Server, 
  Database, 
  Code2, 
  Cpu, 
  Check, 
  Sparkles, 
  Search
} from 'lucide-react'

export const SkillsMatrix: React.FC = () => {
  const [filterTag, setFilterTag] = useState<'all' | 'ai' | 'backend' | 'core'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-blue-400" />
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />
    }
  }

  return (
    <section id="skills" className="py-24 relative bg-[#090b12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Skills Matrix
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Specialized in autonomous LLM agent architectures, Model Context Protocol, and high-performance backend pipelines.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#0e121d] border border-white/10">
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterTag('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterTag === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilterTag('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterTag === 'ai'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              GenAI & Agentic
            </button>
            <button
              onClick={() => setFilterTag('backend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterTag === 'backend'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Backend & APIs
            </button>
            <button
              onClick={() => setFilterTag('core')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterTag === 'core'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Languages & Tools
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. MCP, FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) => {
              const matchesFilter = filterTag === 'all' || s.categoryTag === filterTag
              const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase())
              return matchesFilter && matchesSearch
            })

            if (filteredSkills.length === 0) return null

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0e121d] border border-white/10 text-left space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {filteredSkills.length} competencies
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {filteredSkills.map((sk, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                          sk.highlight
                            ? 'bg-blue-500/15 border border-blue-500/30 text-blue-200 font-semibold shadow-sm'
                            : 'bg-white/5 border border-white/5 text-slate-300'
                        }`}
                      >
                        {sk.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        )}
                        <span>{sk.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          [{sk.level}]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Tested & Production Verified</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

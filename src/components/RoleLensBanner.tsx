import React from 'react'
import type { RoleLens } from '../types/portfolio'
import { ROLE_LENS_CONFIG } from '../data/portfolioData'
import { Bot, Server, Target, Sparkles, CheckCircle2 } from 'lucide-react'

interface RoleLensBannerProps {
  currentLens: RoleLens
  onLensChange: (lens: RoleLens) => void
}

export const RoleLensBanner: React.FC<RoleLensBannerProps> = ({ currentLens, onLensChange }) => {
  const currentConfig = ROLE_LENS_CONFIG[currentLens]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-6">
      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="bg-[#0b0e17]/90 rounded-[14px] p-4 sm:p-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Header info */}
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                {currentLens === 'agentic' && <Bot className="w-5 h-5 animate-pulse" />}
                {currentLens === 'backend' && <Server className="w-5 h-5 animate-pulse" />}
                {currentLens === 'recruiter' && <Target className="w-5 h-5 animate-pulse" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                    Interactive Portfolio Lens
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Customized View
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                  {currentConfig.description}
                </p>
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#121624] rounded-xl border border-white/10 w-full md:w-auto justify-center">
              <button
                onClick={() => onLensChange('agentic')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  currentLens === 'agentic'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Agentic AI</span>
              </button>

              <button
                onClick={() => onLensChange('backend')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  currentLens === 'backend'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>Backend / API</span>
              </button>

              <button
                onClick={() => onLensChange('recruiter')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  currentLens === 'recruiter'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Recruiter View</span>
              </button>
            </div>
          </div>

          {/* Quick Focus Pills */}
          <div className="mt-3.5 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Highlighted Assets:
            </span>
            {currentConfig.primaryFocus.map((focusItem, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {focusItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

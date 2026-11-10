import React from 'react'
import { PROJECTS } from '../data/portfolioData'
import type { RoleLens } from '../types/portfolio'
import { GithubIcon } from './SocialIcons'
import { 
  ExternalLink, 
  Terminal, 
  Layers, 
  Code2
} from 'lucide-react'

interface ProjectsSectionProps {
  currentLens: RoleLens
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLens }) => {
  // Sort projects according to current role lens relevance
  const sortedProjects = [...PROJECTS].sort((a, b) => {
    return b.lensRelevance[currentLens] - a.lensRelevance[currentLens]
  })

  return (
    <section id="projects" className="py-24 relative bg-[#090b13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production & Autonomous{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              AI Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From self-healing code generation loops to production security agent workflows with Model Context Protocol (MCP) and ChromaDB vector retrieval.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 space-y-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0e121d] border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 text-left group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-mono font-medium ${
                        project.status === 'Production / Live'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30 animate-pulse'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      ● {project.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{project.period}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-medium leading-relaxed">
                    {project.subtitle}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Cloud Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        View Source
                      </a>
                    )}

                    {project.id === 'mini-devin' && (
                      <a
                        href="#mini-devin"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30 transition-colors"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        Interactive Sandbox
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architectural Highlights Card */}
                <div className="lg:col-span-5 bg-[#121625] rounded-2xl border border-white/10 p-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider pb-2 border-b border-white/10">
                    <Layers className="w-4 h-4" />
                    <span>System Architecture Highlights</span>
                  </div>

                  <div className="space-y-3">
                    {project.architectureHighlights.map((hl, hlIdx) => (
                      <div
                        key={hlIdx}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-mono mt-0.5">
                          {hlIdx + 1}
                        </div>
                        <span className="text-xs text-slate-300 font-medium">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
                    <span>Recruiter Verification:</span>
                    <span className="font-mono text-emerald-400 font-semibold">100% Tested</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData'
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award
} from 'lucide-react'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#080a11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Production Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Education
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hands-on engineering in security automation, production AI workflows, and strong academic foundations in Computer Science.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-14 max-w-5xl mx-auto space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0d111c] border border-white/10 shadow-xl text-left space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1.5">
                    {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Quantifiable Impact Metrics Ribbon */}
              {exp.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                  {exp.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center space-y-1"
                    >
                      <div className="text-xl sm:text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Accomplishments & Systems Built:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0d111c] border border-white/10 shadow-xl text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      B.Tech Computer Science
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {PERSONAL_INFO.education.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {PERSONAL_INFO.education.institution}
                  </h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-xl border border-blue-500/30 text-right">
                <div className="text-xs text-blue-300 font-mono">Cumulative Grade</div>
                <div className="text-lg font-mono font-bold text-white">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.education.honors}</span>
              </div>
              <div className="font-mono text-slate-400">
                Core Coursework: Operating Systems, Distributed Systems, Data Structures & Algorithms, DBMS, ML/AI
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

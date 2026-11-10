import React, { useState } from 'react'
import { ARCHITECTURE_SYSTEMS } from '../data/portfolioData'
import { 
  Layers, 
  ChevronRight, 
  Cpu, 
  FileJson,
  Zap,
  Clock
} from 'lucide-react'

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedSystemIndex, setSelectedSystemIndex] = useState<number>(0)
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0)

  const currentSystem = ARCHITECTURE_SYSTEMS[selectedSystemIndex]
  const activeNode = currentSystem.nodes[activeNodeIndex] || currentSystem.nodes[0]

  return (
    <section id="architecture" className="py-24 relative bg-[#08090f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Backend & Agent Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production System{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
              Design & Pipelines
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore the data pipelines, MCP tool calling schemas, and asynchronous event architectures I've designed and put into production.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {ARCHITECTURE_SYSTEMS.map((sys, idx) => (
            <button
              key={sys.id}
              onClick={() => {
                setSelectedSystemIndex(idx)
                setActiveNodeIndex(0)
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                selectedSystemIndex === idx
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{sys.title.split('—')[0]}</span>
            </button>
          ))}
        </div>

        {/* Architecture Layout */}
        <div className="mt-10 bg-[#0d101a] rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8">
          
          <div className="text-left space-y-2 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {currentSystem.category}
              </span>
              <h3 className="text-xl font-bold text-white">{currentSystem.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">{currentSystem.description}</p>
          </div>

          {/* Interactive Pipeline Nodes (Flowchart) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {currentSystem.nodes.map((node, idx) => {
              const isSelected = idx === activeNodeIndex
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all relative ${
                    isSelected
                      ? 'bg-gradient-to-b from-purple-600/20 to-indigo-600/10 border-purple-500/50 shadow-xl shadow-purple-500/15 scale-[1.02]'
                      : 'bg-[#121624] border-white/5 hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      Phase {idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-purple-400">
                      {node.type}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center justify-between">
                    <span>{node.title}</span>
                    {isSelected && <Zap className="w-3.5 h-3.5 text-purple-400 animate-bounce" />}
                  </h4>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {node.detail}
                  </p>

                  {/* Flow connector indicator for desktop */}
                  {idx < currentSystem.nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6 h-6 rounded-full bg-[#1b2030] border border-white/20 flex items-center justify-center text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Node Inspector Drawer */}
          <div className="bg-[#090b12] rounded-2xl border border-white/10 p-5 sm:p-6 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileJson className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  Telemetry Payload & Schema Inspector: {activeNode.title}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Pipeline Processing: &lt; 45ms
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                  Architectural Rationale
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeNode.detail}
                </p>
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 space-y-1">
                  <div className="font-semibold text-purple-200">Production Reliability:</div>
                  <div>• Validated with Pydantic type safety</div>
                  <div>• Non-blocking asynchronous I/O via FastAPI</div>
                  <div>• Full retry telemetry captured for alerting</div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span>Simulated Payload (JSON)</span>
                  <span className="text-[11px] text-slate-500 font-mono">application/json</span>
                </div>
                <pre className="p-4 rounded-xl bg-black/80 border border-white/10 text-emerald-400 font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed">
                  {activeNode.samplePayload}
                </pre>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

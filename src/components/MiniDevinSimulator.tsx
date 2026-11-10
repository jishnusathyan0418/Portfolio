import React, { useState, useEffect } from 'react'
import { SIMULATION_CHALLENGES } from '../data/portfolioData'
import type { SimulationChallenge } from '../types/portfolio'
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal, 
  FileCode, 
  Brain, 
  SearchCheck, 
  ShieldCheck, 
  Zap, 
  Volume2, 
  VolumeX 
} from 'lucide-react'
import confetti from 'canvas-confetti'

export const MiniDevinSimulator: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<SimulationChallenge>(SIMULATION_CHALLENGES[0])
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<'terminal' | 'diff' | 'code'>('terminal')
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true)

  // Reset step index when challenge changes
  const handleSelectChallenge = (ch: SimulationChallenge) => {
    setSelectedChallenge(ch)
    setCurrentStepIndex(0)
    setIsRunning(false)
  }

  // Play subtle mechanical sound if enabled
  const playBeep = (freq = 440, type: OscillatorType = 'sine', duration = 0.08) => {
    if (!soundEnabled) return
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.value = freq
      gain.gain.value = 0.04
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch {
      // Audio context might be restricted before user interaction
    }
  }

  // Autonomous playback loop
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (isRunning) {
      if (currentStepIndex < selectedChallenge.steps.length - 1) {
        timer = setTimeout(() => {
          setCurrentStepIndex((prev) => {
            const next = prev + 1
            playBeep(next === selectedChallenge.steps.length - 1 ? 660 : 380, 'sine')
            // Switch tabs dynamically to highlight action
            if (next === 1) setActiveTab('code')
            if (next === 2) setActiveTab('terminal')
            if (next === 3) setActiveTab('diff')
            if (next === 4) {
              setActiveTab('terminal')
              confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.7 },
              })
            }
            return next
          })
        }, 1800)
      } else {
        setIsRunning(false)
      }
    }
    return () => clearTimeout(timer)
  }, [isRunning, currentStepIndex, selectedChallenge, soundEnabled])

  const handleStartRun = () => {
    setCurrentStepIndex(0)
    setIsRunning(true)
    playBeep(520, 'square')
  }

  const handleReset = () => {
    setIsRunning(false)
    setCurrentStepIndex(0)
    setActiveTab('terminal')
  }

  const currentStep = selectedChallenge.steps[currentStepIndex]
  const isComplete = currentStepIndex === selectedChallenge.steps.length - 1

  return (
    <section id="mini-devin" className="py-24 relative overflow-hidden bg-[#090b12]">
      {/* Background neon accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Autonomous Agent Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Mini Devin in Action:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Self-Healing Loop
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Witness how Mini Devin takes a failing programming challenge, plans its approach, runs tests in a sandboxed subprocess, diagnoses stacktraces, and automatically generates verifiable self-healing patches.
          </p>
        </div>

        {/* Controls Bar: Challenge Selector & Actions */}
        <div className="mt-10 p-3 sm:p-4 rounded-2xl bg-[#0e121d] border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Challenge Selector Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">Select Challenge:</span>
            {SIMULATION_CHALLENGES.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleSelectChallenge(ch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedChallenge.id === ch.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {ch.title.split('(')[0]}
              </button>
            ))}
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={handleReset}
              disabled={isRunning}
              className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors flex items-center gap-1.5 disabled:opacity-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>

            <button
              onClick={handleStartRun}
              disabled={isRunning}
              className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
                isRunning
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 cursor-wait'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-white'}`} />
              <span>{isRunning ? 'Agent Thinking & Executing...' : isComplete ? 'Re-run Agent Loop' : 'Run Autonomous Loop'}</span>
            </button>
          </div>
        </div>

        {/* Simulator Main Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: 5-Stage Agent Execution Pipeline */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-1 flex items-center justify-between">
              <span>Agentic Lifecycle Telemetry</span>
              <span className="text-blue-400 font-medium">Step {currentStepIndex + 1} of {selectedChallenge.steps.length}</span>
            </div>

            <div className="space-y-2.5">
              {selectedChallenge.steps.map((st, idx) => {
                const isActive = idx === currentStepIndex
                const isPassed = idx < currentStepIndex
                const isPending = idx > currentStepIndex

                return (
                  <div
                    key={st.step}
                    onClick={() => {
                      if (!isRunning) setCurrentStepIndex(idx)
                    }}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      isActive
                        ? 'bg-blue-500/10 border-blue-500/40 shadow-lg shadow-blue-500/10 scale-[1.01]'
                        : isPassed
                        ? 'bg-[#0f1320] border-emerald-500/20 text-slate-300'
                        : 'bg-[#0b0e17]/60 border-white/5 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                            isActive
                              ? 'bg-blue-600 text-white animate-pulse'
                              : isPassed
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-white/10 text-slate-400'
                          }`}
                        >
                          {st.step}
                        </div>
                        <span className="text-xs font-semibold text-white">
                          {st.title}
                        </span>
                      </div>

                      <div>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 animate-pulse">
                            Active
                          </span>
                        )}
                        {isPassed && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                        {isPending && (
                          <span className="text-[10px] font-mono text-slate-500">Queued</span>
                        )}
                      </div>
                    </div>

                    <p className="mt-2 text-xs text-slate-300 leading-normal pl-8">
                      {st.content}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Verification Banner */}
            {isComplete && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 text-left space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Pytest Verification Passed (100% Green)</span>
                </div>
                <p className="text-xs text-slate-300">
                  Mini Devin isolated the bug, synthesized the patch via AST reflection, and confirmed full test pass in 1 iteration without human intervention.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Code, Diff & Live Terminal Console */}
          <div className="lg:col-span-7 bg-[#0b0e18] rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-left flex flex-col h-[560px]">
            
            {/* View Switcher Tabs */}
            <div className="bg-[#121624] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === 'terminal'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Subprocess Runner</span>
                </button>

                <button
                  onClick={() => setActiveTab('diff')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === 'diff'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <SearchCheck className="w-3.5 h-3.5" />
                  <span>Self-Healing Diff</span>
                </button>

                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === 'code'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Target Code</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>groq-lpu: 18ms</span>
              </div>
            </div>

            {/* Display Body */}
            <div className="p-4 sm:p-5 flex-1 overflow-y-auto font-mono text-xs leading-relaxed">
              
              {/* TAB 1: TERMINAL OUTPUT */}
              {activeTab === 'terminal' && (
                <div className="space-y-3">
                  <div className="text-slate-500">
                    # Simulated Subprocess Environment (Python 3.11 / Pytest 8.2)
                  </div>
                  <div className="text-blue-400">
                    &gt; [TASK] {selectedChallenge.description}
                  </div>

                  {currentStep.terminalOutput ? (
                    <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-slate-200 overflow-x-auto whitespace-pre-wrap leading-5">
                      {currentStep.terminalOutput}
                    </pre>
                  ) : (
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-slate-400 space-y-2">
                      <div className="flex items-center gap-2 text-blue-300">
                        <Brain className="w-4 h-4 animate-spin" />
                        <span>Mini Devin is formulating the step execution plan...</span>
                      </div>
                      <p className="text-slate-500">
                        Click "Run Autonomous Loop" above to watch the agent execute test cases, capture stacktraces, and patch itself in real-time.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: SELF-HEALING DIFF */}
              {activeTab === 'diff' && (
                <div className="space-y-3">
                  <div className="text-slate-400 text-xs flex items-center justify-between">
                    <span>AST Diff Patch Generator</span>
                    <span className="text-emerald-400 font-semibold">Target: cache_impl.py</span>
                  </div>

                  {currentStep.diff ? (
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1">
                          - Removed Fragile Implementation
                        </div>
                        <pre className="whitespace-pre-wrap">{currentStep.diff.removed}</pre>
                      </div>

                      <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                          + Injected Self-Healing Fix
                        </div>
                        <pre className="whitespace-pre-wrap">{currentStep.diff.added}</pre>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-slate-500">
                      Run the simulation to Step 4 to inspect the autonomous AST diff generation.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: CODE VIEW */}
              {activeTab === 'code' && (
                <div className="space-y-2">
                  <div className="text-slate-400 flex items-center justify-between text-xs pb-1 border-b border-white/10">
                    <span>{isComplete ? 'Patched & Verified Code' : 'Initial Draft Code'}</span>
                    <span className="text-blue-400">Python 3</span>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-emerald-300 overflow-x-auto whitespace-pre leading-5">
                    {isComplete ? selectedChallenge.fixedCode : selectedChallenge.initialCode}
                  </pre>
                </div>
              )}

            </div>

            {/* Bottom Status bar */}
            <div className="bg-[#0e121e] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span>Model: Groq Llama-3-70b</span>
                <span>Subprocess: isolated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Status:</span>
                <span className={isComplete ? 'text-emerald-400 font-semibold' : 'text-blue-400'}>
                  {isComplete ? 'VERIFIED_PASS' : isRunning ? 'ITERATING...' : 'READY'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

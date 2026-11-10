import { useState } from 'react'
import type { RoleLens } from './types/portfolio'
import { Navbar } from './components/Navbar'
import { RoleLensBanner } from './components/RoleLensBanner'
import { Hero } from './components/Hero'
import { MiniDevinSimulator } from './components/MiniDevinSimulator'
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsMatrix } from './components/SkillsMatrix'
import { ApiPlayground } from './components/ApiPlayground'
import { Footer } from './components/Footer'
import { CommandPalette } from './components/CommandPalette'
import { AgentCopilotModal } from './components/AgentCopilotModal'
import { ResumeModal } from './components/ResumeModal'

export function App() {
  const [currentLens, setCurrentLens] = useState<RoleLens>('agentic')
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isCopilotOpen, setIsCopilotOpen] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Navbar */}
      <Navbar
        currentLens={currentLens}
        onLensChange={setCurrentLens}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main className="relative">
        {/* Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCopilot={() => setIsCopilotOpen(true)}
        />

        {/* Role Lens Interactive Selector Banner */}
        <RoleLensBanner
          currentLens={currentLens}
          onLensChange={setCurrentLens}
        />

        {/* Star Interactive Feature: Mini Devin Agent Sandbox */}
        <MiniDevinSimulator />

        {/* Featured Projects Section */}
        <ProjectsSection currentLens={currentLens} />

        {/* System Design & Architecture Visualizer */}
        <ArchitectureVisualizer />

        {/* Work Experience & Education */}
        <ExperienceSection />

        {/* Comprehensive Skills Matrix with Search */}
        <SkillsMatrix />

        {/* FastAPI Swagger REST Sandbox */}
        <ApiPlayground />
      </main>

      {/* Footer & Direct Contact */}
      <Footer
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onLensChange={setCurrentLens}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <AgentCopilotModal
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}

export default App

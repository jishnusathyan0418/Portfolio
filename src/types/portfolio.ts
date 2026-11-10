export type RoleLens = 'agentic' | 'backend' | 'recruiter'

export interface Project {
  id: string
  title: string
  subtitle: string
  status: 'In Progress' | 'Production / Live' | 'Completed'
  period: string
  tags: string[]
  description: string[]
  architectureHighlights: string[]
  liveUrl?: string
  githubUrl?: string
  lensRelevance: {
    agentic: number // 1-10
    backend: number
    recruiter: number
  }
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  type: string
  highlights: string[]
  technologies: string[]
  metrics?: { label: string; value: string }[]
}

export interface SkillCategory {
  title: string
  icon: string
  skills: {
    name: string
    level: 'Expert' | 'Proficient' | 'Familiar'
    highlight?: boolean
    categoryTag: 'ai' | 'backend' | 'core'
  }[]
}

export interface AgentSimulationStep {
  step: number
  title: string
  type: 'thought' | 'tool_call' | 'execution' | 'reflection' | 'verification'
  icon: string
  content: string
  codeSnippet?: string
  terminalOutput?: string
  diff?: {
    file: string
    removed: string
    added: string
  }
  status: 'pending' | 'active' | 'success' | 'healing'
}

export interface SimulationChallenge {
  id: string
  title: string
  difficulty: 'Medium' | 'Hard'
  category: string
  description: string
  initialCode: string
  fixedCode: string
  steps: AgentSimulationStep[]
}

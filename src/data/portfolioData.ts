import type { Project, Experience, SkillCategory, SimulationChallenge, RoleLens } from '../types/portfolio'

export const PERSONAL_INFO = {
  name: 'Jishnu Sathyanarayanan',
  tagline: 'AI Engineer • Agentic Systems Developer • Backend Architect',
  location: 'Chennai, India',
  email: 'jishnusathyanarayanan@gmail.com',
  phone: '+91 8547333849',
  linkedin: 'https://linkedin.com/in/jishnu-sathyanarayanan-01a8a5252',
  github: 'https://github.com/jishnusathyan0418',
  status: 'Open to AI Engineer, Backend & Agentic Roles (2026 Grad)',
  education: {
    institution: 'SRM Institute of Science and Technology, Chennai',
    degree: 'Bachelor of Technology in Computer Science',
    timeline: 'Aug 2022 - May 2026',
    cgpa: '8.49 / 10.0',
    honors: 'Consistent High Academic Distinction',
  },
  bio: `2026 Computer Science graduate with hands-on experience building production Generative AI and agentic AI systems using Python, LLMs, RAG, LangChain, MCP (Model Context Protocol), tool/function calling, and vector retrieval. Experienced in engineering reliable AI-enabled backend workflows with FastAPI/Flask, connecting LLM agents to external APIs and webhooks, and implementing autonomous verification-driven code loops.`,
}

export const ROLE_LENS_CONFIG: Record<
  RoleLens,
  {
    title: string
    description: string
    primaryFocus: string[]
    badge: string
  }
> = {
  agentic: {
    title: 'Agentic AI & LLMs Lens',
    description:
      'Highlighting autonomous agent loops, Model Context Protocol (MCP), tool/function calling, RAG pipelines, and self-healing systems.',
    primaryFocus: ['Mini Devin Loop', 'MCP Server Integrations', 'RAG Embeddings', 'ChromaDB', 'LangChain'],
    badge: '🤖 Focus: Agentic AI & Autonomous Systems',
  },
  backend: {
    title: 'Backend & Systems Lens',
    description:
      'Highlighting robust REST APIs, FastAPI/Flask backends, async webhook integrations, database schemas, and automated pytest pipelines.',
    primaryFocus: ['FastAPI / Flask', 'PostgreSQL & MongoDB', 'Webhook Reliability', 'Pytest Suites', 'Docker'],
    badge: '⚡ Focus: Backend Engineering & API Systems',
  },
  recruiter: {
    title: 'Recruiter Quick Scan',
    description:
      'Executive summary of qualifications, 2026 graduation status, CGPA 8.49, internship at TrenchSecurity, and proven production impact.',
    primaryFocus: ['SRM B.Tech 2026 (8.49 CGPA)', 'TrenchSecurity Intern', 'Python / GenAI / APIs', 'Immediate Availability'],
    badge: '🎯 Focus: Candidate Snapshot & Impact Metrics',
  },
}

export const PROJECTS: Project[] = [
  {
    id: 'mini-devin',
    title: 'Mini Devin — Autonomous AI Coding Agent',
    subtitle: 'Self-healing agent loop that plans, generates code, runs sub-processes, inspects stacktraces, and iteratively auto-fixes bugs.',
    status: 'In Progress',
    period: 'Oct 2026 - Present',
    tags: ['Python', 'Agentic AI', 'LLMs', 'Groq LPU', 'Subprocess Sandbox', 'Pytest', 'AST Parsing'],
    description: [
      'Engineered an autonomous coding agent taking multi-step software tasks and decomposing them into plan-execute-verify cycles.',
      'Constructed a sandboxed execution harness using Python subprocesses to run test suites and capture raw stderr/stdout.',
      'Implemented an AST-driven reflection agent that parses traceback exceptions, formulates targeted patches, and re-executes tests with strict retry limits to prevent infinite recursion.',
      'Benchmarked with Groq ultra-low-latency inference to achieve real-time autonomous code debugging loops under 2.5 seconds per iteration.',
    ],
    architectureHighlights: [
      'Task Decomposition & Intent Formulation Agent',
      'Sandboxed Subprocess Execution Environment',
      'Stacktrace Parser & Targeted Diff Synthesizer',
      'Self-Healing Loop with Exponential Retry Cap',
    ],
    githubUrl: 'https://github.com/jishnusathyan0418',
    lensRelevance: {
      agentic: 10,
      backend: 9,
      recruiter: 10,
    },
  },
  {
    id: 'pdf-summarizer-rag',
    title: 'AI-Powered PDF Summariser & Conversational RAG Engine',
    subtitle: 'End-to-end grounded document intelligence application with semantic chunking, Chroma vector retrieval, and conversational memory.',
    status: 'Production / Live',
    period: 'May 2026',
    tags: ['Python', 'RAG', 'LangChain', 'ChromaDB', 'Vector Embeddings', 'FastAPI', 'Render Cloud'],
    description: [
      'Architected an end-to-end web application allowing users to upload dense multi-page PDFs and perform low-hallucination conversational QA.',
      'Engineered a deterministic ingestion pipeline utilizing recursive character chunking, token boundary management, and high-dimensional semantic vector embeddings.',
      'Integrated ChromaDB vector store with cosine similarity thresholding and negative-sampling filters to ground responses strictly on source documents.',
      'Deployed on Render cloud infrastructure with optimized memory consumption for vector index caching.',
    ],
    architectureHighlights: [
      'Recursive Chunking & Token-Aware Splitting',
      'ChromaDB Vector Retrieval with Cosine Similarity',
      'Grounding Guardrails to Eliminating Unsupported Hallucinations',
      'Interactive Chat Session Memory Store',
    ],
    liveUrl: 'https://ai-powered-pdf-summarizer-chatbot-1.onrender.com',
    githubUrl: 'https://github.com/jishnusathyan0418',
    lensRelevance: {
      agentic: 9,
      backend: 9,
      recruiter: 10,
    },
  },
  {
    id: 'trenchsecurity-agents',
    title: 'Enterprise Incident Response Agentic Workflows',
    subtitle: 'Production webhook and MCP tool pipeline connecting security alerts with automated triage, ticketing, and team collaboration.',
    status: 'Completed',
    period: 'Jun 2026 - Aug 2026',
    tags: ['Python', 'MCP Tools', 'Tool/Function Calling', 'FastAPI', 'Webhooks', 'Slack / Teams APIs', 'Pytest'],
    description: [
      'Engineered production agent workflows at TrenchSecurity utilizing Model Context Protocol (MCP) to interface LLM reasoning with enterprise APIs.',
      'Created bidirectional webhook dispatchers connecting security telemetry alerts to Jira ticketing, Slack bot alerts, and Microsoft Teams channels.',
      'Implemented robust fallback retries, schema validation via Pydantic, and automated pytest suites achieving zero dropped alert incidents during trials.',
      'Documented end-to-end agentic protocol specifications to streamline integration for external developer partners.',
    ],
    architectureHighlights: [
      'MCP (Model Context Protocol) Tool Call Registry',
      'Asynchronous Webhook Listener & Event Normalizer',
      'Multi-Platform Notification Dispatcher (Slack/Teams/Jira)',
      'Deterministic Pytest Regression Harness',
    ],
    lensRelevance: {
      agentic: 10,
      backend: 10,
      recruiter: 10,
    },
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'TrenchSecurity',
    role: 'Research & Developer Intern',
    period: 'Jun 2026 - Aug 2026',
    location: 'Remote / Bengaluru, India',
    type: 'Internship',
    highlights: [
      'Built and modified production AI-agent workflows using Python, RAG, MCP (Model Context Protocol) tools, tool/function calling, REST APIs, and external integrations.',
      'Implemented and debugged end-to-end workflows connecting alerts and investigations with ticketing systems, Slack, Microsoft Teams, and webhooks, and documented workflow behavior for troubleshooting and validation.',
      'Integrated and troubleshot data retrieval and workflow pipelines across multiple sources, resolving query, integration, and production workflow issues.',
      'Fixed production workflow defects, wrote pytest/unit tests, validated changes before deployment, and collaborated through Git/GitHub and technical documentation.',
    ],
    technologies: [
      'Python',
      'Model Context Protocol (MCP)',
      'LangChain',
      'RAG',
      'FastAPI',
      'Slack & Teams APIs',
      'Pytest',
      'Git/GitHub',
    ],
    metrics: [
      { label: 'Workflows Deployed', value: '10+' },
      { label: 'Incident Triage Time', value: '-65%' },
      { label: 'Test Coverage Added', value: '88%' },
      { label: 'Uptime Reliability', value: '99.9%' },
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'GenAI & Agentic Systems',
    icon: 'Bot',
    skills: [
      { name: 'Agentic AI Loops', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'Model Context Protocol (MCP)', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'Tool & Function Calling', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'LangChain & LangGraph', level: 'Proficient', highlight: true, categoryTag: 'ai' },
      { name: 'Vector Embeddings & Semantic Search', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'Prompt Engineering & Guardrails', level: 'Expert', highlight: false, categoryTag: 'ai' },
      { name: 'Groq & LLM Inference APIs', level: 'Proficient', highlight: false, categoryTag: 'ai' },
    ],
  },
  {
    title: 'Backend Engineering & APIs',
    icon: 'Server',
    skills: [
      { name: 'FastAPI', level: 'Expert', highlight: true, categoryTag: 'backend' },
      { name: 'Python (Async / Typing / Subprocess)', level: 'Expert', highlight: true, categoryTag: 'backend' },
      { name: 'REST APIs & Webhooks', level: 'Expert', highlight: true, categoryTag: 'backend' },
      { name: 'Flask', level: 'Proficient', highlight: false, categoryTag: 'backend' },
      { name: 'Pydantic & Data Validation', level: 'Expert', highlight: false, categoryTag: 'backend' },
      { name: 'Pytest & Integration Testing', level: 'Expert', highlight: true, categoryTag: 'backend' },
      { name: 'API Error Handling & Retries', level: 'Expert', highlight: false, categoryTag: 'backend' },
    ],
  },
  {
    title: 'Databases & Vector Stores',
    icon: 'Database',
    skills: [
      { name: 'ChromaDB (Vector Store)', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'PostgreSQL', level: 'Proficient', highlight: true, categoryTag: 'backend' },
      { name: 'MongoDB', level: 'Proficient', highlight: false, categoryTag: 'backend' },
      { name: 'MySQL & Relational Modeling', level: 'Proficient', highlight: false, categoryTag: 'backend' },
      { name: 'SQL Query Optimization', level: 'Proficient', highlight: false, categoryTag: 'backend' },
    ],
  },
  {
    title: 'Languages & Core CS',
    icon: 'Code2',
    skills: [
      { name: 'Python 3.11+', level: 'Expert', highlight: true, categoryTag: 'core' },
      { name: 'JavaScript / TypeScript', level: 'Proficient', highlight: false, categoryTag: 'core' },
      { name: 'SQL', level: 'Proficient', highlight: false, categoryTag: 'core' },
      { name: 'Data Structures & Algorithms', level: 'Proficient', highlight: false, categoryTag: 'core' },
      { name: 'Scikit-Learn, Pandas, NumPy', level: 'Proficient', highlight: false, categoryTag: 'core' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: 'Cpu',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Expert', highlight: true, categoryTag: 'core' },
      { name: 'Docker (Containerization)', level: 'Familiar', highlight: false, categoryTag: 'backend' },
      { name: 'Postman (API Testing)', level: 'Expert', highlight: false, categoryTag: 'backend' },
      { name: 'VS Code, Codex, Claude Code', level: 'Expert', highlight: true, categoryTag: 'ai' },
      { name: 'Linux / Subprocess CLI', level: 'Proficient', highlight: false, categoryTag: 'core' },
    ],
  },
]

export const SIMULATION_CHALLENGES: SimulationChallenge[] = [
  {
    id: 'challenge-lru-ttl',
    title: 'LRUCache with Expiring TTL (Time-To-Live)',
    difficulty: 'Medium',
    category: 'System Design / Data Structures',
    description:
      'The agent is instructed to implement an LRUCache with O(1) eviction that also supports expiration timestamps per key without memory leaks.',
    initialCode: `class LRUCacheTTL:
    def __init__(self, capacity: int, default_ttl: float):
        self.capacity = capacity
        self.default_ttl = default_ttl
        self.cache = {}
        
    def get(self, key: str):
        # BUG: Missing timestamp validation and LRU order update!
        return self.cache.get(key, None)
        
    def put(self, key: str, value: any):
        self.cache[key] = value`,
    fixedCode: `import time
from collections import OrderedDict

class LRUCacheTTL:
    def __init__(self, capacity: int, default_ttl: float):
        self.capacity = capacity
        self.default_ttl = default_ttl
        self.cache = OrderedDict()
        self.timestamps = {}
        
    def get(self, key: str):
        if key not in self.cache:
            return None
        # Check TTL expiration
        if time.monotonic() > self.timestamps[key]:
            del self.cache[key]
            del self.timestamps[key]
            return None
        # Refresh access order
        self.cache.move_to_end(key)
        return self.cache[key]
        
    def put(self, key: str, value: any):
        if key in self.cache:
            self.cache.move_to_end(key)
        elif len(self.cache) >= self.capacity:
            oldest_key, _ = self.cache.popitem(last=False)
            self.timestamps.pop(oldest_key, None)
        self.cache[key] = value
        self.timestamps[key] = time.monotonic() + self.default_ttl`,
    steps: [
      {
        step: 1,
        title: 'Task Decomposition & Schema Analysis',
        type: 'thought',
        icon: 'Brain',
        content:
          'Analyzing prompt requirements: LRU eviction requires O(1) order tracking (OrderedDict). TTL requires storing expiration timestamps and purging stale records on access or before capacity overflow.',
        status: 'success',
      },
      {
        step: 2,
        title: 'Tool Call: workspace.write_file("cache_impl.py")',
        type: 'tool_call',
        icon: 'FileCode',
        content: 'Agent drafts initial naive cache implementation and writes to test environment.',
        codeSnippet: `# Initial draft without eviction ordering\ndef get(self, key): return self.cache.get(key, None)`,
        status: 'success',
      },
      {
        step: 3,
        title: 'Execute Sandbox Runner: pytest tests/test_lru.py',
        type: 'execution',
        icon: 'Terminal',
        content: 'Agent launches subprocess test runner. Tests fail due to lack of eviction and expired TTL retrieval.',
        terminalOutput: `============================= test session starts ==============================
collected 3 items

tests/test_lru.py::test_capacity_eviction FAILED                         [ 33%]
tests/test_lru.py::test_ttl_expiration FAILED                            [ 66%]
tests/test_lru.py::test_basic_get_put PASSED                             [100%]

=================================== FAILURES ===================================
FAILED: AssertionError: Expected key 'a' to be evicted upon capacity overflow!
FAILED: AssertionError: Stale key returned after TTL window!
========================= 2 failed, 1 passed in 0.08s ==========================`,
        status: 'healing',
      },
      {
        step: 4,
        title: 'AST Stacktrace Reflection & Patch Generation',
        type: 'reflection',
        icon: 'SearchCheck',
        content:
          'Agent detected 2 failing assertions. Diagnosed: Naive dict does not evict oldest items on overflow; TTL timestamp is not checked against monotonic clock. Synthesizing patch with OrderedDict and time.monotonic().',
        diff: {
          file: 'cache_impl.py',
          removed: '- self.cache = {}\n- return self.cache.get(key, None)',
          added:
            '+ self.cache = OrderedDict()\n+ if time.monotonic() > self.timestamps[key]: del self.cache[key]; return None\n+ self.cache.move_to_end(key)',
        },
        status: 'success',
      },
      {
        step: 5,
        title: 'Verification Loop: Re-running Subprocess Pytest',
        type: 'verification',
        icon: 'CheckCircle2',
        content: 'Agent executes patched code against full test harness. All 3 assertions pass cleanly.',
        terminalOutput: `============================= test session starts ==============================
collected 3 items

tests/test_lru.py::test_capacity_eviction PASSED                         [ 33%]
tests/test_lru.py::test_ttl_expiration PASSED                            [ 66%]
tests/test_lru.py::test_basic_get_put PASSED                             [100%]

============================== 3 passed in 0.04s ===============================
[Mini Devin Agent Loop Verified: All constraints satisfied in 1 retry iteration]`,
        status: 'success',
      },
    ],
  },
  {
    id: 'challenge-fastapi-retry',
    title: 'FastAPI Webhook Handler with Exponential Backoff & Dead-Letter Queue',
    difficulty: 'Hard',
    category: 'Backend / Reliability',
    description:
      'The agent must implement an asynchronous FastAPI endpoint that receives incident alerts, dispatches external webhooks with exponential jitter retries, and stores failures in an isolated DLQ.',
    initialCode: `@app.post("/api/v1/webhook/alert")
async def handle_alert(payload: AlertPayload):
    # Fragile call without timeout or retry
    resp = requests.post("https://downstream-slack.internal/hook", json=payload.dict())
    return {"status": "ok"}`,
    fixedCode: `@app.post("/api/v1/webhook/alert")
async def handle_alert(payload: AlertPayload, background_tasks: BackgroundTasks):
    async def dispatch_with_backoff(data: dict):
        max_retries = 3
        for attempt in range(max_retries):
            try:
                async with httpx.AsyncClient(timeout=3.0) as client:
                    resp = await client.post("https://downstream-slack.internal/hook", json=data)
                    if resp.status_code == 200:
                        return
            except httpx.RequestError as exc:
                wait_time = (2 ** attempt) + random.uniform(0.1, 0.5)
                await asyncio.sleep(wait_time)
        # Fallback to Dead-Letter Queue
        await dead_letter_queue.insert_one({"payload": data, "failed_at": datetime.utcnow()})

    background_tasks.add_task(dispatch_with_backoff, payload.dict())
    return {"status": "queued", "request_id": str(uuid.uuid4())}`,
    steps: [
      {
        step: 1,
        title: 'Analyze High-Concurrency Requirements',
        type: 'thought',
        icon: 'Brain',
        content:
          'Analyzing webhook requirements: Synchronous `requests.post` blocks the FastAPI event loop during high incident volumes. Needs async `httpx.AsyncClient`, background execution, exponential backoff, and DLQ persistence.',
        status: 'success',
      },
      {
        step: 2,
        title: 'Tool Call: workspace.write_file("webhook_service.py")',
        type: 'tool_call',
        icon: 'FileCode',
        content: 'Agent drafts async webhook handler and installs integration test mocks.',
        status: 'success',
      },
      {
        step: 3,
        title: 'Subprocess Execution: pytest tests/test_webhook_resilience.py',
        type: 'execution',
        icon: 'Terminal',
        content: 'Test runner simulates downstream 503 service outage. Verification detects unhandled timeout crash.',
        terminalOutput: `tests/test_webhook_resilience.py::test_downstream_outage_handling FAILED
AssertionError: Downstream outage crashed event loop; expected background non-blocking fallback to DLQ!`,
        status: 'healing',
      },
      {
        step: 4,
        title: 'Automated Exception Reflection & Jitter Backoff Patch',
        type: 'reflection',
        icon: 'SearchCheck',
        content:
          'Agent extracts exception trace. Replaces blocking caller with `background_tasks.add_task()`, wraps loop in `asyncio.sleep((2**attempt) + jitter)`, and connects MongoDB dead-letter queue.',
        diff: {
          file: 'webhook_service.py',
          removed: '- resp = requests.post(url, json=payload)\n- return {"status": "ok"}',
          added:
            '+ background_tasks.add_task(dispatch_with_backoff, payload.dict())\n+ return {"status": "queued", "request_id": str(uuid.uuid4())}',
        },
        status: 'success',
      },
      {
        step: 5,
        title: 'Verification Loop: Re-running Test Suite',
        type: 'verification',
        icon: 'CheckCircle2',
        content: 'Agent re-runs pytest. Downstream failure handled gracefully with 2 retries and DLQ dispatch. 100% green.',
        terminalOutput: `============================= test session starts ==============================
collected 2 items
tests/test_webhook_resilience.py::test_happy_path PASSED                [ 50%]
tests/test_webhook_resilience.py::test_downstream_outage_handling PASSED [100%]

============================== 2 passed in 0.12s ===============================
[Mini Devin Agent Loop Verified: Webhook resilience verified]`,
        status: 'success',
      },
    ],
  },
]

export const ARCHITECTURE_SYSTEMS = [
  {
    id: 'trench-pipeline',
    title: 'TrenchSecurity Production MCP Agent Workflow',
    category: 'Production Experience (Internship)',
    description:
      'Autonomous incident-to-remediation workflow connecting enterprise security alerts with AI reasoning via Model Context Protocol (MCP) tools and multi-channel webhooks.',
    nodes: [
      {
        id: '1',
        title: 'Security Telemetry Hook',
        type: 'Ingestion',
        detail: 'FastAPI async webhook endpoint ingesting raw SIEM & security alerts.',
        samplePayload: '{\n  "alert_id": "SEC-8921",\n  "severity": "CRITICAL",\n  "source": "AWS GuardDuty",\n  "anomaly": "Unauthorized API Call from Untrusted IP"\n}',
      },
      {
        id: '2',
        title: 'Normalizer & Context Router',
        type: 'Processing',
        detail: 'Pydantic data cleansing, deduplication, and context enrichment.',
        samplePayload: '{\n  "normalized": true,\n  "threat_vector": "Credential Exfiltration",\n  "target_asset": "prod-auth-cluster"\n}',
      },
      {
        id: '3',
        title: 'MCP Agent Reasoning Core',
        type: 'Agent / LLM',
        detail: 'Model Context Protocol server orchestrating function calls to query internal telemetry and SOP playbooks.',
        samplePayload: '{\n  "selected_tool": "mcp::query_threat_intel",\n  "reason": "Verify IP reputation on VirusTotal",\n  "confidence": 0.96\n}',
      },
      {
        id: '4',
        title: 'Multi-Channel Dispatcher',
        type: 'Action / Egress',
        detail: 'Asynchronous workers dispatching structured incident cards to Slack, Microsoft Teams, and Jira tickets.',
        samplePayload: '{\n  "jira_ticket": "SEC-4402",\n  "slack_channel": "#sec-incident-p0",\n  "status": "TRIAGED_AND_NOTIFIED",\n  "latency_ms": 312\n}',
      },
    ],
  },
  {
    id: 'mini-devin-loop',
    title: 'Mini Devin Autonomous Verification-Driven Agent Loop',
    category: 'Agentic AI Architecture',
    description:
      'A multi-step self-healing loop: prompt planning -> file system write -> subprocess execution -> AST error reflection -> targeted diff application -> test verification.',
    nodes: [
      {
        id: '1',
        title: 'Task & Intent Planner',
        type: 'Decomposition',
        detail: 'Deconstructs user coding objectives into measurable assertions and test cases.',
        samplePayload: '{\n  "task": "Implement Thread-safe LRU Cache with TTL",\n  "acceptance_tests": ["test_lru_eviction", "test_ttl_expiry"]\n}',
      },
      {
        id: '2',
        title: 'Subprocess Execution Sandbox',
        type: 'Sandbox',
        detail: 'Isolated Python runner executing test suites and streaming stdout/stderr.',
        samplePayload: '{\n  "command": "pytest -v tests/test_lru.py",\n  "exit_code": 1,\n  "failures": ["AssertionError: Stale key not purged"]\n}',
      },
      {
        id: '3',
        title: 'Reflection & Diff Synthesizer',
        type: 'Agent / Reflection',
        detail: 'AST parser maps error tracebacks to source line numbers and crafts minimal diffs.',
        samplePayload: '{\n  "error_type": "AssertionError",\n  "patch_target": "cache.py:24",\n  "retry_counter": 1,\n  "max_retries": 3\n}',
      },
      {
        id: '4',
        title: 'Verified Green State',
        type: 'Verification',
        detail: 'All pytest assertions pass cleanly; solution committed with telemetry log.',
        samplePayload: '{\n  "verification": "PASSED",\n  "coverage": "100%",\n  "total_latency_ms": 1840\n}',
      },
    ],
  },
  {
    id: 'rag-engine',
    title: 'Enterprise PDF Document RAG Retrieval Engine',
    category: 'RAG & Vector Retrieval',
    description:
      'Deterministic document ingestion and cosine similarity retrieval architecture with grounding instructions to minimize hallucination.',
    nodes: [
      {
        id: '1',
        title: 'PDF Parsing & Semantic Chunking',
        type: 'Ingestion',
        detail: 'Token-aware recursive character chunking with 200-character overlap.',
        samplePayload: '{\n  "file": "system_design_doc.pdf",\n  "total_chunks": 42,\n  "chunk_size": 1000,\n  "overlap": 200\n}',
      },
      {
        id: '2',
        title: 'ChromaDB High-Dimensional Index',
        type: 'Vector Store',
        detail: 'Vector embeddings with cosine distance calculation and metadata tagging.',
        samplePayload: '{\n  "embedding_dim": 1536,\n  "metric": "cosine",\n  "top_k": 4,\n  "threshold": 0.78\n}',
      },
      {
        id: '3',
        title: 'Grounded LLM Prompt Assembly',
        type: 'LLM Generation',
        detail: 'Strict system prompting prohibiting ungrounded speculative answers.',
        samplePayload: '{\n  "context_chunks_retrieved": 4,\n  "grounding_check": "100% cited from source"\n}',
      },
    ],
  },
]

export const MOCK_API_ENDPOINTS = [
  {
    path: '/api/v1/agent/mini-devin/execute',
    method: 'POST',
    description: 'Trigger autonomous code synthesis and test-driven self-healing loop',
    requestBody: JSON.stringify(
      {
        task: 'Implement async batch processor with concurrency semaphore',
        language: 'python',
        timeout_seconds: 15,
        max_retries: 3,
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        status: 'success',
        task_id: 'task_8f92ab3c',
        iterations_taken: 1,
        tests_passed: 4,
        tests_failed: 0,
        execution_time_ms: 1420,
        code_diff: 'Added Semaphore(5) to limit simultaneous async requests',
      },
      null,
      2
    ),
  },
  {
    path: '/api/v1/rag/query',
    method: 'POST',
    description: 'Query document vector index with similarity score thresholding',
    requestBody: JSON.stringify(
      {
        query: 'What is the retry policy for failed webhook deliveries?',
        collection_id: 'trench_sec_v1',
        top_k: 3,
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        answer:
          'Failed webhooks follow an exponential backoff with randomized jitter up to 3 retries. Permanent failures are redirected to the dead-letter queue.',
        similarity_score: 0.92,
        grounded_sources: ['docs/architecture/webhook_spec.md#L45-L68'],
        retrieval_latency_ms: 84,
      },
      null,
      2
    ),
  },
  {
    path: '/api/v1/health',
    method: 'GET',
    description: 'Service health check and MCP tool registry status',
    requestBody: '{}',
    responseBody: JSON.stringify(
      {
        status: 'healthy',
        service: 'jishnu-ai-core',
        uptime_seconds: 94821,
        mcp_tools_active: 8,
        vector_index_status: 'synced',
      },
      null,
      2
    ),
  },
]

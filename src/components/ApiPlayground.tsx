import React, { useState } from 'react'
import { MOCK_API_ENDPOINTS } from '../data/portfolioData'
import { 
  Server, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2, 
  Zap
} from 'lucide-react'

export const ApiPlayground: React.FC = () => {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0)
  const [isSending, setIsSending] = useState(false)
  const [copiedCurl, setCopiedCurl] = useState(false)
  const [responseLog, setResponseLog] = useState<{
    status: number
    timeMs: number
    body: string
  } | null>(null)

  const currentEndpoint = MOCK_API_ENDPOINTS[selectedEndpointIndex]

  const handleSendRequest = () => {
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setResponseLog({
        status: 200,
        timeMs: Math.floor(Math.random() * 45) + 35,
        body: currentEndpoint.responseBody,
      })
    }, 600)
  }

  const handleCopyCurl = () => {
    const curlCommand = `curl -X ${currentEndpoint.method} "https://api.jishnu.dev${currentEndpoint.path}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer mock_recruiter_token" \\
  -d '${currentEndpoint.requestBody.replace(/\n/g, '')}'`

    navigator.clipboard.writeText(curlCommand)
    setCopiedCurl(true)
    setTimeout(() => setCopiedCurl(false), 2000)
  }

  return (
    <section id="api-playground" className="py-24 relative bg-[#08090f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Server className="w-3.5 h-3.5" />
            <span>FastAPI Interactive REST Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Backend API{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
              Playground & Swagger
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Test the live mock REST API contracts for my agent execution engines, vector search pipelines, and system telemetry endpoints.
          </p>
        </div>

        {/* Playground Container */}
        <div className="mt-12 max-w-5xl mx-auto bg-[#0d101a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-left">
          
          {/* Endpoint Selector Tabs */}
          <div className="bg-[#121624] p-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {MOCK_API_ENDPOINTS.map((ep, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedEndpointIndex(idx)
                    setResponseLog(null)
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                    selectedEndpointIndex === idx
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      ep.method === 'POST' ? 'bg-blue-500 text-white' : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span>{ep.path}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCurl}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors flex items-center gap-1.5"
              >
                {copiedCurl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied cURL!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy cURL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Endpoint Bar & Send Button */}
          <div className="p-4 sm:p-6 bg-[#0f121d] border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span
                className={`px-2.5 py-1 rounded-md font-bold text-xs ${
                  currentEndpoint.method === 'POST'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {currentEndpoint.method}
              </span>
              <span className="text-white font-medium break-all">{currentEndpoint.path}</span>
            </div>

            <button
              onClick={handleSendRequest}
              disabled={isSending}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className={`w-3.5 h-3.5 ${isSending ? 'animate-spin' : ''}`} />
              <span>{isSending ? 'Sending Request...' : 'Send Mock Request'}</span>
            </button>
          </div>

          {/* Request & Response Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Request Body */}
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Request Payload (Pydantic Schema)</span>
                <span className="text-[11px] text-slate-500">application/json</span>
              </div>
              <pre className="p-4 rounded-2xl bg-black/60 border border-white/10 text-slate-300 font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed min-h-[220px]">
                {currentEndpoint.requestBody}
              </pre>
            </div>

            {/* Response Body */}
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Response Data</span>
                {responseLog ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {responseLog.status} OK ({responseLog.timeMs}ms)
                  </span>
                ) : (
                  <span className="text-slate-500">Waiting for trigger</span>
                )}
              </div>

              {responseLog ? (
                <pre className="p-4 rounded-2xl bg-black/80 border border-emerald-500/30 text-emerald-300 font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed min-h-[220px]">
                  {responseLog.body}
                </pre>
              ) : (
                <div className="p-8 rounded-2xl bg-black/40 border border-white/5 text-slate-500 text-xs font-mono text-center flex flex-col items-center justify-center min-h-[220px] space-y-2">
                  <Zap className="w-6 h-6 text-slate-600" />
                  <p>Click "Send Mock Request" to simulate real-time API response.</p>
                </div>
              )}
            </div>

          </div>

          {/* Footer Swagger Info */}
          <div className="bg-[#0b0e17] px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>FastAPI OpenAPI 3.1.0 • Pydantic v2.7</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Schema Validated
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

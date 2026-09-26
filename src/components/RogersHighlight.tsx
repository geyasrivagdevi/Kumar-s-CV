import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RogersHighlightProps {
  onOpenDeepDive: () => void;
}

export const RogersHighlight: React.FC<RogersHighlightProps> = ({ onOpenDeepDive }) => {
  const [viewMode, setViewMode] = useState<'architecture' | 'trace'>('architecture');
  const [copiedHash, setCopiedHash] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard?.writeText?.('8b3cf17');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section className="w-full py-10">
      <div className="rounded-2xl bg-[#181c24] border border-[#262a33] p-6 lg:p-10 relative overflow-hidden shadow-xl">
        {/* Ambient background glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#4edea3]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-wider">
                Enterprise Production Highlight
              </span>
              <span className="text-[#464554]">•</span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#262a33] text-[#4edea3] font-medium border border-[#31353e]">
                Telecom Edge Infrastructure
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] tracking-tight leading-snug">
              Automating 322+ Multi-Vendor Routers across Rogers Communications Core Clusters
            </h2>

            <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
              Architected and deployed a hardened Python automation suite executing asynchronous
              command workflows across distributed edge routers (Cisco, Juniper, Nokia). Replaced
              fragile legacy manual configurations with validated idempotent state loops,{' '}
              <strong className="text-[#dfe2ee] font-semibold">
                slashing turnaround lead times by 78%
              </strong>{' '}
              while eliminating human configuration drift in live national routing segments.
            </p>

            {/* Key Metric Callouts */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="text-2xl font-bold text-[#4edea3]">-78%</span>
                <span className="font-mono text-[11px] text-[#908fa0] mt-0.5">
                  Lead Time Reduction
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="text-2xl font-bold text-[#c0c1ff]">100%</span>
                <span className="font-mono text-[11px] text-[#908fa0] mt-0.5">
                  Audit Traceability
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="text-2xl font-bold text-[#7bd0ff]">&lt;50ms</span>
                <span className="font-mono text-[11px] text-[#908fa0] mt-0.5">
                  SSH Concurrency P99
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDeepDive}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] border border-[#31353e] text-xs font-mono font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#c0c1ff]">
                  schema
                </span>
                <span>Inspect Technical Case Study &amp; Architecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column: Toggleable Architecture Topology & Visual Pipeline (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* View Mode Toggle Switch */}
            <div className="flex items-center justify-between p-1 bg-[#141820] border border-[#262a33] rounded-xl">
              <span className="text-xs font-mono text-[#908fa0] px-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#8083ff]">
                  tune
                </span>
                Inspection Mode:
              </span>
              <div className="flex items-center gap-1 bg-[#0a0e16] p-0.5 rounded-lg border border-[#262a33]">
                <button
                  onClick={() => setViewMode('architecture')}
                  className={`inline-flex items-center gap-1 font-mono text-xs px-3 py-1 rounded-md transition-all ${
                    viewMode === 'architecture'
                      ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold shadow-sm'
                      : 'text-[#908fa0] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">account_tree</span>
                  <span>Architecture</span>
                </button>
                <button
                  onClick={() => setViewMode('trace')}
                  className={`inline-flex items-center gap-1 font-mono text-xs px-3 py-1 rounded-md transition-all ${
                    viewMode === 'trace'
                      ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold shadow-sm'
                      : 'text-[#908fa0] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>CLI Trace</span>
                </button>
              </div>
            </div>

            {/* TAB 1: Visual Architecture Topology (Recruiter & Executive friendly) */}
            {viewMode === 'architecture' && (
              <div className="rounded-xl bg-[#0a0e16] border border-[#262a33] p-4 flex flex-col gap-3 shadow-inner animate-fade-in">
                <div className="flex items-center justify-between border-b border-[#262a33] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]"></span>
                    <span className="font-mono text-xs font-bold text-[#dfe2ee]">
                      Distributed Topology &amp; Ingestion Flow
                    </span>
                  </div>
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-[#262a33] text-[#4edea3] font-semibold">
                    100% HEALTHY
                  </span>
                </div>

                {/* 3-Step Pipeline Flow */}
                <div className="flex flex-col gap-2.5 pt-1">
                  {/* Step 1 */}
                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#262a33] flex items-center justify-center text-[#7bd0ff]">
                        <span className="material-symbols-outlined text-[16px]">router</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#dfe2ee]">
                          322+ Multi-Vendor Edge Routers
                        </span>
                        <span className="font-mono text-[10px] text-[#908fa0]">
                          Cisco • Juniper • Nokia BGP Nodes
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#4edea3] bg-[#1c2028] px-2 py-0.5 rounded border border-[#262a33]">
                      48/48 TenGig
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center -my-1 text-[#908fa0]">
                    <span className="font-mono text-[10px] bg-[#0a0e16] px-2 text-[#8083ff] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">sync_alt</span>
                      Paramiko AsyncIO Worker Pool (&lt;50ms)
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#262a33] flex items-center justify-center text-[#c0c1ff]">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#dfe2ee]">
                          Idempotent State Validation Engine
                        </span>
                        <span className="font-mono text-[10px] text-[#908fa0]">
                          Pre-flight schema validation &amp; rollback tokens
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#c0c1ff] bg-[#1c2028] px-2 py-0.5 rounded border border-[#262a33]">
                      Zero Drift
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center -my-1 text-[#908fa0]">
                    <span className="font-mono text-[10px] bg-[#0a0e16] px-2 text-[#4edea3] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">database</span>
                      Audit Telemetry Stream
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#262a33] flex items-center justify-center text-[#4edea3]">
                        <span className="material-symbols-outlined text-[16px]">dns</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#dfe2ee]">
                          PostgreSQL &amp; Enterprise Telemetry
                        </span>
                        <span className="font-mono text-[10px] text-[#908fa0]">
                          Live optic power logs &amp; cryptographic audit hashes
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#4edea3] bg-[#1c2028] px-2 py-0.5 rounded border border-[#262a33]">
                      Hash: 8b3cf17
                    </span>
                  </div>
                </div>

                {/* Pipeline Stats Summary */}
                <div className="mt-1 pt-2 border-t border-[#262a33] flex items-center justify-between font-mono text-[11px] text-[#908fa0]">
                  <span>Recovery Guarantee: &lt; 180s MTTR</span>
                  <span className="text-[#4edea3] font-semibold">0 Configuration Breaches</span>
                </div>
              </div>
            )}

            {/* TAB 2: Raw CLI Execution Trace (Technical Interviewer friendly) */}
            {viewMode === 'trace' && (
              <div className="rounded-xl bg-[#0a0e16] border border-[#262a33] p-4 font-mono text-[12px] flex flex-col gap-2 shadow-inner animate-fade-in">
                <div className="flex items-center justify-between text-[#908fa0] pb-2 border-b border-[#262a33]">
                  <span className="flex items-center gap-1.5 text-xs text-[#c0c1ff]">
                    <span className="material-symbols-outlined text-[15px]">terminal</span>
                    execution_pipeline.log
                  </span>
                  <span className="text-[#4edea3] font-semibold text-[11px]">LIVE_TRACE</span>
                </div>

                <div className="text-[#c7c4d7]">
                  <span className="text-[#c0c1ff] font-bold">$</span> ssh-exec
                  --target=core-agg-tor-042 --verify
                </div>
                <div className="text-[#908fa0] text-[11px]">
                  [00:00:01] Initializing Paramiko async transport session...
                </div>
                <div className="text-[#908fa0] text-[11px]">
                  [00:00:02] Querying BGP neighbor topology &amp; optic attenuation...
                </div>
                <div className="text-[#4edea3] font-semibold text-[11px]">
                  [00:00:03] &gt;&gt; OK [0.042s] • 48/48 TenGig ports synchronized
                </div>
                <div className="text-[#c7c4d7]">
                  <span className="text-[#c0c1ff] font-bold">$</span> schema-migration
                  --sync-catalog --write-telemetry
                </div>
                <div className="text-[#4edea3] text-[11px] flex items-center justify-between">
                  <span>[00:00:04] PostgreSQL state recorded: Commit hash 8b3cf17</span>
                  <button
                    onClick={handleCopyHash}
                    className="text-[10px] text-[#908fa0] hover:text-white underline ml-1"
                  >
                    {copiedHash ? 'copied' : 'copy'}
                  </button>
                </div>

                <div className="mt-1 pt-2 bg-[#1c2028] border border-[#262a33] rounded p-2.5 flex items-center justify-between">
                  <span className="text-[#dfe2ee] font-medium text-[11px]">
                    Pipeline Status: Complete
                  </span>
                  <span className="font-mono text-[10px] text-[#4edea3] px-2 py-0.5 rounded bg-[#262a33] font-semibold">
                    0 ERRORS
                  </span>
                </div>
              </div>
            )}

            {/* Datacenter Photo */}
            <div className="relative rounded-xl overflow-hidden h-36 bg-[#1c2028] border border-[#262a33] group">
              <img
                src={PERSONAL_INFO.datacenterPhoto}
                alt="Rogers Core Datacenter Edge Automation Segment"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/30 to-transparent flex items-end p-3">
                <span className="font-mono text-[11px] text-[#dfe2ee] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                  Rogers Core Datacenter Edge Automation Segment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

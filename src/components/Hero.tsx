import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { TERMINAL_FILES } from '../data/portfolioData';

interface HeroProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  onOpenCvModal: () => void;
  onOpenLiveTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveScreen,
  onOpenCvModal,
  onOpenLiveTerminal,
}) => {
  const [heroViewMode, setHeroViewMode] = useState<'blueprint' | 'code'>('blueprint');
  const [activeFile, setActiveFile] = useState<string>('kumar_daemon.py');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [runCount, setRunCount] = useState<number>(1);
  const [latency, setLatency] = useState<number>(24);

  const currentFileData = TERMINAL_FILES[activeFile] || TERMINAL_FILES['kumar_daemon.py'];

  const handleSimulateRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setRunCount((prev) => prev + 1);
      setLatency(Math.floor(20 + Math.random() * 8));
    }, 600);
  };

  const coreSkills = [
    'Python / AsyncIO',
    'Distributed Systems',
    'REST & gRPC APIs',
    'PostgreSQL / SQL',
    'Docker / CI-CD',
    'Network Edge Automation',
  ];

  return (
    <section className="w-full py-12 lg:py-16 relative">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-10 w-80 h-80 bg-[#4edea3]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a33] border border-[#31353e] shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.7)] animate-pulse"></span>
              <span className="font-mono text-[11px] text-[#4edea3] font-semibold uppercase tracking-wider">
                PROD READY
              </span>
              <span className="text-[#464554]">•</span>
              <span className="font-mono text-[11px] text-[#c7c4d7]">
                AVAILABLE FOR ROLES
              </span>
              <span className="text-[#464554]">•</span>
              <span className="font-mono text-[11px] text-[#7bd0ff]">
                v5.4.0-release
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181c24] border border-[#262a33] text-[#c7c4d7]">
              <span className="material-symbols-outlined text-[15px] text-[#7bd0ff]">
                location_on
              </span>
              <span className="font-mono text-[11px] text-[#dfe2ee]">
                Toronto, ON, Canada
              </span>
              <span className="text-[#464554]">/</span>
              <span className="font-mono text-[11px] text-[#4edea3] font-medium">
                Canadian PR
              </span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#c0c1ff] font-semibold uppercase tracking-widest">
              Architectural Engineering & Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#dfe2ee] tracking-tight leading-[1.12]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#c0c1ff] via-[#7bd0ff] to-[#4edea3] bg-clip-text text-transparent">
                Kumar Guddepogu
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#c7c4d7] max-w-2xl leading-relaxed">
            Software Architect &amp; Backend Engineer specializing in high-throughput{' '}
            <strong className="text-[#dfe2ee] font-semibold">Python backends</strong>,
            distributed microservices, TypeScript interfaces, and telecom-grade cloud
            automation across enterprise infrastructure.
          </p>

          {/* Core Competencies Ribbon Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] px-3 py-1 rounded-full bg-[#1c2028] text-[#c7c4d7] border border-[#262a33] hover:border-[#8083ff]/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                setActiveScreen('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8083ff] text-[#1000a9] font-semibold text-sm hover:bg-[#c0c1ff] transition-all duration-200 shadow-[0_0_16px_rgba(128,131,255,0.3)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Get in Touch</span>
            </button>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#262a33] text-[#dfe2ee] font-medium text-sm hover:bg-[#353942] border border-[#31353e] transition-all duration-200 shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => {
                setActiveScreen('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[#c0c1ff] hover:text-white font-medium text-sm transition-colors group"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Toggleable Architecture Blueprint vs Python Daemon (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full rounded-xl bg-[#0a0e16] border border-[#262a33] shadow-2xl overflow-hidden group">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181c24] border-b border-[#262a33]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#009bd1]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#4edea3]/80 inline-block"></span>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-1 bg-[#0f131c] p-0.5 rounded-lg border border-[#262a33]">
                <button
                  onClick={() => setHeroViewMode('blueprint')}
                  className={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
                    heroViewMode === 'blueprint'
                      ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold'
                      : 'text-[#908fa0] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">schema</span>
                  <span>System Blueprint</span>
                </button>
                <button
                  onClick={() => setHeroViewMode('code')}
                  className={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
                    heroViewMode === 'code'
                      ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold'
                      : 'text-[#908fa0] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">code</span>
                  <span>Python Daemon</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#31353e] text-[#4edea3] font-semibold">
                  LIVE
                </span>
                <button
                  onClick={onOpenLiveTerminal}
                  title="Open Fullscreen CLI Console"
                  className="p-1 rounded text-[#908fa0] hover:text-[#c0c1ff] hover:bg-[#262a33] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_full</span>
                </button>
              </div>
            </div>

            {/* VIEW 1: System Blueprint (Visual, Clean, Architecture-Focused) */}
            {heroViewMode === 'blueprint' && (
              <div className="p-4 flex flex-col gap-3 animate-fade-in">
                {/* Profile Card Header */}
                <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#c0c1ff]">Software Architect</div>
                    <div className="text-sm font-bold text-[#dfe2ee]">Kumar Guddepogu</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[11px] text-[#4edea3] font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                      99.98% SLA
                    </span>
                    <span className="font-mono text-[10px] text-[#908fa0]">Toronto, ON (PR)</span>
                  </div>
                </div>

                {/* 4 Architectural Matrix Indicators */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex flex-col">
                    <span className="font-mono text-[10px] text-[#908fa0]">Edge Routers</span>
                    <span className="text-lg font-bold text-[#dfe2ee] mt-0.5">322+ Nodes</span>
                    <span className="font-mono text-[10px] text-[#4edea3] mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                      Automated BGP Fabric
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex flex-col">
                    <span className="font-mono text-[10px] text-[#908fa0]">Microservices</span>
                    <span className="text-lg font-bold text-[#dfe2ee] mt-0.5">24/24 Online</span>
                    <span className="font-mono text-[10px] text-[#7bd0ff] mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">speed</span>
                      {latency}ms P99 Latency
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex flex-col">
                    <span className="font-mono text-[10px] text-[#908fa0]">Optic Interfaces</span>
                    <span className="text-lg font-bold text-[#dfe2ee] mt-0.5">50,000+ Ports</span>
                    <span className="font-mono text-[10px] text-[#c0c1ff] mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">visibility</span>
                      Telemetry Monitored
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#141820] border border-[#262a33] flex flex-col">
                    <span className="font-mono text-[10px] text-[#908fa0]">Core Pipeline</span>
                    <span className="text-lg font-bold text-[#dfe2ee] mt-0.5">Python 3.12</span>
                    <span className="font-mono text-[10px] text-[#4edea3] mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">bolt</span>
                      AsyncIO Concurrency
                    </span>
                  </div>
                </div>

                {/* Live Diagnostic Status Bar */}
                <div className="bg-[#1c2028] border border-[#262a33] p-3 rounded-lg flex flex-col gap-1.5 shadow-inner">
                  <div className="flex items-center justify-between text-[#908fa0] text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-[#4edea3] font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                      {isRunning ? 'PROBING CLUSTER TELEMETRY...' : 'DIAGNOSTIC TRACE PASSED'}
                    </span>
                    <span>PID: {8090 + runCount}</span>
                  </div>

                  <div className="font-mono text-[11px] text-[#c7c4d7] flex items-center justify-between">
                    <span>
                      Cluster State: <span className="text-[#4edea3]">OPTIMAL</span>
                    </span>
                    <span>
                      Response: <span className="text-[#c0c1ff] font-semibold">{latency}ms</span>
                    </span>
                  </div>

                  <div className="mt-1 pt-1.5 border-t border-[#262a33] flex items-center justify-between">
                    <span className="text-[10px] text-[#908fa0]">
                      Telemetry Stream Active (Iteration #{runCount})
                    </span>
                    <button
                      onClick={handleSimulateRun}
                      disabled={isRunning}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] text-[10px] font-mono transition-colors disabled:opacity-50"
                    >
                      <span
                        className={`material-symbols-outlined text-[13px] text-[#4edea3] ${
                          isRunning ? 'animate-spin' : ''
                        }`}
                      >
                        {isRunning ? 'sync' : 'refresh'}
                      </span>
                      <span>{isRunning ? 'Probing...' : 'Probe Live Health'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: Raw Python Code Block */}
            {heroViewMode === 'code' && (
              <div className="p-4 font-mono text-xs sm:text-[13px] text-[#dfe2ee] flex flex-col gap-1 overflow-x-auto leading-relaxed max-h-[340px] animate-fade-in">
                {/* Secondary file selector */}
                <div className="flex items-center gap-1 pb-2 border-b border-[#262a33] mb-1">
                  {Object.keys(TERMINAL_FILES).map((fileName) => (
                    <button
                      key={fileName}
                      onClick={() => setActiveFile(fileName)}
                      className={`text-[10.5px] px-2 py-0.5 rounded transition-colors ${
                        activeFile === fileName
                          ? 'bg-[#262a33] text-[#c0c1ff] font-semibold'
                          : 'text-[#908fa0] hover:text-[#dfe2ee]'
                      }`}
                    >
                      {fileName}
                    </button>
                  ))}
                </div>

                {activeFile === 'kumar_daemon.py' && (
                  <>
                    <div className="text-[#464554]">// Production Enterprise Daemon Initializer</div>
                    <div>
                      <span className="text-[#c0c1ff] font-semibold">import</span>{' '}
                      <span className="text-[#7bd0ff]">asyncio</span>,{' '}
                      <span className="text-[#7bd0ff]">telemetry</span>,{' '}
                      <span className="text-[#7bd0ff]">infra_core</span>
                    </div>
                    <div>
                      <span className="text-[#c0c1ff] font-semibold">from</span>{' '}
                      <span className="text-[#7bd0ff]">automation.engine</span>{' '}
                      <span className="text-[#c0c1ff] font-semibold">import</span>{' '}
                      <span className="text-[#4edea3]">NetworkProvisioner</span>
                    </div>
                    <div className="text-[#464554] mt-1">// Profile metadata</div>
                    <div>
                      <span className="text-[#c0c1ff] font-semibold">class</span>{' '}
                      <span className="text-[#7bd0ff]">EngineerProfile</span>:
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      name: <span className="text-[#4edea3]">"Kumar Guddepogu"</span>
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      role: <span className="text-[#4edea3]">"Software Architect"</span>
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      region: <span className="text-[#4edea3]">"Toronto, ON (PR Holder)"</span>
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      throughput:{' '}
                      <span className="text-[#8083ff] font-semibold">"322+ Core Nodes"</span>
                    </div>
                    <div className="text-[#464554] mt-1">// Real-time cluster health check</div>
                    <div>
                      <span className="text-[#c0c1ff] font-semibold">async def</span>{' '}
                      <span className="text-[#7bd0ff]">verify_cluster_sla</span>():
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      telemetry.<span className="text-[#7bd0ff]">stream</span>(
                      <span className="text-[#dfe2ee]">"0.042s P99 latency"</span>)
                    </div>
                    <div className="pl-4 text-[#c7c4d7]">
                      <span className="text-[#c0c1ff] font-semibold">return</span> {'{'}
                      <span className="text-[#dfe2ee]">"status"</span>:{' '}
                      <span className="text-[#4edea3]">"OPTIMAL"</span>,{' '}
                      <span className="text-[#dfe2ee]">"uptime"</span>:{' '}
                      <span className="text-[#4edea3]">99.98</span>
                      {'}'}
                    </div>
                  </>
                )}

                {activeFile === 'execution_pipeline.log' && (
                  <div className="flex flex-col gap-1 text-[#c7c4d7]">
                    <div>
                      <span className="text-[#c0c1ff] font-bold">$</span> ssh-exec
                      --target=core-agg-tor-042 --verify
                    </div>
                    <div className="text-[#908fa0]">
                      [00:00:01] Initializing Paramiko async transport session...
                    </div>
                    <div className="text-[#908fa0]">
                      [00:00:02] Querying BGP neighbor topology &amp; optic attenuation...
                    </div>
                    <div className="text-[#4edea3] font-semibold">
                      [00:00:03] &gt;&gt; OK [0.042s] • 48/48 TenGig ports synchronized
                    </div>
                    <div>
                      <span className="text-[#c0c1ff] font-bold">$</span> schema-migration
                      --sync-catalog --write-telemetry
                    </div>
                    <div className="text-[#4edea3]">
                      [00:00:04] PostgreSQL state recorded: Commit hash 8b3cf17
                    </div>
                  </div>
                )}

                {activeFile === 'cluster_health.py' && (
                  <div className="flex flex-col gap-1 text-[#c7c4d7]">
                    <div>
                      <span className="text-[#c0c1ff]">import</span> psycopg2, redis, asyncio
                    </div>
                    <div>
                      <span className="text-[#c0c1ff]">async def</span>{' '}
                      <span className="text-[#7bd0ff]">probe_cluster_telemetry</span>():
                    </div>
                    <div className="pl-4">
                      pool = <span className="text-[#c0c1ff]">await</span> redis.create_pool(
                      <span className="text-[#4edea3]">"redis://cluster.edge:6379"</span>)
                    </div>
                    <div className="pl-4">
                      latency = <span className="text-[#c0c1ff]">await</span> pool.ping()
                    </div>
                    <div className="pl-4">
                      <span className="text-[#c0c1ff]">return</span> {'{'}
                      <span className="text-[#dfe2ee]">"active_nodes"</span>: 322,{' '}
                      <span className="text-[#dfe2ee]">"latency_ms"</span>: {latency}
                      {'}'}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

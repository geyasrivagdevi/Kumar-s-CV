import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvModal: () => void;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenCvModal,
}) => {
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'sys-init --verbose',
      output: `[INIT] Kumar Guddepogu Architectural Core v5.4.0
[OK] Environment: production.toronto.core.rogers
[OK] Python 3.12.2 AsyncIO Engine active
[OK] 322+ Edge Nodes in synchronized state
Type 'help' to inspect available diagnostic commands.`,
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim();
    if (!cmd) return;

    let output = '';
    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      output = `Available Commands:
  • status        - Check live cluster health & microservice status
  • sla           - Display P99 latency and uptime metrics
  • telemetry     - Query live edge router optic power telemetry
  • skills        - Dump technical repertoire and stack matrices
  • download-cv   - Trigger curriculum vitae export
  • clear         - Clear the diagnostic terminal buffer
  • exit          - Close the diagnostic terminal`;
    } else if (lower === 'status') {
      output = `[CLUSTER STATUS]
  > Region: Toronto, ON, Canada
  > Work Authorization: Canadian Permanent Resident
  > Active Edge Routers: 322/322 Online (Cisco, Juniper, Nokia)
  > Microservices: 24/24 Healthy
  > Latency: 24ms P99 | SLA: 99.98% valid`;
    } else if (lower === 'sla') {
      output = `[SLA TELEMETRY REPORT]
  > P99 AsyncIO API Latency: 0.042s
  > SSH Command Concurrency: < 50ms
  > Mean Time to Recovery (MTTR): < 180s
  > Integration Test Coverage: > 92%
  > Production Incidents: 0 Breaches`;
    } else if (lower === 'telemetry') {
      output = `[OPTIC ATTENUATION PROBE]
  > Scanning 50,000+ optic ports...
  > core-agg-tor-042 [Port 1-48]: Attenuation -3.2 dBm [OPTIMAL]
  > core-edge-tor-108 [Port 1-48]: Attenuation -2.9 dBm [OPTIMAL]
  > 0 optical degradations detected across live core segments.`;
    } else if (lower === 'skills') {
      output = `[TECHNICAL REPERTOIRE]
  * Core: Python 3.12, TypeScript, JavaScript, SQL (ANSI), Java
  * Backend: FastAPI, Django/DRF, Flask, RESTful APIs, gRPC
  * Data: PostgreSQL, MySQL, Redis, MongoDB, Oracle DB, TimescaleDB
  * Cloud/Infra: Docker, AWS EC2, GitHub Actions, Paramiko, SNMPv3`;
    } else if (lower === 'download-cv') {
      onOpenCvModal();
      output = `[SUCCESS] Opened Curriculum Vitae export panel.`;
    } else if (lower === 'clear') {
      setHistory([]);
      setInputCommand('');
      return;
    } else if (lower === 'exit' || lower === 'quit') {
      onClose();
      return;
    } else {
      output = `command not found: "${cmd}". Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputCommand('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl h-[600px] max-h-[90vh] bg-[#0a0e16] border border-[#262a33] rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#181c24] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
            <span className="w-3 h-3 rounded-full bg-[#009bd1]"></span>
            <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
            <span className="text-xs text-[#908fa0] ml-2">
              kumar@edge-cluster-tor-042:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#908fa0] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Terminal Output scroll */}
        <div className="p-4 overflow-y-auto flex-1 text-xs text-[#dfe2ee] flex flex-col gap-3">
          {history.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#c0c1ff]">
                <span className="text-[#4edea3] font-bold">kumar@telecom-core:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="text-[#c7c4d7] whitespace-pre-wrap pl-2 border-l border-[#262a33]">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Preset quick command buttons */}
        <div className="px-4 py-2 bg-[#141820] border-t border-[#262a33] flex flex-wrap gap-1.5 text-[11px]">
          <span className="text-[#908fa0] py-0.5">Quick:</span>
          {['status', 'sla', 'telemetry', 'skills', 'download-cv'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInputCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-[#1c2028] hover:bg-[#262a33] text-[#7bd0ff] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-[#0a0e16] border-t border-[#262a33] flex items-center gap-2"
        >
          <span className="text-[#4edea3] text-xs font-bold">kumar@telecom-core:~$</span>
          <input
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder="Type 'help', 'status', 'sla', or 'download-cv'..."
            autoFocus
            className="flex-1 bg-transparent text-xs text-[#dfe2ee] placeholder-[#908fa0] focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-[#262a33] hover:bg-[#8083ff] hover:text-[#1000a9] text-[#dfe2ee] text-xs font-semibold transition-colors"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};

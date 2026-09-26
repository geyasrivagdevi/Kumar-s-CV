import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [latency, setLatency] = useState<number>(24);
  const [isPinging, setIsPinging] = useState<boolean>(false);

  const handlePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setLatency(Math.floor(18 + Math.random() * 10));
      setIsPinging(false);
    }, 400);
  };

  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#262a33] mt-20 shadow-[0_-1px_12px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePing}
            title="Click to test live network ping"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] ${
                  isPinging ? 'opacity-100 scale-125' : 'opacity-75'
                }`}
              ></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.6)]"></span>
            </div>
            <span className="font-mono text-xs text-[#c7c4d7]">
              SYS_STATUS:{' '}
              <span className="text-[#4edea3] font-semibold">PRODUCTION_HEALTHY</span> // LATENCY:{' '}
              <span className="text-[#c0c1ff] font-semibold">{latency}ms</span>
            </span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#908fa0] text-center">
          © 2025 {PERSONAL_INFO.name}. Architected with high-concurrency principles.
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors font-mono text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors font-mono text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">badge</span>
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors font-mono text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

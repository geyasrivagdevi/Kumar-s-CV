import React from 'react';
import { ActiveScreen } from '../types';

interface CtaSectionProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  onOpenCvModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ setActiveScreen, onOpenCvModal }) => {
  return (
    <section className="w-full py-16" id="contact-cta">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#181c24] via-[#1c2028] to-[#181c24] border border-[#262a33] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center flex flex-col items-center">
        {/* Ambient Underglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8083ff]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-5">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#262a33] border border-[#31353e] shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.7)] animate-pulse"></span>
            <span className="font-mono text-xs text-[#4edea3] font-semibold uppercase tracking-wider">
              Ready for Immediate Engagement
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dfe2ee] tracking-tight leading-tight">
            Let's build something remarkable.
          </h2>

          <p className="text-base sm:text-lg text-[#c7c4d7] leading-relaxed">
            Whether you are designing a high-concurrency microservice infrastructure,
            modernizing legacy enterprise systems, or scaling distributed backend services—let's
            discuss architectural solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => {
                setActiveScreen('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8083ff] text-[#1000a9] font-bold text-sm hover:bg-[#c0c1ff] transition-all duration-200 shadow-[0_0_20px_rgba(128,131,255,0.35)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Initiate Dialogue</span>
            </button>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#262a33] text-[#dfe2ee] font-medium text-sm hover:bg-[#353942] border border-[#31353e] transition-all duration-200 shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Download Full CV (PDF)</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[#908fa0] font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#4edea3]">
              <span className="material-symbols-outlined text-[16px]">shield</span>
              Canadian PR Verified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-[#7bd0ff]">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              EST / PST Alignment
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-[#c0c1ff]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Direct Hire / Contract
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

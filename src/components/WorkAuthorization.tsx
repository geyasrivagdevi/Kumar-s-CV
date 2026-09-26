import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WorkAuthorization: React.FC = () => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl bg-[#181c24] border border-[#262a33] p-5 lg:p-7 shadow-lg">
        {/* Photo Column */}
        <div className="md:col-span-4 h-52 sm:h-56 rounded-xl overflow-hidden relative border border-[#262a33] group">
          <img
            src={PERSONAL_INFO.workspacePhoto}
            alt="Software architect dual-monitor workstation in Toronto"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/80 via-transparent to-transparent flex items-end p-3">
            <span className="font-mono text-[11px] text-[#dfe2ee] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
              Toronto Engineering Command Studio
            </span>
          </div>
        </div>

        {/* Text Column */}
        <div className="md:col-span-8 flex flex-col gap-2.5 p-2">
          <span className="font-mono text-xs text-[#7bd0ff] font-bold uppercase tracking-wider">
            Location &amp; Work Authorization
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-[#dfe2ee]">
            Based in Toronto, ON • Unrestricted Canadian Work Rights
          </h3>

          <p className="text-sm text-[#c7c4d7] leading-relaxed">
            Fully authorized to work anywhere across Canada without visa sponsorship (Canadian
            Permanent Resident). Available immediately for Senior Backend Engineer, Software
            Architect, or Full-Stack Lead opportunities with high-scale tech firms and enterprise
            teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-[#908fa0]">
            <span className="flex items-center gap-1.5 text-[#4edea3] font-medium">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Toronto On-Site / Hybrid
            </span>
            <span className="flex items-center gap-1.5 text-[#c0c1ff] font-medium">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Remote Across North America
            </span>
            <span className="flex items-center gap-1.5 text-[#7bd0ff] font-medium">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              SIN &amp; PR Documentation Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

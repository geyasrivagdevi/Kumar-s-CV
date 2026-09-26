import React from 'react';

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="w-full py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Experience */}
        <div className="p-6 rounded-xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:bg-[#1c2028] hover:border-[#8083ff]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
              Experience
            </span>
            <div className="w-9 h-9 rounded-lg bg-[#262a33] flex items-center justify-center text-[#c0c1ff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#dfe2ee]">5+ Years</div>
            <p className="text-xs text-[#c7c4d7] mt-1.5 leading-relaxed">
              Enterprise production backend &amp; full-stack delivery
            </p>
          </div>
          <div className="mt-4 pt-2 border-t border-[#262a33] flex items-center gap-1.5 text-[#4edea3] font-mono text-[11px] font-medium">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            <span>Senior Architectural Track</span>
          </div>
        </div>

        {/* Metric 2: Telecom Infra */}
        <div className="p-6 rounded-xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:bg-[#1c2028] hover:border-[#4edea3]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
              Telecom Infra
            </span>
            <div className="w-9 h-9 rounded-lg bg-[#262a33] flex items-center justify-center text-[#4edea3] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">router</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#dfe2ee]">322+ Routers</div>
            <p className="text-xs text-[#c7c4d7] mt-1.5 leading-relaxed">
              Automated multi-vendor routing nodes at telecom edge
            </p>
          </div>
          <div className="mt-4 pt-2 border-t border-[#262a33] flex flex-col gap-1.5">
            <div className="flex justify-between font-mono text-[11px] text-[#908fa0]">
              <span>Cluster coverage</span>
              <span className="text-[#4edea3] font-semibold">100% Validated</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#31353e] overflow-hidden">
              <div
                className="h-full bg-[#4edea3] rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(78,222,163,0.5)]"
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Metric 3: Device Scale */}
        <div className="p-6 rounded-xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:bg-[#1c2028] hover:border-[#7bd0ff]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
              Device Scale
            </span>
            <div className="w-9 h-9 rounded-lg bg-[#262a33] flex items-center justify-center text-[#7bd0ff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">settings_ethernet</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#dfe2ee]">50K+ Ports</div>
            <p className="text-xs text-[#c7c4d7] mt-1.5 leading-relaxed">
              Managed switch &amp; optic interfaces via Python telemetry
            </p>
          </div>
          <div className="mt-4 pt-2 border-t border-[#262a33] flex items-center gap-1.5 text-[#7bd0ff] font-mono text-[11px] font-medium">
            <span className="material-symbols-outlined text-[15px]">speed</span>
            <span>Zero-touch audit pipelines</span>
          </div>
        </div>

        {/* Metric 4: Reliability */}
        <div className="p-6 rounded-xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:bg-[#1c2028] hover:border-[#4edea3]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
              Reliability
            </span>
            <div className="w-9 h-9 rounded-lg bg-[#262a33] flex items-center justify-center text-[#4edea3] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">cloud_done</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4edea3]">99.9% Uptime</div>
            <p className="text-xs text-[#c7c4d7] mt-1.5 leading-relaxed">
              SLA guarantee for mission-critical core services
            </p>
          </div>
          <div className="mt-4 pt-2 border-t border-[#262a33] flex items-center justify-between">
            <svg
              className="w-24 h-5 text-[#4edea3] overflow-visible"
              fill="none"
              viewBox="0 0 100 20"
            >
              <path
                d="M0,15 L15,14 L30,12 L45,15 L60,11 L75,13 L90,10 L100,10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
            <span className="font-mono text-[11px] text-[#908fa0]">0 Incident Breaches</span>
          </div>
        </div>
      </div>
    </section>
  );
};

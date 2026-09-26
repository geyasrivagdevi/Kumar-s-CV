import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceView: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const allTechs = ['All', 'Python', 'AsyncIO', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'TypeScript'];

  const filteredExperiences = selectedTech === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) =>
        exp.technologies.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))
      );

  return (
    <div className="w-full py-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-widest">
            Career Track &amp; Architecture Leadership
          </span>
          <span className="text-[#464554]">•</span>
          <span className="font-mono text-[11px] text-[#4edea3]">5+ Years Enterprise</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#dfe2ee] tracking-tight">
          Professional Experience
        </h1>
        <p className="text-base text-[#c7c4d7] max-w-3xl leading-relaxed">
          Proven track record leading backend engineering initiatives, designing distributed systems,
          and delivering telecom-grade automation for millions of end users.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs text-[#908fa0] font-mono shrink-0 mr-1">Filter Stack:</span>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all shrink-0 ${
              selectedTech === tech
                ? 'bg-[#1c2028] text-[#c0c1ff] border-[#8083ff]/60 shadow-[0_0_10px_rgba(192,193,255,0.15)] font-semibold'
                : 'bg-[#181c24] text-[#c7c4d7] border-[#262a33] hover:border-[#31353e]'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col gap-8 relative before:absolute before:top-4 before:bottom-4 before:left-4 md:before:left-8 before:w-0.5 before:bg-[#262a33]">
        {filteredExperiences.map((exp, idx) => (
          <div
            key={exp.id}
            className="relative pl-12 md:pl-20 group"
          >
            {/* Timeline node */}
            <div className="absolute left-2 md:left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#181c24] border-2 border-[#8083ff] group-hover:border-[#4edea3] transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]"></div>
            </div>

            {/* Role Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181c24] border border-[#262a33] hover:border-[#8083ff]/40 transition-all duration-200 shadow-lg flex flex-col gap-5">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#262a33] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#4edea3] font-semibold">
                      ROLE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[#464554]">•</span>
                    <span className="text-xs font-mono text-[#908fa0]">{exp.type}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#dfe2ee] mt-0.5">
                    {exp.role}
                  </h2>
                  <div className="text-sm font-semibold text-[#c0c1ff]">{exp.company}</div>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs text-[#908fa0]">
                  <span className="px-2.5 py-1 rounded bg-[#262a33] text-[#dfe2ee] font-semibold border border-[#31353e]">
                    {exp.period}
                  </span>
                  <span className="mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#7bd0ff]">
                      location_on
                    </span>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#c7c4d7] leading-relaxed">{exp.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {exp.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col"
                  >
                    <span className="text-xl font-bold text-[#4edea3]">{m.value}</span>
                    <span className="font-mono text-[11px] text-[#908fa0]">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Key Achievements */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
                  Key Architectural Contributions
                </span>
                <ul className="flex flex-col gap-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c7c4d7]">
                      <span className="material-symbols-outlined text-[16px] text-[#8083ff] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack used */}
              <div className="pt-2 border-t border-[#262a33] flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-[#908fa0]">Toolchain:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1c2028] text-[#dfe2ee] border border-[#262a33]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'formatted' | 'markdown'>('formatted');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownText = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Work Rights: ${PERSONAL_INFO.authorization}
Email: ${PERSONAL_INFO.email}
Specialization: ${PERSONAL_INFO.specialization}

==================================================
SUMMARY
==================================================
Software Architect & Backend Engineer with 5+ years specializing in high-throughput Python backends, distributed microservices, TypeScript interfaces, and telecom-grade cloud automation across enterprise infrastructure. Led national telecom edge automation for 322+ multi-vendor core routers.

==================================================
CORE TECHNICAL REPERTOIRE
==================================================
${SKILL_CATEGORIES.map((c) => `- ${c.name}: ${c.skills.join(', ')}`).join('\n')}

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${EXPERIENCES.map(
  (e) => `## ${e.role} | ${e.company}
Period: ${e.period} | Location: ${e.location}
${e.description}

Key Achievements:
${e.achievements.map((a) => `* ${a}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`
).join('\n')}
`;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdownText], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'Kumar_Guddepogu_Software_Architect_CV.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText?.(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#181c24] border border-[#262a33] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#141820] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#262a33] flex items-center justify-center text-[#c0c1ff]">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#dfe2ee]">Curriculum Vitae</h2>
              <p className="text-xs font-mono text-[#4edea3]">
                Kumar Guddepogu • Canadian Permanent Resident
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View mode tabs */}
            <div className="flex items-center bg-[#0a0e16] p-1 rounded-lg border border-[#262a33]">
              <button
                onClick={() => setTab('formatted')}
                className={`font-mono text-xs px-3 py-1 rounded transition-colors ${
                  tab === 'formatted'
                    ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold'
                    : 'text-[#908fa0] hover:text-[#dfe2ee]'
                }`}
              >
                Visual Preview
              </button>
              <button
                onClick={() => setTab('markdown')}
                className={`font-mono text-xs px-3 py-1 rounded transition-colors ${
                  tab === 'markdown'
                    ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold'
                    : 'text-[#908fa0] hover:text-[#dfe2ee]'
                }`}
              >
                Markdown / Plain
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-[#262a33] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-[#dfe2ee]">
          {tab === 'formatted' ? (
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {/* Header profile */}
              <div className="border-b border-[#262a33] pb-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h1>
                    <div className="text-sm font-semibold text-[#8083ff] mt-0.5">
                      {PERSONAL_INFO.title}
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#1c2028] border border-[#4edea3]/40 text-[#4edea3]">
                    Canadian PR Holder
                  </span>
                </div>
                <p className="text-xs text-[#c7c4d7] mt-1">{PERSONAL_INFO.specialization}</p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-[#908fa0] pt-2">
                  <span>📍 {PERSONAL_INFO.location}</span>
                  <span>✉️ {PERSONAL_INFO.email}</span>
                  <span>💼 5+ Years Production Experience</span>
                </div>
              </div>

              {/* Skills summary */}
              <div>
                <h3 className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-wider mb-2">
                  Core Skills &amp; Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="p-3 rounded-lg bg-[#1c2028] border border-[#262a33]">
                      <span className="font-bold text-[#dfe2ee]">{cat.name}:</span>
                      <p className="text-[#908fa0] mt-1 font-mono text-[11px]">
                        {cat.skills.join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience list */}
              <div>
                <h3 className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-wider mb-3">
                  Professional Experience
                </h3>
                <div className="flex flex-col gap-4">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col gap-2 text-xs"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-sm text-[#dfe2ee]">{exp.role}</div>
                          <div className="text-[#4edea3] font-mono">{exp.company}</div>
                        </div>
                        <span className="font-mono text-[11px] text-[#908fa0] bg-[#141820] px-2 py-0.5 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#c7c4d7] mt-1">{exp.description}</p>
                      <ul className="list-disc pl-4 text-[#908fa0] flex flex-col gap-1 mt-1">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <pre className="font-mono text-xs text-[#c7c4d7] whitespace-pre-wrap bg-[#0a0e16] p-4 rounded-xl border border-[#262a33] overflow-x-auto leading-relaxed">
              {markdownText}
            </pre>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#141820] border-t border-[#262a33] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#908fa0]">
            Format: PDF-Ready &amp; Markdown Export
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-mono text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-mono text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8083ff] text-[#1000a9] font-semibold text-xs hover:bg-[#c0c1ff] transition-all shadow-[0_0_12px_rgba(128,131,255,0.3)]"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download .MD</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

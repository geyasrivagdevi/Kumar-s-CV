import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Senior Backend / Architecture Role',
    subject: '',
    message: '',
  });

  const [estHour, setEstHour] = useState<number>(14); // 2:00 PM EST default

  const formatHour = (h: number) => {
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:00 ${period}`;
  };

  const calculateOtherTime = (offset: number) => {
    const raw = (estHour + offset + 24) % 24;
    return formatHour(raw);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full py-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-widest">
            Direct Communication &amp; Consultation
          </span>
          <span className="text-[#464554]">•</span>
          <span className="font-mono text-[11px] text-[#4edea3]">Unrestricted Canadian PR</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#dfe2ee] tracking-tight">
          Initiate Dialogue
        </h1>
        <p className="text-base text-[#c7c4d7] max-w-3xl leading-relaxed">
          Open to discuss full-time Senior Backend Engineer, Software Architect, or Principal Systems
          opportunities across Canada and North America.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact info & Timezone sync (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick contact card */}
          <div className="p-6 rounded-2xl bg-[#181c24] border border-[#262a33] shadow-lg flex flex-col gap-5">
            <h2 className="text-lg font-bold text-[#dfe2ee] flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#8083ff]">
                contact_mail
              </span>
              <span>Contact Coordinates</span>
            </h2>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#7bd0ff] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#908fa0]">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[#dfe2ee] hover:text-[#c0c1ff] font-mono text-xs transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#4edea3] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#908fa0]">Base Location</span>
                  <span className="text-[#dfe2ee] font-medium">Toronto, Ontario, Canada</span>
                  <span className="font-mono text-[11px] text-[#4edea3]">
                    Canadian Permanent Resident (No sponsorship required)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#c0c1ff] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#908fa0]">Work Modes</span>
                  <span className="text-[#dfe2ee]">
                    Toronto On-Site / Hybrid • Remote Across North America
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timezone Alignment Assistant */}
          <div className="p-6 rounded-2xl bg-[#181c24] border border-[#262a33] shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#dfe2ee] flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#7bd0ff]">
                  schedule
                </span>
                <span>Timezone Alignment Assistant</span>
              </h2>
              <span className="font-mono text-xs text-[#4edea3] font-semibold">EST / Toronto</span>
            </div>

            <p className="text-xs text-[#c7c4d7]">
              Seamless communication overlap across North American and European engineering teams:
            </p>

            {/* Slider */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex justify-between font-mono text-xs text-[#908fa0]">
                <span>Toronto EST:</span>
                <span className="text-[#c0c1ff] font-bold">{formatHour(estHour)}</span>
              </div>
              <input
                type="range"
                min="8"
                max="20"
                value={estHour}
                onChange={(e) => setEstHour(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#262a33] rounded-lg appearance-none cursor-pointer accent-[#8083ff]"
              />
            </div>

            {/* Time comparison grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0]">San Francisco (PST)</span>
                <span className="font-mono text-xs text-[#dfe2ee] font-semibold mt-0.5">
                  {calculateOtherTime(-3)}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0]">London (GMT)</span>
                <span className="font-mono text-xs text-[#dfe2ee] font-semibold mt-0.5">
                  {calculateOtherTime(5)}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0]">UTC Standard</span>
                <span className="font-mono text-xs text-[#dfe2ee] font-semibold mt-0.5">
                  {calculateOtherTime(4)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181c24] border border-[#262a33] shadow-xl">
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 flex items-center justify-center text-[#4edea3]">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <h2 className="text-2xl font-bold text-[#dfe2ee]">Message Dispatched</h2>
                <p className="text-sm text-[#c7c4d7] max-w-md">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry
                  regarding <strong className="text-[#c0c1ff]">{formData.topic}</strong> has been
                  transmitted. Kumar typically responds within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      topic: 'Senior Backend / Architecture Role',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="mt-2 px-5 py-2.5 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] text-xs font-mono transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#dfe2ee]">Send an Architectural Inquiry</h2>
                  <p className="text-xs text-[#908fa0] mt-0.5">
                    Direct inbox delivery. All correspondence is held strictly confidential.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-[#c7c4d7]">
                      Your Name <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] text-[#dfe2ee] placeholder-[#908fa0] text-sm focus:outline-none focus:border-[#8083ff] focus:ring-1 focus:ring-[#8083ff] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-[#c7c4d7]">
                      Work Email <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] text-[#dfe2ee] placeholder-[#908fa0] text-sm focus:outline-none focus:border-[#8083ff] focus:ring-1 focus:ring-[#8083ff] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#c7c4d7]">Engagement Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] text-[#dfe2ee] text-sm focus:outline-none focus:border-[#8083ff] transition-all"
                  >
                    <option value="Senior Backend / Architecture Role">
                      Senior Backend / Architecture Role (Direct Hire)
                    </option>
                    <option value="Contract / Telecom Automation Project">
                      Contract / Telecom Automation Project
                    </option>
                    <option value="Technical Advisory / Systems Audit">
                      Technical Advisory / Systems Audit
                    </option>
                    <option value="General Engineering Dialogue">General Engineering Dialogue</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#c7c4d7]">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Architectural Leadership Opportunity - Toronto / Hybrid"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] text-[#dfe2ee] placeholder-[#908fa0] text-sm focus:outline-none focus:border-[#8083ff] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#c7c4d7]">
                    Message / Project Parameters <span className="text-[#ffb4ab]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your architectural requirements, stack specifications, or role timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#1c2028] border border-[#262a33] text-[#dfe2ee] placeholder-[#908fa0] text-sm focus:outline-none focus:border-[#8083ff] transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#8083ff] text-[#1000a9] font-bold text-sm hover:bg-[#c0c1ff] transition-all duration-200 shadow-[0_0_16px_rgba(128,131,255,0.3)] active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Transmit Dialogue Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

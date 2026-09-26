import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveScreen; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f131c]/90 backdrop-blur-xl border-b border-[#262a33]/60 shadow-[0_1px_12px_rgba(0,0,0,0.45)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveScreen('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img
              src={PERSONAL_INFO.logoUrl}
              alt="Brand logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-[#dfe2ee] tracking-tight group-hover:text-white transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
                </span>
                <span className="font-mono text-[10.5px] text-[#4edea3] font-medium tracking-wide uppercase">
                  Available for hire / Canadian PR
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-[#181c24] border border-[#262a33]/60"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScreen(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'bg-[#1c2028] text-[#c0c1ff] shadow-[0_0_12px_rgba(192,193,255,0.18)] font-semibold'
                    : 'text-[#c7c4d7] hover:bg-[#262a33] hover:text-[#dfe2ee]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#8083ff] text-[#1000a9] hover:bg-[#c0c1ff] font-semibold text-xs sm:text-sm transition-all duration-150 shadow-[0_0_16px_rgba(128,131,255,0.3)] active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Download CV</span>
          </button>

          {/* Profile photo */}
          <div className="hidden sm:flex items-center pl-1">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#464554]/50 shadow-md"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#c7c4d7] hover:bg-[#181c24] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#262a33] bg-[#0f131c] px-4 py-3 flex flex-col gap-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScreen(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1c2028] text-[#c0c1ff] font-semibold'
                    : 'text-[#c7c4d7] hover:bg-[#181c24]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

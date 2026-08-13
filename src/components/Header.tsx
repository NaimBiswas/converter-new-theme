import React from 'react';

interface HeaderProps {
  onOpenToolsModal: () => void;
  onOpenPricingModal: () => void;
  onOpenApiModal: () => void;
  onOpenAuthModal: () => void;
  onScrollToHowItWorks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenToolsModal,
  onOpenPricingModal,
  onOpenApiModal,
  onOpenAuthModal,
  onScrollToHowItWorks,
}) => {
  return (
    <header className="bg-[#f8f9fa] top-0 z-50 sticky border-b border-[#e1e3e4] w-full">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-8 h-20 w-full">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="material-symbols-outlined text-[#0058be] text-3xl group-hover:rotate-180 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>
            cycle
          </span>
          <span className="text-xl font-bold text-[#0058be] tracking-tight font-heading">
            ConvertFlow
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center">
          <button
            onClick={onOpenToolsModal}
            className="text-sm font-semibold text-[#424754] hover:text-[#0058be] transition-colors cursor-pointer"
          >
            Tools
          </button>
          <button
            onClick={onScrollToHowItWorks}
            className="text-sm font-semibold text-[#424754] hover:text-[#0058be] transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <button
            onClick={onOpenPricingModal}
            className="text-sm font-semibold text-[#424754] hover:text-[#0058be] transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={onOpenApiModal}
            className="text-sm font-semibold text-[#424754] hover:text-[#0058be] transition-colors cursor-pointer"
          >
            API
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAuthModal}
            className="hidden md:block text-sm font-semibold text-[#424754] hover:text-[#0058be] px-3 py-1.5 transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <button
            onClick={onOpenAuthModal}
            className="bg-[#0058be] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2170e4] active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

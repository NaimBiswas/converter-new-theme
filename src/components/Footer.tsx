import React from 'react';

interface FooterProps {
  onOpenToolsModal: () => void;
  onOpenPricingModal: () => void;
  onOpenApiModal: () => void;
  onScrollToHowItWorks: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenToolsModal,
  onOpenPricingModal,
  onOpenApiModal,
  onScrollToHowItWorks,
}) => {
  return (
    <footer className="bg-[#f3f4f5] w-full py-12 px-4 md:px-8 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#e1e3e4]">
      {/* Brand & Copyright */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="material-symbols-outlined text-[#0058be] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            cycle
          </span>
          <span className="text-lg font-bold text-[#0058be] font-heading">
            ConvertFlow
          </span>
        </div>
        <p className="text-sm text-[#424754]">
          © {new Date().getFullYear()} ConvertFlow. Making file transitions seamless.
        </p>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#424754]">
        <button onClick={onOpenToolsModal} className="hover:text-[#0058be] transition-colors cursor-pointer">
          Privacy Policy
        </button>
        <button onClick={onOpenToolsModal} className="hover:text-[#0058be] transition-colors cursor-pointer">
          Terms of Service
        </button>
        <button onClick={onScrollToHowItWorks} className="hover:text-[#0058be] transition-colors cursor-pointer">
          Help Center
        </button>
        <button onClick={onOpenApiModal} className="hover:text-[#0058be] transition-colors cursor-pointer">
          Contact Us
        </button>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0058be] transition-colors">
          Github
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0058be] transition-colors">
          Twitter
        </a>
      </nav>
    </footer>
  );
};

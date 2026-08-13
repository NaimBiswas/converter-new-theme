import React from 'react';

export type PageView = 'converter' | 'tools' | 'api' | 'pricing' | 'docs';

interface HeaderProps {
  theme: 'light' | 'dark';
  activePage: PageView;
  onSelectPage: (page: PageView) => void;
  onToggleTheme: () => void;
  onOpenAuthModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  activePage,
  onSelectPage,
  onToggleTheme,
  onOpenAuthModal,
}) => {
  const navItems: { id: PageView; label: string; icon: string }[] = [
    { id: 'converter', label: 'Converter Workspace', icon: 'published_with_changes' },
    { id: 'tools', label: 'Tools Directory', icon: 'grid_view' },
    { id: 'api', label: 'Developer API', icon: 'terminal' },
    { id: 'pricing', label: 'Pricing', icon: 'workspace_premium' },
    { id: 'docs', label: 'Docs & Security', icon: 'shield' },
  ];

  return (
    <header className="bg-[#f8f9fa] dark:bg-[#12161f] top-0 z-50 sticky border-b border-[#e1e3e4] dark:border-[#262c3a] w-full transition-colors duration-200">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-8 h-20 w-full">
        {/* Brand Logo */}
        <div 
          onClick={() => onSelectPage('converter')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] flex items-center justify-center text-[#0058be] dark:text-[#38bdf8] group-hover:rotate-180 transition-transform duration-500 shadow-xs">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              transform
            </span>
          </div>
          <span className="text-xl font-extrabold text-[#0058be] dark:text-[#38bdf8] tracking-tight font-heading">
            Data Converter
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-1 items-center bg-[#edeeef] dark:bg-[#1a2333] p-1.5 rounded-full border border-[#e1e3e4]/80 dark:border-[#262c3a]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectPage(item.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#0284c7] text-[#0058be] dark:text-white shadow-xs'
                    : 'text-[#424754] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Mobile page selector */}
          <div className="lg:hidden flex gap-1">
            <button
              onClick={() => onSelectPage('tools')}
              className="text-xs font-bold p-2 text-[#0058be] dark:text-[#38bdf8]"
            >
              Tools
            </button>
            <button
              onClick={() => onSelectPage('pricing')}
              className="text-xs font-bold p-2 text-[#0058be] dark:text-[#38bdf8]"
            >
              Pricing
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-full text-[#424754] dark:text-[#e2e8f0] bg-[#edeeef] dark:bg-[#1e293b] hover:bg-[#e1e3e4] dark:hover:bg-[#334155] transition-all cursor-pointer flex items-center justify-center active:scale-90"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={onOpenAuthModal}
            className="bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#2170e4] dark:hover:bg-[#0369a1] active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

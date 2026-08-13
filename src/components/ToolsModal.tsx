import React, { useState } from 'react';
import { ALL_TOOLS } from '../data/tools';
import { ConversionTool, ToolCategory } from '../types';

interface ToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTool: (tool: ConversionTool) => void;
}

export const ToolsModal: React.FC<ToolsModalProps> = ({
  isOpen,
  onClose,
  onSelectTool,
}) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories: { id: ToolCategory; label: string }[] = [
    { id: 'all', label: 'All Tools' },
    { id: 'documents', label: 'Documents' },
    { id: 'images', label: 'Images' },
    { id: 'data', label: 'Data & Sheets' },
    { id: 'code', label: 'Code & Web' },
  ];

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.fromFormat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.toFormat.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[85vh] flex flex-col soft-shadow animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#e1e3e4] pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1d] font-heading flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058be]">grid_view</span>
              ConvertFlow Tools Directory
            </h2>
            <p className="text-xs md:text-sm text-[#424754]">Browse our collection of 50+ conversion tools</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727785] hover:text-[#191c1d] hover:bg-[#edeeef] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0058be] text-white shadow-sm'
                    : 'bg-[#f3f4f5] text-[#424754] hover:bg-[#e1e3e4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-lg text-[#727785]">
              search
            </span>
            <input
              type="text"
              placeholder="Search format (e.g. PDF, CSV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#f3f4f5] border border-[#c2c6d6] rounded-full text-xs font-medium focus:outline-none focus:border-[#0058be]"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                onSelectTool(tool);
                onClose();
              }}
              className="p-4 bg-[#f8f9fa] hover:bg-white rounded-2xl border border-[#e1e3e4] hover:border-[#adc6ff] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tool.fromBgClass}`}>
                    {tool.fromFormat}
                  </span>
                  <span className="material-symbols-outlined text-xs text-[#727785]">arrow_forward</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tool.toBgClass}`}>
                    {tool.toFormat}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#191c1d] mb-1 font-heading group-hover:text-[#0058be] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs text-[#424754] line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#e1e3e4]/50 flex justify-between items-center text-xs font-semibold text-[#0058be]">
                <span>Launch tool</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}

          {filteredTools.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#424754]">
              <span className="material-symbols-outlined text-4xl mb-2 text-[#727785]">search_off</span>
              <p className="font-semibold">No conversion tools found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

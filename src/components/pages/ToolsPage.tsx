import React, { useState } from 'react';
import { ALL_TOOLS } from '../../data/tools';
import { ConversionTool, ToolCategory } from '../../types';

interface ToolsPageProps {
  onSelectTool: (tool: ConversionTool) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onSelectTool }) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ToolCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Tools', icon: 'grid_view' },
    { id: 'data', label: 'Data', icon: 'data_object' },
    { id: 'spreadsheet', label: 'Spreadsheet', icon: 'grid_on' },
    { id: 'images', label: 'Images', icon: 'image' },
    { id: 'pdf', label: 'PDF Tools', icon: 'picture_as_pdf' },
    { id: 'devtools', label: 'Developer Tools', icon: 'terminal' },
  ];

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.fromFormat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.toFormat.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">apps</span>
          Complete Conversion Directory
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Explore All Converter Tools
        </h1>
        <p className="text-base md:text-lg text-[#424754] dark:text-[#94a3b8]">
          Fast, browser-based conversion utilities for documents, spreadsheets, code, and images with full privacy guarantees.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-white dark:bg-[#161f30] rounded-2xl p-4 soft-shadow border border-[#e1e3e4] dark:border-[#262c3a] mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0058be] dark:bg-[#0284c7] text-white shadow-sm'
                  : 'bg-[#f3f4f5] dark:bg-[#1e293b] text-[#424754] dark:text-[#94a3b8] hover:bg-[#e1e3e4] dark:hover:bg-[#334155]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-lg text-[#727785] dark:text-[#94a3b8]">
            search
          </span>
          <input
            type="text"
            placeholder="Search format (e.g. PDF, CSV, WebP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#f3f4f5] dark:bg-[#1e293b] border border-[#c2c6d6] dark:border-[#334155] text-[#191c1d] dark:text-white rounded-full text-xs font-medium focus:outline-none focus:border-[#0058be] dark:focus:border-[#38bdf8]"
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            onClick={() => onSelectTool(tool)}
            className="p-6 bg-white dark:bg-[#161f30] hover:bg-[#f8f9fa] dark:hover:bg-[#1e293b] rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#adc6ff] dark:hover:border-[#38bdf8] soft-shadow hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tool.fromBgClass}`}>
                    {tool.fromFormat}
                  </span>
                  <span className="material-symbols-outlined text-xs text-[#727785] dark:text-[#94a3b8]">
                    arrow_forward
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tool.toBgClass}`}>
                    {tool.toFormat}
                  </span>
                </div>

                {tool.popular && (
                  <span className="bg-[#6cf8bb]/20 dark:bg-[#059669]/30 text-[#00714d] dark:text-[#34d399] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg text-[#191c1d] dark:text-white mb-2 font-heading group-hover:text-[#0058be] dark:group-hover:text-[#38bdf8] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-[#0058be] dark:text-[#38bdf8]">
                  {tool.iconFrom}
                </span>
                {tool.title}
              </h3>
              <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed mb-4">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#e1e3e4]/60 dark:border-[#262c3a] flex justify-between items-center text-xs font-bold text-[#0058be] dark:text-[#38bdf8]">
              <span>Launch Tool</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        ))}

        {filteredTools.length === 0 && (
          <div className="col-span-full py-16 text-center text-[#424754] dark:text-[#94a3b8] bg-white dark:bg-[#161f30] rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a]">
            <span className="material-symbols-outlined text-5xl mb-2 text-[#727785]">search_off</span>
            <h3 className="text-lg font-bold text-[#191c1d] dark:text-white">No tools found</h3>
            <p className="text-xs mt-1">Try searching for generic terms like "PDF", "CSV", "JSON", or "Image"</p>
          </div>
        )}
      </div>

      {/* Format Matrix Overview */}
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
        <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">grid_on</span>
          Supported Formats Reference Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-[#424754] dark:text-[#94a3b8]">
          <div className="space-y-2 p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-xl border border-[#e1e3e4] dark:border-[#262c3a]">
            <span className="font-bold text-[#191c1d] dark:text-white text-sm block mb-1">Documents</span>
            <p>• PDF (.pdf)</p>
            <p>• Word (.docx, .doc)</p>
            <p>• Plain Text (.txt)</p>
            <p>• Markdown (.md)</p>
          </div>
          <div className="space-y-2 p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-xl border border-[#e1e3e4] dark:border-[#262c3a]">
            <span className="font-bold text-[#191c1d] dark:text-white text-sm block mb-1">Images</span>
            <p>• PNG (.png)</p>
            <p>• JPEG / JPG (.jpg)</p>
            <p>• WebP (.webp)</p>
            <p>• GIF (.gif)</p>
          </div>
          <div className="space-y-2 p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-xl border border-[#e1e3e4] dark:border-[#262c3a]">
            <span className="font-bold text-[#191c1d] dark:text-white text-sm block mb-1">Data Tables</span>
            <p>• CSV Spreadsheet</p>
            <p>• TSV (Tab Separated)</p>
            <p>• JSON Array</p>
            <p>• XML Records</p>
          </div>
          <div className="space-y-2 p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-xl border border-[#e1e3e4] dark:border-[#262c3a]">
            <span className="font-bold text-[#191c1d] dark:text-white text-sm block mb-1">Code & Streams</span>
            <p>• HTML Markup</p>
            <p>• YAML Configurations</p>
            <p>• SQL Insert Scripts</p>
            <p>• Base64 Data Tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

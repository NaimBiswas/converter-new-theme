import React from 'react';
import { ConversionTool } from '../types';
import { ConversionStatsWidget } from './ConversionStatsWidget';

interface PopularToolsProps {
  tools: ConversionTool[];
  onOpenToolsModal: () => void;
  onSelectTool: (tool: ConversionTool) => void;
}

export const PopularTools: React.FC<PopularToolsProps> = ({
  tools,
  onOpenToolsModal,
  onSelectTool,
}) => {
  return (
    <section className="bg-[#f3f4f5] dark:bg-[#12161f] py-16 px-4 md:px-8 w-full border-t border-[#e1e3e4] dark:border-[#262c3a] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        {/* Data Visualization Metrics & Bar Chart */}
        <ConversionStatsWidget />

        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#191c1d] dark:text-white mb-1 font-heading tracking-tight">
              Popular Tools
            </h2>
            <p className="text-base text-[#424754] dark:text-[#94a3b8]">
              The most frequently used conversion paths.
            </p>
          </div>
          <button
            onClick={onOpenToolsModal}
            className="hidden md:flex font-semibold text-sm text-[#0058be] dark:text-[#38bdf8] items-center gap-1 hover:underline cursor-pointer group"
          >
            View all tools
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => onSelectTool(tool)}
              className="bg-white dark:bg-[#161f30] p-6 rounded-2xl soft-shadow border border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#adc6ff] dark:hover:border-[#38bdf8] transition-all hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Format Icons Arrow Flow */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${tool.fromBgClass} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-xl">
                      {tool.iconFrom}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#727785] dark:text-[#94a3b8]">
                    arrow_right_alt
                  </span>
                  <div className={`w-10 h-10 ${tool.toBgClass} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-xl">
                      {tool.iconTo}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#424754] dark:text-[#94a3b8] mb-6 min-h-[48px] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="font-semibold text-sm text-[#0058be] dark:text-[#38bdf8] flex items-center gap-1 group-hover:underline">
                Try it now
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button
          onClick={onOpenToolsModal}
          className="md:hidden mt-8 font-semibold text-sm text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center gap-2 w-full p-3 border border-[#0058be] dark:border-[#38bdf8] rounded-full hover:bg-[#d8e2ff]/30 dark:hover:bg-[#1e293b] transition-colors cursor-pointer"
        >
          View all tools
        </button>
      </div>
    </section>
  );
};


import React from 'react';
import { ConversionTool } from '../types';

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
    <section className="bg-[#f3f4f5] py-20 px-4 md:px-8 w-full border-t border-[#e1e3e4]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#191c1d] mb-1 font-heading tracking-tight">
              Popular Tools
            </h2>
            <p className="text-lg text-[#424754]">
              The most frequently used conversion paths.
            </p>
          </div>
          <button
            onClick={onOpenToolsModal}
            className="hidden md:flex font-semibold text-sm text-[#0058be] items-center gap-1 hover:underline cursor-pointer group"
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
              className="bg-white p-6 rounded-2xl soft-shadow border border-[#e1e3e4] hover:border-[#adc6ff] transition-all hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Format Icons Arrow Flow */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${tool.fromBgClass} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-xl">
                      {tool.iconFrom}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#727785]">
                    arrow_right_alt
                  </span>
                  <div className={`w-10 h-10 ${tool.toBgClass} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-xl">
                      {tool.iconTo}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#191c1d] mb-2 font-heading">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#424754] mb-6 min-h-[48px] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="font-semibold text-sm text-[#0058be] flex items-center gap-1 group-hover:underline">
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
          className="md:hidden mt-8 font-semibold text-sm text-[#0058be] flex items-center justify-center gap-2 w-full p-3 border border-[#0058be] rounded-full hover:bg-[#d8e2ff]/30 transition-colors cursor-pointer"
        >
          View all tools
        </button>
      </div>
    </section>
  );
};

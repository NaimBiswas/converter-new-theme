import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface CategoryData {
  category: string;
  filesConverted: number;
  dataGB: number;
  color: string;
}

export const ConversionStatsWidget: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'files' | 'volume'>('files');

  const chartData: CategoryData[] = [
    { category: 'Spreadsheets', filesConverted: 420500, dataGB: 284.5, color: '#0058be' },
    { category: 'Data (JSON/CSV)', filesConverted: 385200, dataGB: 210.8, color: '#00714d' },
    { category: 'PDF Tools', filesConverted: 290100, dataGB: 195.2, color: '#93000a' },
    { category: 'Images & Media', filesConverted: 245800, dataGB: 112.4, color: '#0284c7' },
    { category: 'Dev Tools', filesConverted: 141320, dataGB: 39.7, color: '#6063ee' },
  ];

  const totalFiles = chartData.reduce((acc, curr) => acc + curr.filesConverted, 0);
  const totalGB = chartData.reduce((acc, curr) => acc + curr.dataGB, 0);

  return (
    <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow mb-12 animate-in fade-in">
      {/* Header with Counters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#e1e3e4] dark:border-[#262c3a]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-2">
            <span className="material-symbols-outlined text-base">monitoring</span>
            Live Platform Insights
          </div>
          <h3 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading tracking-tight">
            Conversion Metrics &amp; Volume
          </h3>
          <p className="text-xs md:text-sm text-[#424754] dark:text-[#94a3b8]">
            Real-time breakdown of client-side processed files and format usage.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-3.5 rounded-2xl border border-[#e1e3e4] dark:border-[#334155]">
            <div className="text-[11px] font-medium text-[#424754] dark:text-[#94a3b8] mb-0.5">
              Files Converted
            </div>
            <div className="text-lg md:text-xl font-black text-[#0058be] dark:text-[#38bdf8] font-heading">
              {(totalFiles / 1000000).toFixed(2)}M+
            </div>
          </div>

          <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-3.5 rounded-2xl border border-[#e1e3e4] dark:border-[#334155]">
            <div className="text-[11px] font-medium text-[#424754] dark:text-[#94a3b8] mb-0.5">
              Data Processed
            </div>
            <div className="text-lg md:text-xl font-black text-[#00714d] dark:text-[#6ee7b7] font-heading">
              {totalGB.toFixed(1)} GB
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-[#f8f9fa] dark:bg-[#1e293b] p-3.5 rounded-2xl border border-[#e1e3e4] dark:border-[#334155]">
            <div className="text-[11px] font-medium text-[#424754] dark:text-[#94a3b8] mb-0.5">
              Avg Processing Speed
            </div>
            <div className="text-lg md:text-xl font-black text-[#6063ee] dark:text-[#c7d2fe] font-heading">
              &lt; 62ms
            </div>
          </div>
        </div>
      </div>

      {/* Chart Controls & Visualization */}
      <div className="pt-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-xs font-bold text-[#424754] dark:text-[#cbd5e1] uppercase tracking-wider">
            Breakdown by Category
          </span>

          <div className="flex bg-[#f3f4f5] dark:bg-[#1e293b] p-1 rounded-xl gap-1">
            <button
              onClick={() => setActiveMetric('files')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMetric === 'files'
                  ? 'bg-white dark:bg-[#161f30] text-[#0058be] dark:text-[#38bdf8] shadow-xs'
                  : 'text-[#424754] dark:text-[#94a3b8] hover:text-[#191c1d]'
              }`}
            >
              Files Count
            </button>
            <button
              onClick={() => setActiveMetric('volume')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMetric === 'volume'
                  ? 'bg-white dark:bg-[#161f30] text-[#0058be] dark:text-[#38bdf8] shadow-xs'
                  : 'text-[#424754] dark:text-[#94a3b8] hover:text-[#191c1d]'
              }`}
            >
              Data Size (GB)
            </button>
          </div>
        </div>

        {/* Recharts Bar Chart */}
        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis
                dataKey="category"
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  activeMetric === 'files' ? `${(value / 1000).toFixed(0)}k` : `${value}G`
                }
              />
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as CategoryData;
                    return (
                      <div className="bg-[#191c1d] text-white p-3 rounded-xl shadow-lg border border-slate-700 text-xs">
                        <div className="font-bold mb-1">{data.category}</div>
                        <div className="text-slate-300">
                          {activeMetric === 'files'
                            ? `Converted: ${data.filesConverted.toLocaleString()} files`
                            : `Processed: ${data.dataGB} GB`}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey={activeMetric === 'files' ? 'filesConverted' : 'dataGB'}
                radius={[8, 8, 0, 0]}
                barSize={36}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Stats Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-[#e1e3e4] dark:border-[#262c3a] pt-4">
          {chartData.map((item) => (
            <div key={item.category} className="flex items-center gap-2 text-xs text-[#424754] dark:text-[#94a3b8]">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="font-medium">{item.category}:</span>
              <span className="font-bold text-[#191c1d] dark:text-white">
                {activeMetric === 'files'
                  ? `${(item.filesConverted / 1000).toFixed(1)}k`
                  : `${item.dataGB} GB`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

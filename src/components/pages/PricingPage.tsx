import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/pricing';

export const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [fileVolume, setFileVolume] = useState<number>(250);

  // ROI calculation based on slider
  const estimatedCostDesktopTool = Math.round((fileVolume / 100) * 19);
  const dataConverterCost = isYearly ? 12 : 16;
  const savings = Math.max(0, estimatedCostDesktopTool - dataConverterCost);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">workspace_premium</span>
          Flexible Plans &amp; ROI
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base md:text-lg text-[#424754] dark:text-[#94a3b8]">
          Choose the right plan for your individual or team conversion workload.
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <span className={`text-xs font-semibold ${!isYearly ? 'text-[#0058be] dark:text-[#38bdf8]' : 'text-[#424754] dark:text-[#94a3b8]'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 bg-[#d8e2ff] dark:bg-[#1e293b] rounded-full p-1 transition-colors relative cursor-pointer"
          >
            <div
              className={`w-4 h-4 bg-[#0058be] dark:bg-[#38bdf8] rounded-full transition-transform ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1.5 ${isYearly ? 'text-[#0058be] dark:text-[#38bdf8]' : 'text-[#424754] dark:text-[#94a3b8]'}`}>
            Annual Billing
            <span className="bg-[#6cf8bb] dark:bg-[#059669] text-[#00714d] dark:text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save 25%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {PRICING_PLANS.map((plan) => {
          const price = isYearly ? plan.priceYearly : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`bg-white dark:bg-[#161f30] rounded-3xl p-8 border transition-all flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-[#0058be] dark:border-[#38bdf8] soft-shadow ring-2 ring-[#0058be]/20 dark:ring-[#38bdf8]/20'
                  : 'border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#adc6ff] dark:hover:border-[#38bdf8]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0058be] dark:bg-[#0284c7] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#191c1d] dark:text-white mb-2 font-heading">{plan.name}</h3>
                <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-6 min-h-[36px]">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#191c1d] dark:text-white font-heading">${price}</span>
                  <span className="text-xs text-[#727785] dark:text-[#94a3b8]"> / month</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-[#191c1d] dark:text-[#e2e8f0]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-[#006c49] dark:text-[#34d399]">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm ${
                  plan.popular
                    ? 'bg-[#0058be] dark:bg-[#0284c7] text-white hover:bg-[#2170e4] dark:hover:bg-[#0369a1]'
                    : 'bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#38bdf8] hover:bg-[#adc6ff] dark:hover:bg-[#334155]'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Savings Calculator */}
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow mb-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading mb-2">
            Calculate Your Estimated Savings
          </h2>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8]">
            Slide to estimate how much you save with Data Converter vs traditional cloud conversion credits.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#191c1d] dark:text-white mb-2">
              <span>Monthly Conversions Workload:</span>
              <span className="text-[#0058be] dark:text-[#38bdf8] text-sm">{fileVolume} files / mo</span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={fileVolume}
              onChange={(e) => setFileVolume(Number(e.target.value))}
              className="w-full accent-[#0058be] dark:accent-[#38bdf8] cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#e1e3e4] dark:border-[#262c3a] text-center">
            <div className="p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-[#727785]">Desktop/API Credit Cost</span>
              <p className="text-xl font-bold text-[#ba1a1a] dark:text-[#f87171]">${estimatedCostDesktopTool}/mo</p>
            </div>
            <div className="p-4 bg-[#f8f9fa] dark:bg-[#0f172a] rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-[#727785]">Data Converter Pro</span>
              <p className="text-xl font-bold text-[#0058be] dark:text-[#38bdf8]">${dataConverterCost}/mo</p>
            </div>
            <div className="p-4 bg-[#f0fdf4] dark:bg-[#064e3b]/30 rounded-2xl border border-[#6cf8bb]">
              <span className="text-[10px] font-bold uppercase text-[#00714d] dark:text-[#34d399]">Your Net Savings</span>
              <p className="text-xl font-extrabold text-[#00714d] dark:text-[#34d399]">${savings}/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

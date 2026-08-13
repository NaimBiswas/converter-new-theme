import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/pricing';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
}) => {
  const [isYearly, setIsYearly] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto soft-shadow animate-in fade-in zoom-in-95 border border-[#e1e3e4] dark:border-[#262c3a]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#e1e3e4] dark:border-[#262c3a] pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">workspace_premium</span>
              Data Converter Pricing Plans
            </h2>
            <p className="text-xs md:text-sm text-[#424754] dark:text-[#94a3b8]">Choose the right plan for your conversion needs</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727785] dark:text-[#94a3b8] hover:text-[#191c1d] dark:hover:text-white hover:bg-[#edeeef] dark:hover:bg-[#1e293b] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center items-center gap-3 mb-8">
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
          <span className={`text-xs font-semibold flex items-center gap-1 ${isYearly ? 'text-[#0058be] dark:text-[#38bdf8]' : 'text-[#424754] dark:text-[#94a3b8]'}`}>
            Annual Billing
            <span className="bg-[#6cf8bb] dark:bg-[#059669] text-[#00714d] dark:text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save 25%
            </span>
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`bg-[#f8f9fa] dark:bg-[#0f172a] rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-[#0058be] dark:border-[#38bdf8] bg-white dark:bg-[#1e293b] soft-shadow ring-2 ring-[#0058be]/20 dark:ring-[#38bdf8]/20'
                    : 'border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#adc6ff] dark:hover:border-[#38bdf8]'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0058be] dark:bg-[#0284c7] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#191c1d] dark:text-white mb-1 font-heading">{plan.name}</h3>
                  <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-4 min-h-[36px]">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-[#191c1d] dark:text-white font-heading">${price}</span>
                    <span className="text-xs text-[#727785] dark:text-[#94a3b8]"> / month</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-[#191c1d] dark:text-[#e2e8f0]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#006c49] dark:text-[#34d399]">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onSelectPlan(plan.name);
                    onClose();
                  }}
                  className={`w-full py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#0058be] dark:bg-[#0284c7] text-white hover:bg-[#2170e4] dark:hover:bg-[#0369a1] shadow-sm'
                      : 'bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#38bdf8] hover:bg-[#adc6ff] dark:hover:bg-[#334155]'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

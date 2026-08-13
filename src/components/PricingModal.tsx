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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto soft-shadow animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#e1e3e4] pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1d] font-heading flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058be]">workspace_premium</span>
              ConvertFlow Pricing Plans
            </h2>
            <p className="text-xs md:text-sm text-[#424754]">Choose the right plan for your conversion needs</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727785] hover:text-[#191c1d] hover:bg-[#edeeef] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <span className={`text-xs font-semibold ${!isYearly ? 'text-[#0058be]' : 'text-[#424754]'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 bg-[#d8e2ff] rounded-full p-1 transition-colors relative cursor-pointer"
          >
            <div
              className={`w-4 h-4 bg-[#0058be] rounded-full transition-transform ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1 ${isYearly ? 'text-[#0058be]' : 'text-[#424754]'}`}>
            Annual Billing
            <span className="bg-[#6cf8bb] text-[#00714d] text-[10px] font-bold px-2 py-0.5 rounded-full">
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
                className={`bg-[#f8f9fa] rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-[#0058be] bg-white soft-shadow ring-2 ring-[#0058be]/20'
                    : 'border-[#e1e3e4] hover:border-[#adc6ff]'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0058be] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#191c1d] mb-1 font-heading">{plan.name}</h3>
                  <p className="text-xs text-[#424754] mb-4 min-h-[36px]">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-[#191c1d] font-heading">${price}</span>
                    <span className="text-xs text-[#727785]"> / month</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-[#191c1d]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#006c49]">check_circle</span>
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
                      ? 'bg-[#0058be] text-white hover:bg-[#2170e4] shadow-sm'
                      : 'bg-[#d8e2ff] text-[#004395] hover:bg-[#adc6ff]'
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

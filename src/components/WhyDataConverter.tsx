import React from 'react';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  badge: string;
  badgeColorClass: string;
}

export const WhyDataConverter: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: 'security',
      title: '100% Private & Browser Native',
      description: 'Your files are processed locally in your browser memory using HTML5 and WebAssembly. Nothing is ever uploaded to external servers.',
      badge: 'Zero Cloud Uploads',
      badgeColorClass: 'bg-[#6cf8bb] text-[#00714d] dark:bg-[#064e3b] dark:text-[#6ee7b7]',
    },
    {
      icon: 'bolt',
      title: 'Ultra-Fast Conversion Engine',
      description: 'Convert heavy CSV spreadsheets, large JSON datasets, and multi-page PDFs in milliseconds without waiting in server queues.',
      badge: 'Sub-60ms Execution',
      badgeColorClass: 'bg-[#d8e2ff] text-[#004395] dark:bg-[#1e3a8a] dark:text-[#93c5fd]',
    },
    {
      icon: 'grid_view',
      title: '50+ File & Data Formats',
      description: 'Comprehensive support across Data (CSV, JSON, XML, YAML), Spreadsheets (Excel .xlsx), Images (JPG, PNG, WebP), PDFs, and Dev Tools.',
      badge: 'All-in-One Suite',
      badgeColorClass: 'bg-[#e1e0ff] text-[#2f2ebe] dark:bg-[#312e81] dark:text-[#a5b4fc]',
    },
    {
      icon: 'terminal',
      title: 'Developer API & Automation',
      description: 'Easily integrate data conversion channels directly into your CI/CD pipelines, backend microservices, or custom scripts.',
      badge: 'REST & CLI Support',
      badgeColorClass: 'bg-[#ffdad6] text-[#93000a] dark:bg-[#7f1d1d] dark:text-[#fca5a5]',
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e121a] py-16 px-4 md:px-8 w-full border-t border-[#e1e3e4] dark:border-[#262c3a] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
            <span className="material-symbols-outlined text-base">verified</span>
            Built for Modern Workflows
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
            Why Choose Data Converter?
          </h2>
          <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8]">
            Engineered for developers, data analysts, and privacy-conscious professionals who demand speed, security, and precision.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9fa] dark:bg-[#161f30] p-6 rounded-3xl border border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#0058be] dark:hover:border-[#0284c7] transition-all duration-300 flex flex-col justify-between group soft-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.badgeColorClass}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#191c1d] dark:text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#f0f4ff] via-[#e8f0fe] to-[#f0f4ff] dark:from-[#162032] dark:via-[#1a263d] dark:to-[#162032] rounded-3xl p-6 md:p-8 border border-[#d8e2ff] dark:border-[#26354f] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0058be] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">shield_lock</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#191c1d] dark:text-white font-heading">
                Need enterprise compliance or offline execution?
              </h4>
              <p className="text-xs text-[#424754] dark:text-[#94a3b8]">
                Data Converter operates 100% client-side with no tracking cookies or server log persistence.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#0e121a] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold border border-[#e1e3e4] dark:border-[#262c3a]">
              <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-pulse"></span>
              GDPR Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#0e121a] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold border border-[#e1e3e4] dark:border-[#262c3a]">
              SOC2 Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

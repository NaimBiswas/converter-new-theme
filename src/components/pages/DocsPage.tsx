import React from 'react';
import { useJsonLd } from '../../utils/structuredData';

const faqs = [
  {
    q: 'Is there a file size limit for free conversions?',
    a: 'Standard files up to 50MB convert completely free of charge. For larger files (up to 2GB) or batch multi-file operations, upgrade to Data Converter Pro.',
  },
  {
    q: 'Can I use the REST API in my custom SaaS application?',
    a: 'Yes! Our Developer REST API supports programmatic integrations with cURL, Node.js, Python, PHP, and Go with 10,000 monthly request quotas included in Pro.',
  },
  {
    q: 'Are my documents saved or analyzed for AI training?',
    a: 'Never. We guarantee 100% data privacy. Your files exist only in your browser tab session and are destroyed when you close or refresh the page.',
  },
];

export const DocsPage: React.FC = () => {
  useJsonLd('docs-faq', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">verified_user</span>
          Security &amp; Knowledge Base
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Privacy &amp; Technical Architecture
        </h1>
        <p className="text-base md:text-lg text-[#424754] dark:text-[#94a3b8]">
          Learn how Data Converter protects your confidential files with local client-side processing technology.
        </p>
      </div>

      {/* Security Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
          <div className="w-12 h-12 bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">lock</span>
          </div>
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
            Zero Cloud Storage
          </h2>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
            Your files are processed directly inside your browser memory using HTML5 JavaScript and Web API workers. Your data is never uploaded to remote cloud servers.
          </p>
        </div>

        <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
          <div className="w-12 h-12 bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">speed</span>
          </div>
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
            Sub-Second Conversions
          </h2>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
            No waiting in long server conversion queues or network upload throttles. Files convert in milliseconds on your local CPU.
          </p>
        </div>

        <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
          <div className="w-12 h-12 bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">shield</span>
          </div>
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
            GDPR &amp; HIPAA Compliant
          </h2>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
            Because personal and confidential data never leaves your client browser, Data Converter fully complies with strict international data protection laws.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
        <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">help</span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 text-sm text-[#191c1d] dark:text-[#e2e8f0]">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={i > 0 ? 'pt-4 border-t border-[#e1e3e4] dark:border-[#262c3a]' : ''}>
              <h3 className="font-bold text-base text-[#191c1d] dark:text-white mb-1">
                {faq.q}
              </h3>
              <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

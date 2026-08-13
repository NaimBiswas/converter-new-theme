import React from 'react';

export const TermsPage: React.FC<{ onNavigateToContact?: () => void }> = ({ onNavigateToContact }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">description</span>
          Legal Agreement
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8]">
          Effective Date: August 13, 2026 • Please read these terms carefully before using Data Converter.
        </p>
      </div>

      {/* Terms Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-[#161f30] p-5 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a]">
          <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-3 font-bold">
            01
          </div>
          <h3 className="text-sm font-bold text-[#191c1d] dark:text-white mb-1 font-heading">File Ownership</h3>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8]">
            You retain 100% intellectual property rights and copyrights over all input and output converted files.
          </p>
        </div>

        <div className="bg-white dark:bg-[#161f30] p-5 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a]">
          <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-3 font-bold">
            02
          </div>
          <h3 className="text-sm font-bold text-[#191c1d] dark:text-white mb-1 font-heading">Acceptable Use</h3>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8]">
            You agree not to use the service to process illicit material or launch denial-of-service automated attacks.
          </p>
        </div>

        <div className="bg-white dark:bg-[#161f30] p-5 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a]">
          <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-3 font-bold">
            03
          </div>
          <h3 className="text-sm font-bold text-[#191c1d] dark:text-white mb-1 font-heading">Service Availability</h3>
          <p className="text-xs text-[#424754] dark:text-[#94a3b8]">
            Free browser utilities are provided "as is". Pro API plans include 99.9% uptime Service Level Agreements.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-10 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow space-y-8 text-sm text-[#424754] dark:text-[#94a3b8] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">handshake</span>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Data Converter web platform, mobile web interfaces, or Developer REST APIs, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use of the service immediately.
          </p>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">verified</span>
            2. License &amp; Intellectual Property
          </h2>
          <p className="mb-2">
            Data Converter grants you a non-exclusive, non-transferable, revocable license to convert files for personal or enterprise commercial purposes.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Your Files:</strong> Data Converter claims zero ownership rights over any code, documents, images, or spreadsheets converted through the service.</li>
            <li><strong>Our Platform:</strong> All visual branding, code libraries, tool logic, and API algorithms remain the exclusive property of Data Converter.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">block</span>
            3. Prohibited Activities
          </h2>
          <p className="mb-2">When using Data Converter, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Reverse-engineer or decompile the client-side application code for unauthorized redistribution.</li>
            <li>Attempt to bypass API quota rate limits using distributed proxy bots.</li>
            <li>Process malware, ransomware payloads, or illegally acquired copyrighted assets.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">shield_moon</span>
            4. Disclaimer of Warranties &amp; Limitation of Liability
          </h2>
          <p>
            The service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for 100% data transformation accuracy, Data Converter shall not be held liable for indirect, incidental, or consequential damages resulting from data formatting discrepancies or browser session interruptions.
          </p>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">mail</span>
            5. Legal Enquiries
          </h2>
          <p className="mb-4">
            If you have questions or legal notices regarding these Terms of Service, please contact our legal team.
          </p>
          {onNavigateToContact && (
            <button
              onClick={onNavigateToContact}
              className="bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#2170e4] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">support_agent</span>
              Contact Legal Team
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

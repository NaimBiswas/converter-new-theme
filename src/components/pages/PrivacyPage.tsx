import React from 'react';

export const PrivacyPage: React.FC<{ onNavigateToContact?: () => void }> = ({ onNavigateToContact }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">privacy_tip</span>
          Data Protection
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8]">
          Last updated: August 13, 2026 • Your data privacy is our highest priority.
        </p>
      </div>

      {/* Security Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white dark:bg-[#161f30] p-4 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a] flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-[#0058be] dark:text-[#38bdf8]">cloud_off</span>
          <div>
            <h3 className="text-xs font-bold text-[#191c1d] dark:text-white">Zero Cloud Uploads</h3>
            <p className="text-[11px] text-[#424754] dark:text-[#94a3b8]">Files process in browser</p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#161f30] p-4 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a] flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-[#0058be] dark:text-[#38bdf8]">delete_sweep</span>
          <div>
            <h3 className="text-xs font-bold text-[#191c1d] dark:text-white">Immediate Erasure</h3>
            <p className="text-[11px] text-[#424754] dark:text-[#94a3b8]">RAM clears on tab close</p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#161f30] p-4 rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a] flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-[#0058be] dark:text-[#38bdf8]">gavel</span>
          <div>
            <h3 className="text-xs font-bold text-[#191c1d] dark:text-white">GDPR &amp; CCPA Ready</h3>
            <p className="text-[11px] text-[#424754] dark:text-[#94a3b8]">Strict compliance</p>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-10 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow space-y-8 text-sm text-[#424754] dark:text-[#94a3b8] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">folder_off</span>
            1. Information We Do Not Collect
          </h2>
          <p className="mb-2">
            Data Converter operates under a strict client-side isolation architecture. When you upload files for conversion (e.g., CSV, JSON, XML, PDF, Excel, JPG, PNG), the conversion logic executes entirely inside your browser using HTML5 JavaScript, WebAssembly, and local Canvas APIs.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>We do not upload, transmit, or store your original files on external cloud servers.</li>
            <li>We do not log the text content, cell values, or metadata of your documents.</li>
            <li>We do not train machine learning models or artificial intelligence on your documents.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">memory</span>
            2. Local Storage &amp; Session Memory
          </h2>
          <p className="mb-2">
            We use minimal browser <code className="bg-[#f3f4f5] dark:bg-[#1e293b] px-1.5 py-0.5 rounded text-xs font-mono text-[#0058be] dark:text-[#38bdf8]">localStorage</code> strictly to persist user UI preferences across sessions, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Dark mode vs Light mode visual theme preference.</li>
            <li>Local UI state for selected tool categories.</li>
          </ul>
          <p className="mt-2 text-xs">
            Clearing your browser cache or site data completely removes these saved local preferences.
          </p>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">api</span>
            3. Developer API &amp; Server-Side Processing
          </h2>
          <p>
            If you optionally choose to integrate our Developer REST API for programmatic server-to-server batch processing, requests are transmitted over encrypted TLS 1.3 connections. Temporary payload buffers are processed in volatile memory only for the duration of the HTTP response stream and are purged immediately.
          </p>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">cookie</span>
            4. Cookies &amp; Analytics
          </h2>
          <p>
            We enforce a zero third-party advertising cookie policy. We do not employ invasive cross-site trackers or sell user telemetry data to third-party data brokers. Aggregated website traffic metrics (such as daily pageviews) may be measured anonymously without identifying individual user accounts.
          </p>
        </section>

        <section className="pt-6 border-t border-[#e1e3e4] dark:border-[#262c3a]">
          <h2 className="text-lg font-bold text-[#191c1d] dark:text-white font-heading mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">contact_support</span>
            5. Contact Privacy Officer
          </h2>
          <p className="mb-4">
            For questions regarding this Privacy Policy or data protection compliance (GDPR / CCPA / HIPAA), please reach out to our privacy compliance team.
          </p>
          {onNavigateToContact && (
            <button
              onClick={onNavigateToContact}
              className="bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#2170e4] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contact Privacy Team
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

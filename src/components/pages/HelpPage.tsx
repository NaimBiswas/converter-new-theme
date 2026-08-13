import React, { useState } from 'react';

interface FAQItem {
  id: string;
  category: 'general' | 'formats' | 'troubleshooting' | 'api';
  question: string;
  answer: string;
}

export const HelpPage: React.FC<{ onNavigateToContact?: () => void; onNavigateToApi?: () => void }> = ({
  onNavigateToContact,
  onNavigateToApi,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: 'How does in-browser file conversion work?',
      answer:
        'Data Converter processes your files locally using standard Web APIs, WebAssembly, and Canvas rendering engines inside your web browser. This means your files are transformed on your device without ever being uploaded to remote cloud servers.',
    },
    {
      id: 'faq-2',
      category: 'formats',
      question: 'Which file formats are supported?',
      answer:
        'We support data formats (CSV, JSON, XML, YAML, TSV), spreadsheet formats (Excel .xlsx, .xls), image formats (JPG, PNG, WebP, GIF), document formats (PDF, DOCX, TXT, HTML, Markdown), and developer encoding (Base64).',
    },
    {
      id: 'faq-3',
      category: 'general',
      question: 'Is there a file size limit?',
      answer:
        'Because processing happens on your device, standard browser sessions handle files up to 100MB smoothly. For enterprise batch conversions or large multi-gigabyte datasets, our REST API provides server-side streaming channels.',
    },
    {
      id: 'faq-4',
      category: 'troubleshooting',
      question: 'Why did my JSON to CSV conversion fail?',
      answer:
        'Make sure your JSON file contains a valid array of objects (e.g. [{"id": 1, "name": "Alice"}]). If your JSON contains circular references or invalid syntax, use our free JSON Validator tool to format it first.',
    },
    {
      id: 'faq-5',
      category: 'troubleshooting',
      question: 'Can I batch convert multiple files at once?',
      answer:
        'Yes! Simply drag and drop multiple files into the workspace dropzone. You can set individual output target formats for each file or click "Convert All Files" for fast simultaneous processing.',
    },
    // {
    //   id: 'faq-6',
    //   category: 'api',
    //   question: 'How do I get a Developer API Key?',
    //   answer:
    //     'You can generate an API key instantly in the Developer API tab. Free accounts include 1,000 monthly conversion calls, while Pro plans include up to 50,000 requests.',
    // },
    {
      id: 'faq-7',
      category: 'formats',
      question: 'Can I convert scanned PDFs into editable text or Word files?',
      answer:
        'Yes, our document engine extracts text streams from standard and scanned PDFs and outputs structured Plain Text, Markdown, or DOCX documents.',
    },
    {
      id: 'faq-8',
      category: 'api',
      question: 'Does the API support cURL, Node.js, and Python?',
      answer:
        'Yes, our REST API standardizes JSON request payloads and multipart form uploads. Code snippets for cURL, JavaScript/Node.js, and Python are provided in the API documentation.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Topics', icon: 'auto_awesome' },
    { id: 'general', label: 'Getting Started', icon: 'rocket_launch' },
    { id: 'formats', label: 'Supported Formats', icon: 'grid_view' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: 'build' },
    // { id: 'api', label: 'Developer API', icon: 'terminal' },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">help</span>
          Help Center &amp; Support
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-4">
          How can we help you?
        </h1>
        <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8] mb-6">
          Find answers to common questions about file conversions, security, format rules, and API integration.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#424754] dark:text-[#94a3b8]">
            search
          </span>
          <input
            type="text"
            placeholder="Search questions (e.g. CSV, JSON, API limits, batch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-[#161f30] border border-[#e1e3e4] dark:border-[#262c3a] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] dark:focus:ring-[#0284c7] shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#424754] dark:text-[#94a3b8] hover:text-[#191c1d] text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#0058be] dark:bg-[#0284c7] text-white shadow-xs'
                : 'bg-white dark:bg-[#161f30] text-[#424754] dark:text-[#94a3b8] border border-[#e1e3e4] dark:border-[#262c3a] hover:border-[#0058be]'
            }`}
          >
            <span className="material-symbols-outlined text-base">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4 mb-12">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-10 border border-[#e1e3e4] dark:border-[#262c3a] text-center">
            <span className="material-symbols-outlined text-4xl text-[#424754] dark:text-[#94a3b8] mb-2">
              search_off
            </span>
            <h3 className="text-base font-bold text-[#191c1d] dark:text-white mb-1">
              No matching help articles found
            </h3>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-4">
              Try searching with different keywords or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-bold text-[#0058be] dark:text-[#38bdf8] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#161f30] rounded-2xl border border-[#e1e3e4] dark:border-[#262c3a] overflow-hidden transition-all soft-shadow"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f8f9fa] dark:hover:bg-[#1a2333] transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-[#191c1d] dark:text-white font-heading">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#0058be] dark:text-[#38bdf8] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#424754] dark:text-[#94a3b8] border-t border-[#e1e3e4]/60 dark:border-[#262c3a]/60 leading-relaxed animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Need Assistance CTA Banner */}
      <div className="bg-gradient-to-r from-[#0058be] to-[#0284c7] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h2 className="text-xl md:text-2xl font-bold font-heading mb-1">Still have questions?</h2>
          <p className="text-xs md:text-sm text-white/90">
            Our engineering &amp; support team is ready to assist you with custom integrations or inquiries.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          {/* {onNavigateToApi && (
            <button
              onClick={onNavigateToApi}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-full backdrop-blur-xs transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">terminal</span>
              API Docs
            </button>
          )} */}
          {onNavigateToContact && (
            <button
              onClick={onNavigateToContact}
              className="bg-white text-[#0058be] text-xs font-bold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              Contact Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

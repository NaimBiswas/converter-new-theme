import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">support_agent</span>
          Get in Touch
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Contact Support &amp; Sales
        </h1>
        <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8]">
          Have questions about Data Converter, API pricing, or custom data formats? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Info Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <h3 className="text-base font-bold text-[#191c1d] dark:text-white mb-1 font-heading">Direct Email</h3>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-3">
              Reach our support engineers directly for technical issues or enterprise billing.
            </p>
            <a
              href="mailto:nayeembiswas2@gmail.com"
              className="text-xs font-bold text-[#0058be] dark:text-[#38bdf8] hover:underline"
            >
              nayeembiswas2@gmail.com
            </a>
          </div>

          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <h3 className="text-base font-bold text-[#191c1d] dark:text-white mb-1 font-heading">Response SLA</h3>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
              <strong>Free Users:</strong> Within 24 hours.<br />
              <strong>Pro &amp; API Key Subscribers:</strong> Priority response in &lt; 2 hours.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <h3 className="text-base font-bold text-[#191c1d] dark:text-white mb-1 font-heading">Global Support</h3>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] leading-relaxed">
              Nk Software Pvt. Ltd.<br />
              Worldwide Remote Support
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#6cf8bb] text-[#00714d] flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
                  Message Sent Successfully!
                </h2>
                <p className="text-sm text-[#424754] dark:text-[#94a3b8] max-w-md mx-auto mb-6">
                  Thank you, <strong>{name}</strong>. Our support team has received your message regarding <strong>"{category}"</strong> and will respond to <strong>{email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#2170e4] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-[#191c1d] dark:text-white font-heading mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">edit_note</span>
                  Send Us a Message
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#424754] dark:text-[#94a3b8] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] dark:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#334155] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#424754] dark:text-[#94a3b8] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] dark:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#334155] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#424754] dark:text-[#94a3b8] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] dark:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#334155] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      {/* <option value="API Integration">API Integration</option>
                      <option value="Billing & Enterprise">Billing &amp; Enterprise</option> */}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#424754] dark:text-[#94a3b8] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Question about CSV batch conversion"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] dark:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#334155] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#424754] dark:text-[#94a3b8] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your issue or custom format requirement..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] dark:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#334155] text-sm text-[#191c1d] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0058be] transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#2170e4] active:scale-98 transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

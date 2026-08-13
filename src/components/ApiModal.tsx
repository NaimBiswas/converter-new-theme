import React, { useState } from 'react';

interface ApiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiModal: React.FC<ApiModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('dc_live_9f83a2e109d76c');
  const [selectedLang, setSelectedLang] = useState<'curl' | 'js' | 'python'>('curl');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateNewKey = () => {
    const randomHex = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    setApiKey(`dc_live_${randomHex}`);
  };

  const codeSnippets = {
    curl: `curl -X POST "https://api.dataconverter.app/v1/convert" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -F "file=@/path/to/document.pdf" \\
  -F "target_format=docx"`,
    js: `const response = await fetch("https://api.dataconverter.app/v1/convert", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ${apiKey}"
  },
  body: formData
});
const result = await response.json();`,
    python: `import requests

headers = {"Authorization": "Bearer ${apiKey}"}
files = {"file": open("document.pdf", "rb")}
data = {"target_format": "docx"}

response = requests.post("https://api.dataconverter.app/v1/convert", headers=headers, files=files, data=data)
print(response.json())`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto soft-shadow animate-in fade-in zoom-in-95 border border-[#e1e3e4] dark:border-[#262c3a]">
        <div className="flex justify-between items-center border-b border-[#e1e3e4] dark:border-[#262c3a] pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1d] dark:text-white font-heading flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">terminal</span>
              Data Converter REST API
            </h2>
            <p className="text-xs md:text-sm text-[#424754] dark:text-[#94a3b8]">Integrate programmatic file conversions directly into your app</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727785] dark:text-[#94a3b8] hover:text-[#191c1d] dark:hover:text-white hover:bg-[#edeeef] dark:hover:bg-[#1e293b] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* API Key Generator */}
        <div className="bg-[#f8f9fa] dark:bg-[#0f172a] rounded-2xl p-5 border border-[#e1e3e4] dark:border-[#262c3a] mb-6">
          <label className="block text-xs font-bold text-[#191c1d] dark:text-white uppercase tracking-wider mb-2">
            Your Active API Key
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={apiKey}
              className="flex-1 bg-white dark:bg-[#1e293b] border border-[#c2c6d6] dark:border-[#334155] rounded-xl px-4 py-2 font-mono text-xs text-[#0058be] dark:text-[#38bdf8] font-bold focus:outline-none"
            />
            <button
              onClick={generateNewKey}
              className="bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#38bdf8] text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#adc6ff] dark:hover:bg-[#334155] transition-colors cursor-pointer"
            >
              Rotate Key
            </button>
          </div>
        </div>

        {/* Code Snippets Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2">
              {(['curl', 'js', 'python'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg uppercase cursor-pointer transition-colors ${
                    selectedLang === lang
                      ? 'bg-[#0058be] dark:bg-[#0284c7] text-white'
                      : 'bg-[#f3f4f5] dark:bg-[#1e293b] text-[#424754] dark:text-[#94a3b8] hover:bg-[#e1e3e4] dark:hover:bg-[#334155]'
                  }`}
                >
                  {lang === 'js' ? 'JavaScript' : lang}
                </button>
              ))}
            </div>

            <button
              onClick={copyCode}
              className="text-xs font-semibold text-[#0058be] dark:text-[#38bdf8] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <div className="bg-[#191c1d] dark:bg-[#090d16] text-[#f0f1f2] rounded-2xl p-5 font-mono text-xs overflow-x-auto border border-transparent dark:border-[#1e293b]">
            <pre>{codeSnippets[selectedLang]}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};


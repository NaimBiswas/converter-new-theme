import React, { useState } from 'react';

export const ApiPage: React.FC = () => {
  const [apiKey, setApiKey] = useState('dc_live_9f83a2e109d76c');
  const [selectedLang, setSelectedLang] = useState<'curl' | 'js' | 'python' | 'go' | 'php'>('curl');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'docs' | 'sandbox'>('docs');

  // Sandbox simulation state
  const [targetFormat, setTargetFormat] = useState('json');
  const [testPayload, setTestPayload] = useState('name,role,department\nAlice,Engineer,Dev\nBob,Designer,UX');
  const [sandboxResult, setSandboxResult] = useState<string | null>(null);
  const [isCallingApi, setIsCallingApi] = useState(false);

  const rotateKey = () => {
    const randomHex = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    setApiKey(`dc_live_${randomHex}`);
  };

  const snippets = {
    curl: `curl -X POST "https://api.metadataconverter.com/v1/convert" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -F "file=@/path/to/dataset.csv" \\
  -F "target_format=${targetFormat}"`,

    js: `const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('target_format', '${targetFormat}');

const response = await fetch("https://api.metadataconverter.com/v1/convert", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ${apiKey}"
  },
  body: formData
});

const result = await response.json();
console.log("Converted File URL:", result.download_url);`,

    python: `import requests

headers = {"Authorization": "Bearer ${apiKey}"}
files = {"file": open("dataset.csv", "rb")}
data = {"target_format": "${targetFormat}"}

response = requests.post(
    "https://api.metadataconverter.com/v1/convert",
    headers=headers,
    files=files,
    data=data
)

print(response.json())`,

    go: `package main

import (
	"fmt"
	"net/http"
)

func main() {
	req, _ := http.NewRequest("POST", "https://api.metadataconverter.com/v1/convert", nil)
	req.Header.Add("Authorization", "Bearer ${apiKey}")
	// Execute HTTP request
	fmt.Println("Converting dataset programmatically...")
}`,

    php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.metadataconverter.com/v1/convert");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer ${apiKey}"]);
curl_setopt($ch, CURLOPT_POST, true);
$response = curl_exec($ch);
curl_close($ch);
?>`
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(snippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestApiCall = () => {
    setIsCallingApi(true);
    setSandboxResult(null);

    setTimeout(() => {
      setIsCallingApi(false);
      if (targetFormat === 'json') {
        setSandboxResult(
          JSON.stringify(
            [
              { name: 'Alice', role: 'Engineer', department: 'Dev' },
              { name: 'Bob', role: 'Designer', department: 'UX' }
            ],
            null,
            2
          )
        );
      } else if (targetFormat === 'xml') {
        setSandboxResult(
          `<?xml version="1.0" encoding="UTF-8"?>\n<records>\n  <item>\n    <name>Alice</name>\n    <role>Engineer</role>\n  </item>\n  <item>\n    <name>Bob</name>\n    <role>Designer</role>\n  </item>\n</records>`
        );
      } else {
        setSandboxResult(`| name | role | department |\n| --- | --- | --- |\n| Alice | Engineer | Dev |\n| Bob | Designer | UX |`);
      }
    }, 600);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 w-full animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-3">
          <span className="material-symbols-outlined text-base">terminal</span>
          Developer Platform
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Data Converter REST API
        </h1>
        <p className="text-base md:text-lg text-[#424754] dark:text-[#94a3b8]">
          Programmatically automate batch conversions in your app with sub-second response times and 99.99% uptime.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('docs')}
          className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'docs'
              ? 'bg-[#0058be] dark:bg-[#0284c7] text-white shadow-sm'
              : 'bg-white dark:bg-[#161f30] text-[#424754] dark:text-[#94a3b8] hover:bg-[#e1e3e4] dark:hover:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#262c3a]'
          }`}
        >
          API Key &amp; Code Snippets
        </button>
        <button
          onClick={() => setActiveTab('sandbox')}
          className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'sandbox'
              ? 'bg-[#0058be] dark:bg-[#0284c7] text-white shadow-sm'
              : 'bg-white dark:bg-[#161f30] text-[#424754] dark:text-[#94a3b8] hover:bg-[#e1e3e4] dark:hover:bg-[#1e293b] border border-[#e1e3e4] dark:border-[#262c3a]'
          }`}
        >
          Interactive API Sandbox
        </button>
      </div>

      {activeTab === 'docs' ? (
        <div className="space-y-8">
          {/* Key Management Card */}
          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            <h2 className="text-xl font-bold text-[#191c1d] dark:text-white mb-2 font-heading flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8]">key</span>
              Authentication Credentials
            </h2>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-6">
              Include your bearer secret token in the <code className="bg-[#f3f4f5] dark:bg-[#1e293b] px-1.5 py-0.5 rounded text-[#0058be] dark:text-[#38bdf8]">Authorization</code> header for every REST request.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                readOnly
                value={apiKey}
                className="w-full bg-[#f8f9fa] dark:bg-[#0f172a] border border-[#c2c6d6] dark:border-[#334155] rounded-xl px-4 py-3 font-mono text-xs font-bold text-[#0058be] dark:text-[#38bdf8] focus:outline-none"
              />
              <button
                onClick={rotateKey}
                className="w-full sm:w-auto whitespace-nowrap bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#38bdf8] text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#adc6ff] dark:hover:bg-[#334155] transition-colors cursor-pointer"
              >
                Rotate Token
              </button>
            </div>
          </div>

          {/* Code Snippets Section */}
          <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-[#191c1d] dark:text-white font-heading">
                Multi-Language Code Examples
              </h2>

              <div className="flex items-center gap-2 flex-wrap">
                {(['curl', 'js', 'python', 'go', 'php'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg uppercase cursor-pointer transition-colors ${
                      selectedLang === lang
                        ? 'bg-[#0058be] dark:bg-[#0284c7] text-white'
                        : 'bg-[#f3f4f5] dark:bg-[#1e293b] text-[#424754] dark:text-[#94a3b8] hover:bg-[#e1e3e4] dark:hover:bg-[#334155]'
                    }`}
                  >
                    {lang === 'js' ? 'JS Fetch' : lang}
                  </button>
                ))}

                <button
                  onClick={copySnippet}
                  className="ml-2 bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#adc6ff]"
                >
                  <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="bg-[#191c1d] dark:bg-[#090d16] text-[#f0f1f2] rounded-2xl p-6 font-mono text-xs overflow-x-auto border border-transparent dark:border-[#1e293b]">
              <pre>{snippets[selectedLang]}</pre>
            </div>
          </div>
        </div>
      ) : (
        /* Sandbox View */
        <div className="bg-white dark:bg-[#161f30] rounded-3xl p-6 md:p-8 border border-[#e1e3e4] dark:border-[#262c3a] soft-shadow grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#191c1d] dark:text-white mb-2 font-heading">
              Request Payload Simulator
            </h2>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-6">
              Test conversion input against the REST engine right in your browser.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#191c1d] dark:text-white mb-1">
                  Target Output Format
                </label>
                <select
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value)}
                  className="w-full bg-[#f8f9fa] dark:bg-[#0f172a] border border-[#c2c6d6] dark:border-[#334155] rounded-xl px-4 py-2.5 text-xs text-[#191c1d] dark:text-white font-bold"
                >
                  <option value="json">JSON Array</option>
                  <option value="xml">XML Document</option>
                  <option value="md">Markdown Table</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#191c1d] dark:text-white mb-1">
                  Input CSV Data
                </label>
                <textarea
                  rows={6}
                  value={testPayload}
                  onChange={(e) => setTestPayload(e.target.value)}
                  className="w-full bg-[#f8f9fa] dark:bg-[#0f172a] border border-[#c2c6d6] dark:border-[#334155] rounded-xl p-4 font-mono text-xs text-[#191c1d] dark:text-white focus:outline-none"
                />
              </div>

              <button
                onClick={handleTestApiCall}
                disabled={isCallingApi}
                className="w-full bg-[#0058be] dark:bg-[#0284c7] text-white text-xs font-bold py-3 rounded-xl hover:bg-[#2170e4] dark:hover:bg-[#0369a1] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">
                  {isCallingApi ? 'sync' : 'send'}
                </span>
                {isCallingApi ? 'Executing Request...' : 'Send API Request (POST)'}
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-[#191c1d] dark:text-white font-heading">
                HTTP Response Inspection
              </h2>
              <span className="bg-[#6cf8bb]/30 text-[#00714d] dark:text-[#34d399] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                200 OK (14ms)
              </span>
            </div>
            <p className="text-xs text-[#424754] dark:text-[#94a3b8] mb-6">
              Live JSON response returned by the conversion endpoint.
            </p>

            <div className="bg-[#191c1d] dark:bg-[#090d16] text-[#6cf8bb] rounded-2xl p-6 font-mono text-xs h-[280px] overflow-auto border border-transparent dark:border-[#1e293b]">
              {isCallingApi ? (
                <div className="h-full flex items-center justify-center text-[#94a3b8]">
                  <span className="material-symbols-outlined animate-spin text-2xl mr-2">sync</span>
                  Processing payload...
                </div>
              ) : sandboxResult ? (
                <pre className="whitespace-pre-wrap">{sandboxResult}</pre>
              ) : (
                <div className="h-full flex items-center justify-center text-[#727785]">
                  Click "Send API Request" to see live API output response
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

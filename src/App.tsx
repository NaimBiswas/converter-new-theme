import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroDropzone } from './components/HeroDropzone';
import { ActiveConverter } from './components/ActiveConverter';
import { HowItWorks } from './components/HowItWorks';
import { PopularTools } from './components/PopularTools';
import { ToolsModal } from './components/ToolsModal';
import { PricingModal } from './components/PricingModal';
import { ApiModal } from './components/ApiModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { POPULAR_TOOLS } from './data/tools';
import { ConversionTool, UploadedFileItem } from './types';
import { convertSingleFile, getAvailableTargetFormats } from './utils/converter';

export default function App() {
  const [files, setFiles] = useState<UploadedFileItem[]>([]);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isApiOpen, setIsApiOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handles adding files from dropzone or file picker
  const handleFilesAdded = (inputFiles: FileList | File[]) => {
    const newItems: UploadedFileItem[] = Array.from(inputFiles).map((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || 'txt';
      const available = getAvailableTargetFormats(file);
      const target = available[0] || 'PDF';

      let previewUrl: string | undefined;
      if (file.type.startsWith('image/')) {
        previewUrl = URL.createObjectURL(file);
      }

      return {
        id: 'file_' + Math.random().toString(36).substring(2, 9),
        file,
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        extension: ext,
        previewUrl,
        targetFormat: target,
        availableFormats: available,
        status: 'idle',
        progress: 0,
      };
    });

    setFiles((prev) => [...prev, ...newItems]);
    showToast(`Added ${newItems.length} file(s) to workplace`);

    // Smooth scroll down to workspace
    setTimeout(() => {
      const el = document.getElementById('conversion-workplace');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Update target output format for a single file item
  const handleUpdateTargetFormat = (id: string, format: string) => {
    setFiles((prev) =>
      prev.map((item) => (item.id === id ? { ...item, targetFormat: format, status: 'idle' } : item))
    );
  };

  // Convert a single file item
  const handleConvertFile = async (id: string) => {
    const item = files.find((f) => f.id === id);
    if (!item) return;

    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'converting', progress: 10 } : f))
    );

    try {
      const result = await convertSingleFile(item, (p) => {
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, progress: p } : f))
        );
      });

      setFiles((prev) =>
        prev.map((f) =>
          f.id === id
            ? {
                ...f,
                status: 'completed',
                progress: 100,
                convertedBlob: result.blob,
                convertedUrl: result.url,
                convertedSize: result.size,
                convertedName: result.filename,
                convertedContentText: result.textContent,
              }
            : f
        )
      );

      showToast(`Successfully converted ${item.name} to ${item.targetFormat}!`);
    } catch (err: any) {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === id
            ? { ...f, status: 'error', errorMessage: err.message || 'Conversion failed' }
            : f
        )
      );
      showToast(`Failed to convert ${item.name}`);
    }
  };

  // Convert all files in list
  const handleConvertAll = async () => {
    const pending = files.filter((f) => f.status !== 'completed');
    if (pending.length === 0) return;

    for (const f of pending) {
      await handleConvertFile(f.id);
    }
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleClearAll = () => {
    setFiles([]);
    showToast('Cleared workplace');
  };

  // Launch popular tool preset with sample file if no file uploaded
  const handleSelectTool = (tool: ConversionTool) => {
    let filename = `sample_dataset.${tool.fromFormat.toLowerCase()}`;
    let content = 'col1,col2,col3\nval1,val2,val3\nhello,world,convertflow';
    let type = 'text/csv';

    if (tool.id === 'pdf-to-word' || tool.fromFormat === 'PDF') {
      filename = 'sample_document.pdf';
      content = 'Sample PDF document content for ConvertFlow transformation.';
      type = 'application/pdf';
    } else if (tool.fromFormat === 'JSON') {
      filename = 'data_export.json';
      content = JSON.stringify([{ id: 1, title: 'Item 1', status: 'active' }], null, 2);
      type = 'application/json';
    } else if (tool.category === 'images') {
      filename = `sample_photo.${tool.fromFormat.toLowerCase() === 'image' ? 'jpg' : tool.fromFormat.toLowerCase()}`;
      // Create a small colored canvas image blob
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0058be';
        ctx.fillRect(0, 0, 300, 300);
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px sans-serif';
        ctx.fillText('ConvertFlow', 80, 150);
      }
      canvas.toBlob((blob) => {
        if (blob) {
          const sampleFile = new File([blob], filename, { type: 'image/png' });
          handleFilesAdded([sampleFile]);
        }
      });
      return;
    }

    const blob = new Blob([content], { type });
    const sampleFile = new File([blob], filename, { type });
    handleFilesAdded([sampleFile]);
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col font-sans antialiased">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#191c1d] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <span className="material-symbols-outlined text-[#6cf8bb]">check_circle</span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        onOpenToolsModal={() => setIsToolsOpen(true)}
        onOpenPricingModal={() => setIsPricingOpen(true)}
        onOpenApiModal={() => setIsApiOpen(true)}
        onOpenAuthModal={() => setIsAuthOpen(true)}
        onScrollToHowItWorks={scrollToHowItWorks}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero & Upload Dropzone */}
        <HeroDropzone onFilesSelected={handleFilesAdded} />

        {/* Active Conversion Workplace */}
        <div id="conversion-workplace">
          <ActiveConverter
            files={files}
            onUpdateTargetFormat={handleUpdateTargetFormat}
            onConvertFile={handleConvertFile}
            onConvertAll={handleConvertAll}
            onRemoveFile={handleRemoveFile}
            onAddMore={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.multiple = true;
              input.onchange = (e: any) => {
                if (e.target.files) handleFilesAdded(e.target.files);
              };
              input.click();
            }}
            onClearAll={handleClearAll}
          />
        </div>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Popular Tools Section */}
        <PopularTools
          tools={POPULAR_TOOLS}
          onOpenToolsModal={() => setIsToolsOpen(true)}
          onSelectTool={handleSelectTool}
        />
      </main>

      {/* Modals */}
      <ToolsModal
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
        onSelectTool={handleSelectTool}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSelectPlan={(plan) => showToast(`Selected plan: ${plan}`)}
      />

      <ApiModal
        isOpen={isApiOpen}
        onClose={() => setIsApiOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(email) => showToast(`Signed in as ${email}`)}
      />

      {/* Footer */}
      <Footer
        onOpenToolsModal={() => setIsToolsOpen(true)}
        onOpenPricingModal={() => setIsPricingOpen(true)}
        onOpenApiModal={() => setIsApiOpen(true)}
        onScrollToHowItWorks={scrollToHowItWorks}
      />
    </div>
  );
}

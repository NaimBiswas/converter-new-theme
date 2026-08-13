import React, { useRef, useState } from 'react';

interface HeroDropzoneProps {
  onFilesSelected: (files: FileList | File[]) => void;
}

export const HeroDropzone: React.FC<HeroDropzoneProps> = ({ onFilesSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
    }
  };

  return (
    <section className="gradient-bg py-16 px-4 md:px-8 text-center flex flex-col items-center relative overflow-hidden">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
      />

      {/* Hero Headings */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3 max-w-3xl text-[#191c1d] dark:text-white tracking-tight font-heading leading-tight">
        Convert Files, <span className="text-[#0058be] dark:text-[#38bdf8]">Save Time.</span>
      </h1>
      <p className="text-lg md:text-xl text-[#424754] dark:text-[#94a3b8] max-w-2xl mb-10 leading-relaxed font-normal">
        The easiest way to transform your documents, data, and media. No fuss, just perfect conversions every time.
      </p>

      {/* Dropzone Box */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full max-w-2xl bg-white dark:bg-[#161f30] rounded-[24px] p-8 border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-6 soft-shadow relative overflow-hidden group cursor-pointer min-h-[300px] ${
          isDragging
            ? 'bg-[#f0fdf4] dark:bg-[#064e3b]/30 border-[#6cf8bb] scale-[1.01]'
            : 'border-[#adc6ff] dark:border-[#334155] hover:bg-[#f5f8ff] dark:hover:bg-[#1e293b] hover:border-[#0058be] dark:hover:border-[#38bdf8]'
        }`}
      >
        {/* Plus Icon Circle */}
        <div className="bg-[#d8e2ff] dark:bg-[#1e293b] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <span className="material-symbols-outlined text-[#0058be] dark:text-[#38bdf8] text-3xl font-bold">
            add
          </span>
        </div>

        {/* Text Instructions */}
        <div className="text-center">
          <p className="text-xl font-bold text-[#191c1d] dark:text-white mb-1 font-heading">
            Drag &amp; drop files here
          </p>
          <p className="text-base text-[#424754] dark:text-[#94a3b8]">
            or browse your device
          </p>
        </div>

        {/* Upload Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="bg-[#0058be] dark:bg-[#0284c7] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#2170e4] dark:hover:bg-[#0369a1] active:scale-95 transition-all shadow-md flex items-center gap-2 mt-1 z-10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">upload</span>
          Upload Files
        </button>

        {/* Decorative Background Glow Elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6cf8bb] opacity-25 dark:opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2170e4] opacity-15 dark:opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Format Tags */}
      <div className="flex gap-2.5 mt-6 flex-wrap justify-center items-center">
        <span className="bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#7dd3fc] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50 dark:border-[#334155]">
          PDF
        </span>
        <span className="bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#7dd3fc] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50 dark:border-[#334155]">
          JPG
        </span>
        <span className="bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#7dd3fc] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50 dark:border-[#334155]">
          DOCX
        </span>
        <span className="bg-[#d8e2ff] dark:bg-[#1e293b] text-[#004395] dark:text-[#7dd3fc] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50 dark:border-[#334155]">
          CSV
        </span>
        <span className="text-[#424754] dark:text-[#94a3b8] text-xs font-semibold px-2 py-1">
          +30 more
        </span>
      </div>
    </section>
  );
};

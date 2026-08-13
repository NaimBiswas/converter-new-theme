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
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3 max-w-3xl text-[#191c1d] tracking-tight font-heading leading-tight">
        Convert Files, <span className="text-[#0058be]">Save Time.</span>
      </h1>
      <p className="text-lg md:text-xl text-[#424754] max-w-2xl mb-10 leading-relaxed font-normal">
        The easiest way to transform your documents, data, and media. No fuss, just perfect conversions every time.
      </p>

      {/* Dropzone Box */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full max-w-2xl bg-white rounded-[24px] p-8 border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-6 soft-shadow relative overflow-hidden group cursor-pointer min-h-[300px] ${
          isDragging
            ? 'bg-[#f0fdf4] border-[#6cf8bb] scale-[1.01]'
            : 'border-[#adc6ff] hover:bg-[#f5f8ff] hover:border-[#0058be]'
        }`}
      >
        {/* Plus Icon Circle */}
        <div className="bg-[#d8e2ff] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <span className="material-symbols-outlined text-[#0058be] text-3xl font-bold">
            add
          </span>
        </div>

        {/* Text Instructions */}
        <div className="text-center">
          <p className="text-xl font-bold text-[#191c1d] mb-1 font-heading">
            Drag &amp; drop files here
          </p>
          <p className="text-base text-[#424754]">
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
          className="bg-[#0058be] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#2170e4] active:scale-95 transition-all shadow-md flex items-center gap-2 mt-1 z-10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">upload</span>
          Upload Files
        </button>

        {/* Decorative Background Glow Elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6cf8bb] opacity-25 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2170e4] opacity-15 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Format Tags */}
      <div className="flex gap-2.5 mt-6 flex-wrap justify-center items-center">
        <span className="bg-[#d8e2ff] text-[#004395] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50">
          PDF
        </span>
        <span className="bg-[#d8e2ff] text-[#004395] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50">
          JPG
        </span>
        <span className="bg-[#d8e2ff] text-[#004395] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50">
          DOCX
        </span>
        <span className="bg-[#d8e2ff] text-[#004395] text-xs font-semibold px-3 py-1 rounded-full border border-[#adc6ff]/50">
          CSV
        </span>
        <span className="text-[#424754] text-xs font-semibold px-2 py-1">
          +50 more
        </span>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-20 w-full animate-in fade-in">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-[#1e293b] text-[#0058be] dark:text-[#38bdf8] text-xs font-bold mb-6">
          <span className="material-symbols-outlined text-base">error</span>
          404 Not Found
        </div>
        <h1 className="text-7xl md:text-9xl font-extrabold text-[#0058be] dark:text-[#38bdf8] font-heading tracking-tight mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] dark:text-white font-heading tracking-tight mb-3">
          Page Not Found
        </h2>
        <p className="text-sm md:text-base text-[#424754] dark:text-[#94a3b8] mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0058be] dark:bg-[#38bdf8] text-white dark:text-[#0b0e14] text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Go to Homepage
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-[#161f30] text-[#0058be] dark:text-[#38bdf8] text-sm font-bold border border-[#e1e3e4] dark:border-[#262c3a] hover:bg-[#f3f4f5] dark:hover:bg-[#1e293b] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">construction</span>
            Browse Tools
          </Link>
        </div>
      </div>
    </div>
  );
};

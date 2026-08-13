import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#191c1d] mb-2 font-heading tracking-tight">
          How it Works
        </h2>
        <p className="text-lg text-[#424754] max-w-xl mx-auto">
          Three simple steps to transform your files.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-2xl border border-transparent hover:border-[#adc6ff] transition-all hover:bg-white hover:shadow-sm group">
          <div className="w-16 h-16 bg-[#edeeef] rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[#0058be] text-[32px]">
              upload_file
            </span>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#006c49] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
              1
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#191c1d] mb-2 font-heading">
            Upload your file
          </h3>
          <p className="text-base text-[#424754] leading-relaxed">
            Simply drag and drop or select the file you want to convert.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-2xl border border-transparent hover:border-[#adc6ff] transition-all hover:bg-white hover:shadow-sm group">
          <div className="w-16 h-16 bg-[#edeeef] rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[#0058be] text-[32px]">
              tune
            </span>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#006c49] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
              2
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#191c1d] mb-2 font-heading">
            Choose format
          </h3>
          <p className="text-base text-[#424754] leading-relaxed">
            Select your desired output format from our extensive list.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-2xl border border-transparent hover:border-[#adc6ff] transition-all hover:bg-white hover:shadow-sm group">
          <div className="w-16 h-16 bg-[#edeeef] rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[#006c49] text-[32px]">
              download
            </span>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#006c49] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
              3
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#191c1d] mb-2 font-heading">
            Download result
          </h3>
          <p className="text-base text-[#424754] leading-relaxed">
            Get your perfectly converted file instantly, ready to use.
          </p>
        </div>
      </div>
    </section>
  );
};

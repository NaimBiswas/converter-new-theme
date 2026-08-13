import React, { useState } from 'react';
import { UploadedFileItem } from '../types';
import { formatBytes } from '../utils/converter';

interface ActiveConverterProps {
  files: UploadedFileItem[];
  onUpdateTargetFormat: (id: string, format: string) => void;
  onConvertFile: (id: string) => void;
  onConvertAll: () => void;
  onRemoveFile: (id: string) => void;
  onAddMore: () => void;
  onClearAll: () => void;
}

export const ActiveConverter: React.FC<ActiveConverterProps> = ({
  files,
  onUpdateTargetFormat,
  onConvertFile,
  onConvertAll,
  onRemoveFile,
  onAddMore,
  onClearAll,
}) => {
  const [previewContent, setPreviewContent] = useState<{ name: string; content: string; isImage?: boolean; url?: string } | null>(null);

  if (files.length === 0) return null;

  const isAnyConverting = files.some((f) => f.status === 'converting');
  const allCompleted = files.every((f) => f.status === 'completed');

  return (
    <section className="py-8 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
      {/* Workspace Header Bar */}
      <div className="bg-white rounded-2xl p-6 soft-shadow border border-[#e1e3e4] mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#191c1d] font-heading flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be]">published_with_changes</span>
            Conversion Workplace ({files.length} {files.length === 1 ? 'file' : 'files'})
          </h2>
          <p className="text-sm text-[#424754]">Select your target formats and click convert to start process.</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap w-full md:w-auto">
          <button
            onClick={onAddMore}
            className="text-xs md:text-sm font-semibold text-[#0058be] bg-[#d8e2ff] hover:bg-[#adc6ff] px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">add</span>
            Add Files
          </button>
          
          <button
            onClick={onClearAll}
            className="text-xs md:text-sm font-semibold text-[#424754] hover:text-[#ba1a1a] px-3 py-2 transition-colors cursor-pointer"
          >
            Clear All
          </button>

          <button
            onClick={onConvertAll}
            disabled={isAnyConverting}
            className={`text-xs md:text-sm font-semibold text-white px-6 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              isAnyConverting
                ? 'bg-[#0058be]/60 cursor-not-allowed'
                : allCompleted
                ? 'bg-[#006c49] hover:bg-[#00714d]'
                : 'bg-[#0058be] hover:bg-[#2170e4]'
            }`}
          >
            <span className="material-symbols-outlined text-base">
              {isAnyConverting ? 'autorenew' : allCompleted ? 'done_all' : 'bolt'}
            </span>
            {isAnyConverting ? 'Converting...' : allCompleted ? 'Convert Again' : 'Convert All Now'}
          </button>
        </div>
      </div>

      {/* File List Cards */}
      <div className="space-y-4">
        {files.map((item) => {
          const isConverting = item.status === 'converting';
          const isDone = item.status === 'completed';

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-5 soft-shadow border transition-all duration-300 ${
                isDone ? 'border-[#6cf8bb] bg-[#f0fdf4]/30' : 'border-[#e1e3e4] hover:border-[#adc6ff]'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                {/* File Thumbnail & Meta */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#f3f4f5] flex items-center justify-center shrink-0 text-[#0058be]">
                    {item.type.startsWith('image/') ? (
                      item.previewUrl ? (
                        <img
                          src={item.previewUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-2xl">image</span>
                      )
                    ) : item.extension === 'pdf' ? (
                      <span className="material-symbols-outlined text-2xl text-[#ba1a1a]">picture_as_pdf</span>
                    ) : item.extension === 'csv' || item.extension === 'json' ? (
                      <span className="material-symbols-outlined text-2xl text-[#006c49]">table_view</span>
                    ) : (
                      <span className="material-symbols-outlined text-2xl text-[#0058be]">description</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-[#191c1d] truncate font-heading" title={item.name}>
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#424754] flex items-center gap-2 mt-0.5">
                      <span>{formatBytes(item.size)}</span>
                      <span>•</span>
                      <span className="uppercase font-semibold text-[#0058be]">{item.extension || 'FILE'}</span>
                      {isDone && item.convertedSize && (
                        <>
                          <span>→</span>
                          <span className="text-[#006c49] font-bold">
                            {formatBytes(item.convertedSize)} (Done)
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Target Format Selector & Actions */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#e1e3e4]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#424754]">To:</span>
                    <select
                      value={item.targetFormat}
                      onChange={(e) => onUpdateTargetFormat(item.id, e.target.value)}
                      disabled={isConverting}
                      className="bg-[#f3f4f5] text-[#191c1d] text-xs font-bold px-3 py-2 rounded-lg border border-[#c2c6d6] focus:border-[#0058be] focus:outline-none cursor-pointer"
                    >
                      {item.availableFormats.map((fmt) => (
                        <option key={fmt} value={fmt}>
                          {fmt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Preview Button if Converted Text/Image available */}
                    {isDone && (item.convertedContentText || item.convertedUrl) && (
                      <button
                        onClick={() =>
                          setPreviewContent({
                            name: item.convertedName || item.name,
                            content: item.convertedContentText || '',
                            isImage: item.type.startsWith('image/'),
                            url: item.convertedUrl
                          })
                        }
                        className="p-2 text-[#0058be] hover:bg-[#d8e2ff]/50 rounded-lg transition-colors cursor-pointer"
                        title="Quick Preview"
                      >
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                    )}

                    {/* Convert or Download Button */}
                    {isDone ? (
                      <a
                        href={item.convertedUrl}
                        download={item.convertedName}
                        className="bg-[#006c49] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#00714d] transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                        Download
                      </a>
                    ) : (
                      <button
                        onClick={() => onConvertFile(item.id)}
                        disabled={isConverting}
                        className="bg-[#0058be] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#2170e4] transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <span className="material-symbols-outlined text-base">
                          {isConverting ? 'sync' : 'play_arrow'}
                        </span>
                        {isConverting ? 'Converting...' : 'Convert'}
                      </button>
                    )}

                    {/* Remove File Button */}
                    <button
                      onClick={() => onRemoveFile(item.id)}
                      disabled={isConverting}
                      className="p-2 text-[#727785] hover:text-[#ba1a1a] hover:bg-[#ffdad6]/50 rounded-lg transition-colors cursor-pointer disabled:opacity-30"
                      title="Remove"
                    >
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar during Conversion */}
              {isConverting && (
                <div className="mt-4 w-full">
                  <div className="flex justify-between items-center text-xs font-semibold text-[#0058be] mb-1">
                    <span>Converting to {item.targetFormat}...</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-[#edeeef] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0058be] h-full transition-all duration-300 animated-progress-bar rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {previewContent && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] flex flex-col soft-shadow animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center border-b border-[#e1e3e4] pb-4 mb-4">
              <h3 className="font-bold text-lg text-[#191c1d] font-heading truncate">
                Preview: {previewContent.name}
              </h3>
              <button
                onClick={() => setPreviewContent(null)}
                className="p-1 text-[#727785] hover:text-[#191c1d] rounded-lg cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-[#f8f9fa] p-4 rounded-xl font-mono text-xs text-[#191c1d]">
              {previewContent.isImage && previewContent.url ? (
                <div className="flex justify-center items-center p-4">
                  <img
                    src={previewContent.url}
                    alt="Converted output"
                    className="max-h-[50vh] object-contain rounded-lg border border-[#e1e3e4]"
                  />
                </div>
              ) : (
                <pre className="whitespace-pre-wrap">{previewContent.content}</pre>
              )}
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setPreviewContent(null)}
                className="bg-[#0058be] text-white px-5 py-2 rounded-full text-xs font-bold cursor-pointer hover:bg-[#2170e4]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

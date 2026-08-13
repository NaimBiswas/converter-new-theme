import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userEmail: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSuccess(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full soft-shadow animate-in fade-in zoom-in-95 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#727785] hover:text-[#191c1d] rounded-full cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#d8e2ff] text-[#0058be] rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              cycle
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#191c1d] font-heading">Welcome to ConvertFlow</h2>
          <p className="text-xs text-[#424754] mt-1">Sign in to sync your conversion history and access Pro tools</p>
        </div>

        {/* Google OAuth Button */}
        <button
          onClick={() => {
            onSuccess('demo.user@convertflow.com');
            onClose();
          }}
          className="w-full bg-[#f3f4f5] hover:bg-[#e1e3e4] text-[#191c1d] border border-[#c2c6d6] text-xs font-bold py-3 rounded-full flex items-center justify-center gap-2 mb-4 transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#e1e3e4]"></div>
          <span className="px-3 text-[10px] font-bold uppercase text-[#727785]">or email</span>
          <div className="flex-1 border-t border-[#e1e3e4]"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#191c1d] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full bg-[#f8f9fa] border border-[#c2c6d6] rounded-xl px-4 py-2.5 text-xs text-[#191c1d] focus:outline-none focus:border-[#0058be]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#191c1d] mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#f8f9fa] border border-[#c2c6d6] rounded-xl px-4 py-2.5 text-xs text-[#191c1d] focus:outline-none focus:border-[#0058be]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0058be] text-white text-xs font-bold py-3 rounded-full hover:bg-[#2170e4] transition-colors cursor-pointer shadow-sm"
          >
            Sign In / Register
          </button>
        </form>
      </div>
    </div>
  );
};

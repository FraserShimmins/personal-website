'use client'

import { useState } from 'react';
import copy from 'clipboard-copy';
import { Copy, SquareCheckBig } from 'lucide-react';

export default function CopyEmail() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy("shimmins.f@gmail.com");
      setIsCopied(true);

      // Reset back after 3s (3000ms)
      setTimeout(() => {setIsCopied(false);}, 3000);

    } 
    catch (error) {
      console.error('Failed to copy email to clipboard', error);
    }
  };

  return (
    <div>
        <button onClick={handleCopyClick} className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
            <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                
                
                <div className="w-[1em] h-[1em]">
                    {isCopied ? (
                    <SquareCheckBig className="w-full h-full opacity-100 scale-100 transition-all duration-300 ease-in-out" />
                    ) : (
                    <Copy className="w-full h-full opacity-100 scale-100 transition-all duration-300 ease-in-out" />
                    )}
                </div>
                <p className="whitespace-nowrap text-left">My Email</p>
            </div>
        </button>
    </div>
  );
};

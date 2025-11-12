
import React, { useState, useCallback } from 'react';
import { ClipboardIcon } from './ClipboardIcon';
import { CheckIcon } from './CheckIcon';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }, [textToCopy]);

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
        text-white transition-all duration-300 ease-in-out focus:outline-none 
        focus:ring-4 focus:ring-opacity-50 shadow-lg transform active:scale-95
        w-full sm:w-auto
        ${isCopied 
          ? 'bg-green-600 hover:bg-green-700 focus:ring-green-400' 
          : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-400'}
      `}
    >
      {isCopied ? (
        <>
          <CheckIcon className="w-5 h-5 mr-2" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <ClipboardIcon className="w-5 h-5 mr-2" />
          <span>Copy All Text</span>
        </>
      )}
    </button>
  );
};


import React, { useState } from 'react';
import { ChevronDownIcon } from './ChevronDownIcon';

export const Instructions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <footer className="w-full max-w-4xl mx-auto mt-auto py-4">
      <div className="bg-slate-800 rounded-lg p-1">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-3 text-left font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <span>Admin Instructions: How to Update Text</span>
          <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-2 text-slate-400 text-sm border-t border-slate-700">
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Open the project source code in your editor.</li>
              <li>Find and open the file located at <code className="bg-slate-700 text-cyan-300 px-1 py-0.5 rounded">constants.ts</code>.</li>
              <li>Modify the text content within the backticks (`) for the <code className="bg-slate-700 text-cyan-300 px-1 py-0.5 rounded">SHARED_TEXT</code> variable.</li>
              <li>Save the file.</li>
              <li>Redeploy or rebuild the application to publish your changes.</li>
            </ol>
          </div>
        )}
      </div>
    </footer>
  );
};

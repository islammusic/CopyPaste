import React, { useState } from 'react';
import { CopyButton } from './CopyButton';

interface AdminViewProps {
  initialText: string;
  onSave: (newText: string) => void;
  onLogout: () => void;
}

const AdminView: React.FC<AdminViewProps> = ({ initialText, onSave, onLogout }) => {
  const [text, setText] = useState(initialText);
  const [showNotification, setShowNotification] = useState(false);

  const handleSave = () => {
    onSave(text);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2500);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-6 w-full">
        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm font-semibold bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </header>
      
      <main className="flex-grow flex flex-col mb-24 w-full">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Shared text content"
          className="w-full h-full flex-grow bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-white/10 p-6 text-slate-200 font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[400px]"
          placeholder="Paste your text here..."
        />
      </main>

      {showNotification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg transition-opacity duration-300">
          Saved Successfully!
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 flex justify-center items-center gap-4">
        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg transform active:scale-95 bg-green-600 hover:bg-green-700 focus:ring-green-400"
        >
          Save Changes
        </button>
        <CopyButton textToCopy={text} />
      </div>
    </>
  );
};

export default AdminView;

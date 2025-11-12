import React from 'react';
import { CopyButton } from './CopyButton';

interface ViewerProps {
  text: string;
  onSwitchRole: () => void;
}

const Viewer: React.FC<ViewerProps> = ({ text, onSwitchRole }) => {
  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Shared Text
        </h1>
        <p className="mt-2 text-slate-400">The content below is ready to be copied.</p>
      </header>
      
      <main className="flex-grow bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-white/10 p-6 mb-24 relative">
        <pre className="text-sm sm:text-base text-slate-200 whitespace-pre-wrap break-words font-mono">
          {text || 'No text has been shared yet.'}
        </pre>
      </main>

      <footer className="text-center mb-24">
        <button onClick={onSwitchRole} className="text-sm text-slate-400 hover:text-white underline transition-colors">
          Not a viewer? Go back.
        </button>
      </footer>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 flex justify-center">
        <CopyButton textToCopy={text} />
      </div>
    </>
  );
};

export default Viewer;

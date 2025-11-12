import React from 'react';

interface RoleSelectorProps {
  onSelectRole: (role: 'admin' | 'viewer') => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full flex-grow text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple Text Sharer
        </h1>
        <p className="text-lg text-slate-400 mb-12">How would you like to proceed?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
            <button
                onClick={() => onSelectRole('viewer')}
                className="p-8 bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-white/10 hover:bg-slate-700/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
            >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Viewer</h2>
                <p className="text-slate-400">View and copy the shared text.</p>
            </button>
            <button
                onClick={() => onSelectRole('admin')}
                className="p-8 bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-white/10 hover:bg-slate-700/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
            >
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">Admin</h2>
                <p className="text-slate-400">Login to edit the shared text.</p>
            </button>
        </div>
    </div>
  );
};

export default RoleSelector;

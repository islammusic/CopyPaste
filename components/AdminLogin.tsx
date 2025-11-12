import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
  onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full flex-grow text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Admin Login</h1>
      <p className="text-slate-400 mb-8">Please enter the password to continue.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          placeholder="Password"
          aria-label="Admin Password"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
        <button
          type="submit"
          className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg transform active:scale-95 bg-blue-600 hover:bg-blue-700 focus:ring-blue-400"
        >
          Login
        </button>
      </form>
      <button onClick={onBack} className="mt-8 text-sm text-slate-400 hover:text-white underline transition-colors">
        Go Back
      </button>
    </div>
  );
};

export default AdminLogin;

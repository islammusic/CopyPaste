import React, { useState, useEffect } from 'react';
import { SHARED_TEXT, ADMIN_PASSWORD } from './constants';
import RoleSelector from './components/RoleSelector';
import Viewer from './components/Viewer';
import AdminLogin from './components/AdminLogin';
import AdminView from './components/AdminView';

const App: React.FC = () => {
  type Role = 'admin' | 'viewer' | null;

  const [role, setRole] = useState<Role>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sharedText, setSharedText] = useState<string>('');

  useEffect(() => {
    const savedText = localStorage.getItem('sharedText');
    setSharedText(savedText ?? SHARED_TEXT);
  }, []);

  const handleLogin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleSave = (newText: string) => {
    setSharedText(newText);
    localStorage.setItem('sharedText', newText);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  const resetView = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  const renderContent = () => {
    if (!role) {
      return <RoleSelector onSelectRole={setRole} />;
    }

    if (role === 'viewer') {
      return <Viewer text={sharedText} onSwitchRole={resetView} />;
    }

    if (role === 'admin') {
      if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} onBack={resetView} />;
      }
      return <AdminView initialText={sharedText} onSave={handleSave} onLogout={handleLogout} />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col flex-grow h-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;

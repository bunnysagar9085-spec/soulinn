
import React from 'react';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeRole, setActiveRole }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#D4AF37]/20 px-4 py-3 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-black font-bold">E</div>
          <h1 className="text-2xl font-serif gold-text tracking-tighter">EliteFix</h1>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <button 
            onClick={() => setActiveRole(UserRole.CUSTOMER)}
            className={`px-4 py-1.5 rounded-full transition-all ${activeRole === UserRole.CUSTOMER ? 'gold-gradient text-black font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Customer
          </button>
          <button 
            onClick={() => setActiveRole(UserRole.WORKER)}
            className={`px-4 py-1.5 rounded-full transition-all ${activeRole === UserRole.WORKER ? 'gold-gradient text-black font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Worker
          </button>
          <button 
            onClick={() => setActiveRole(UserRole.ADMIN)}
            className={`px-4 py-1.5 rounded-full transition-all ${activeRole === UserRole.ADMIN ? 'gold-gradient text-black font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Admin
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-xs text-[#D4AF37] border border-[#D4AF37] px-2 py-0.5 rounded">Hyderabad</span>
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 overflow-hidden">
            <img src="https://picsum.photos/100" alt="profile" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Footer / Mobile Nav */}
      <footer className="md:hidden sticky bottom-0 z-50 bg-[#050505]/95 border-t border-[#D4AF37]/20 grid grid-cols-3 py-2 px-2">
         <button onClick={() => setActiveRole(UserRole.CUSTOMER)} className={`flex flex-col items-center gap-1 ${activeRole === UserRole.CUSTOMER ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
            <span className="text-xl">🏠</span>
            <span className="text-[10px]">Customer</span>
         </button>
         <button onClick={() => setActiveRole(UserRole.WORKER)} className={`flex flex-col items-center gap-1 ${activeRole === UserRole.WORKER ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
            <span className="text-xl">🛠️</span>
            <span className="text-[10px]">Worker</span>
         </button>
         <button onClick={() => setActiveRole(UserRole.ADMIN)} className={`flex flex-col items-center gap-1 ${activeRole === UserRole.ADMIN ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
            <span className="text-xl">📊</span>
            <span className="text-[10px]">Admin</span>
         </button>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import { Page } from '../types.ts';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Дэлгүүр', id: Page.Home },
    { label: 'Valve Тухай', id: Page.Info },
    { label: 'Төслийн Явц', id: Page.Assignments },
    { label: 'Дэмжлэг', id: Page.Contact },
  ];

  return (
    <nav className="bg-[#171a21] shadow-2xl sticky top-0 z-50 border-b border-[#66c0f4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#66c0f4] rounded-full flex items-center justify-center">
               <svg className="w-5 h-5 text-[#171a21]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1.5 4a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm4 2a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zM9 13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm6 0c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/></svg>
            </div>
            <span 
              className="text-xl font-black text-white cursor-pointer tracking-tighter uppercase"
              onClick={() => setCurrentPage(Page.Home)}
            >
              STEAM <span className="text-[#66c0f4]">x</span> 2-Р БАГ
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-md uppercase tracking-wider ${
                  currentPage === item.id 
                  ? 'text-[#66c0f4] bg-[#66c0f4]/10' 
                  : 'text-[#c5c3c0] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#66c0f4] hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1b2838] border-t border-[#66c0f4]/10 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 text-base font-bold uppercase tracking-widest ${
                currentPage === item.id 
                ? 'text-[#66c0f4] bg-[#66c0f4]/10' 
                : 'text-[#c5c3c0] hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
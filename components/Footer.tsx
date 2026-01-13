import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171a21] text-gray-400 py-16 mt-auto border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">VALVE <span className="text-[#66c0f4]">x</span> TEAM 2</h3>
            <p className="text-gray-500 text-xs mt-3 font-bold uppercase tracking-[0.3em]">Вэб Технологийн Бие Даалт — 2024</p>
          </div>
          <div className="flex space-x-10 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-[#66c0f4] transition-colors italic">Privacy Policy</a>
            <a href="#" className="hover:text-[#66c0f4] transition-colors italic">Terms of Service</a>
            <a href="#" className="hover:text-[#66c0f4] transition-colors italic">Steam Support</a>
          </div>
          <div className="flex space-x-4">
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#66c0f4]/20 cursor-pointer transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.383 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.5em] leading-loose max-w-4xl mx-auto">
          © {new Date().getFullYear()} Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. Project by Student Team 2 for Web Tech Course.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
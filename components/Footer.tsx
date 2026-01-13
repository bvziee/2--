import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">2-р багийн бүтээл</h3>
            <p className="text-gray-400 text-sm mt-2">Вэб Технологийн Бие Даалт — 2024</p>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Нүүр хуудас</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Мэдээлэл</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Холбоо барих</a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
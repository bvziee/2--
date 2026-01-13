import React, { useState, useEffect } from 'react';
import { Page } from '../types.ts';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1200&auto=format&fit=crop',
    title: 'VALVE-ИЙН ЕРТӨНЦӨД ТАВТАЙ МОРИЛ',
    description: 'Steam Deck болон хамгийн сүүлийн үеийн Source 2 технологи.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    title: 'DOTA 2 БОЛОН CS2-ИЙН ХӨГЖҮҮЛЭЛТ',
    description: '2-р багийн хамт олон Valve Store-ын системийг судалж байна.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    title: 'ТОГЛООМ ХӨГЖҮҮЛЭЛТИЙН ИРЭЭДҮЙ',
    description: 'Вэб технологи ба Steam API интеграци.'
  }
];

const Home: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fadeIn bg-[#171a21]">
      {/* Hero Slider */}
      <div className="relative h-[500px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl max-w-4xl uppercase italic">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl text-[#66c0f4] font-medium drop-shadow-md">
                {slide.description}
              </p>
              <button 
                onClick={() => onNavigate(Page.Info)}
                className="mt-10 px-10 py-4 bg-[#a4d007] hover:bg-[#bef00a] text-[#171a21] rounded-sm font-black transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(164,208,7,0.4)] uppercase tracking-widest"
              >
                ОДОО ТАНИЛЦАХ
              </button>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-[#66c0f4] w-12' : 'bg-white/20 w-6 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase italic">
              Valve <span className="text-[#66c0f4]">x</span> 2-р Баг
            </h2>
            <p className="text-[#c5c3c0] leading-relaxed mb-8 text-xl">
              Бид энэхүү бие даалтаараа дэлхийн хамгийн том тоглоомын платформ болох **Steam** болон түүнийг бүтээгч **Valve Corporation**-ийн вэб архитектурыг судалж байна.
            </p>
            <p className="text-[#c5c3c0] leading-relaxed text-xl mb-10">
              Source 2 хөдөлгүүрийн вэб хэсэг, Steam Store-ын UI дизайн болон хэрэглэгчийн туршлагыг (UX) орчин үеийн React технологи ашиглан хэрхэн сайжруулж болохыг бид харуулах болно.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#1b2838] p-4 rounded border border-[#66c0f4]/10">
                  <p className="text-[#66c0f4] font-black text-3xl">95%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Тоглогчдын сэтгэл ханамж</p>
               </div>
               <div className="bg-[#1b2838] p-4 rounded border border-[#66c0f4]/10">
                  <p className="text-[#a4d007] font-black text-3xl">120M+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Steam хэрэглэгчид</p>
               </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-[#66c0f4]/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop" 
              alt="Gaming Setup" 
              className="rounded-lg shadow-2xl relative z-10 border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* Steam Categories */}
      <section className="bg-[#1b2838]/50 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-16 text-white uppercase tracking-widest italic">Судалгааны Чиглэлүүд</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="steam-card p-8 rounded-lg cursor-pointer group">
              <div className="w-16 h-16 bg-[#66c0f4]/10 text-[#66c0f4] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#66c0f4] group-hover:text-[#171a21] transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-white uppercase italic">Steam Store UI</h3>
              <p className="text-gray-400 leading-relaxed">Дэлгүүрийн нүүр хуудасны дизайн болон худалдан авалтын урсгалын судалгаа.</p>
            </div>
            <div className="steam-card p-8 rounded-lg cursor-pointer group">
              <div className="w-16 h-16 bg-[#a4d007]/10 text-[#a4d007] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#a4d007] group-hover:text-[#171a21] transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-white uppercase italic">Steam API</h3>
              <p className="text-gray-400 leading-relaxed">Тоглоомын дата, хэрэглэгчийн статистикийг вэб рүү татах интеграци.</p>
            </div>
            <div className="steam-card p-8 rounded-lg cursor-pointer group">
              <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center mb-8 group-hover:bg-purple-500 group-hover:text-[#171a21] transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-white uppercase italic">Аюулгүй байдал</h3>
              <p className="text-gray-400 leading-relaxed">Steam Guard болон хэрэглэгчийн мэдээллийн нууцлалын вэб шийдлүүд.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
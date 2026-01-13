import React from 'react';

const articles = [
  {
    title: 'Valve Corporation-ийн Түүх',
    image: 'https://images.unsplash.com/photo-1552824236-ad579946efec?q=80&w=400&auto=format&fit=crop',
    content: '1996 онд Гейб Ньюэлл болон Майк Харрингтон нарын байгуулсан Valve нь Half-Life тоглоомоороо дэлхийг шуугиулж эхэлсэн. Өдгөө тэд тоглоом хөгжүүлэхээс гадна дэлхийн хамгийн том вэб платформыг ажиллуулж байна.',
    category: 'Түүх'
  },
  {
    title: 'Source 2 Engine: Вэб ба График',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&auto=format&fit=crop',
    content: 'Valve-ийн шинэ үеийн хөдөлгүүр болох Source 2 нь вэб технологитой хэрхэн уялдаж байгаа тухай. CS2 болон Dota 2-ийн шинэчлэлтүүд нь үүний тод жишээ юм.',
    category: 'Технологи'
  },
  {
    title: 'Steam Deck: Портабл Тоглоомын Хувьсгал',
    image: 'https://images.unsplash.com/photo-1643493212879-119934273896?q=80&w=400&auto=format&fit=crop',
    content: 'Линукс суурьтай SteamOS болон түүний вэб интерфэйс нь хэрхэн гар утасны төхөөрөмж дээр PC тоглоомуудыг төвөггүй ажиллуулж байгааг судалж байна.',
    category: 'Тоног Төхөөрөмж'
  }
];

const Info: React.FC = () => {
  return (
    <div className="bg-[#171a21] py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-8">
          <h1 className="text-5xl font-black text-white mb-4 uppercase italic">Valve Мэдээллийн Төв</h1>
          <p className="text-xl text-[#66c0f4]">
            Тоглоомын салбарын лидер Valve болон Steam-ийн тухай бүх мэдээлэл.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <div key={index} className="steam-card rounded-lg overflow-hidden shadow-2xl flex flex-col h-full">
              <img src={article.image} alt={article.title} className="w-full h-56 object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500" />
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a4d007] bg-[#a4d007]/10 px-3 py-1 rounded w-fit mb-6">
                  {article.category}
                </span>
                <h3 className="text-2xl font-black mb-4 text-white uppercase italic leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {article.content}
                </p>
                <button className="text-[#66c0f4] font-black text-xs uppercase tracking-widest hover:text-white flex items-center space-x-2 transition-colors">
                  <span>Дэлгэрэнгүй унших</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-[#1b2838] to-[#2a475e] rounded-lg p-12 text-white border border-[#66c0f4]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black mb-4 uppercase italic">Steam Store-ийг илүү сайжруулах уу?</h2>
              <p className="text-gray-300 text-lg">
                Бидний судалгааны ажил болон Valve-тай холбоотой шинэ санал хүсэлт байвал бидэнтэй нээлттэй хуваалцаарай.
              </p>
            </div>
            <button className="bg-[#66c0f4] text-[#171a21] px-10 py-4 rounded-sm font-black hover:bg-white transition-all uppercase tracking-widest shadow-xl">
              Санал илгээх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
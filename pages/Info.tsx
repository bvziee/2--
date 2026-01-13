
import React from 'react';

const articles = [
  {
    title: 'Хиймэл Оюун Ухаан (AI) ба Боловсрол',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop',
    content: 'Орчин үед хиймэл оюун ухаан нь боловсролын салбарт томоохон өөрчлөлтүүдийг авчирч байна. Оюутнууд AI ашиглан илүү үр дүнтэй суралцаж, багш нар сургалтын материалаа автоматжуулах боломжтой болсон.',
    category: 'Технологи'
  },
  {
    title: 'Вэб Хөгжүүлэлтийн Шинэ Төрлийн Фрэймворкүүд',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400&auto=format&fit=crop',
    content: 'React, Vue, Angular зэрэг фрэймворкүүд нь вэб хөгжүүлэлтийг илүү хурдан бөгөөд хялбар болгосон. Хэрэглэгчийн интерфэйсийг илүү динамик, хөдөлгөөнтэй болгох шийдлүүд өдөр бүр нэмэгдэж байна.',
    category: 'Вэб Хөгжүүлэлт'
  },
  {
    title: 'Кибер Аюулгүй Байдал',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop',
    content: 'Интернэт орчинд өөрийн мэдээллээ хамгаалах нь хамгийн чухал асуудал болоод байна. Нууц үгийн аюулгүй байдал, хоёр шатлалт баталгаажуулалт зэрэг нь хүн бүрийн мэдвэл зохих зүйлс юм.',
    category: 'Аюулгүй байдал'
  }
];

const Info: React.FC = () => {
  return (
    <div className="bg-white py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Мэдээллийн булан</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Технологийн салбарын сонирхолтой мэдээ, зөвлөгөө болон чиг хандлагуудыг эндээс уншина уу.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.content}
                </p>
                <button className="mt-6 text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center space-x-1">
                  <span>Цааш унших</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Та манай контентод сэтгэгдэл үлдээх үү?</h2>
            <p className="text-blue-100">
              Бидний бэлтгэсэн мэдээлэл танд хэрэг болсон бол бидэнд санал хүсэлтээ ирүүлээрэй. Энэ нь биднийг илүү сайжрахад туслах болно.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Бидэнтэй холбогдох
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;

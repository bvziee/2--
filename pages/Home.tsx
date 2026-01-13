
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    title: 'Вэб Технологийн Ертөнц',
    description: 'Орчин үеийн вэб хөгжүүлэлтийн чиг хандлагатай танилцаарай.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    title: '2-р Багийн Төсөл',
    description: 'Бидний хийж гүйцэтгэсэн бүтээлүүд болон даалгавруудыг эндээс харах боломжтой.'
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    title: 'Суралцах Аялал',
    description: 'Шинэ технологи, шинэ мэдлэг, шинэ боломжууд.'
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Slider */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
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
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-2xl max-w-2xl">{slide.description}</p>
              <button 
                onClick={() => onNavigate(Page.Info)}
                className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Дэлгэрэнгүй үзэх
              </button>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Вэб сайтын тухай товч танилцуулга</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Сайн байна уу? Энэхүү вэб сайт нь 2-р багийн хийж гүйцэтгэсэн "Вэб Технологи" хичээлийн бие даалтын ажил юм. 
              Бид энэхүү сайтаараа дамжуулан орчин үеийн технологийн мэдээлэл болон өөрсдийн сургалтын явцыг харуулахыг зорьсон.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Та манай сайтаас мэдээллийн технологийн талаарх сонирхолтой нийтлэлүүд, бидний бие даалт болон гэрийн даалгаврын 
              явцыг хянах боломжтой Checklist хэсгүүдийг үзэж сонирхох боломжтой.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Мэргэжлийн дизайн</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Хэрэглэхэд хялбар</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Шуурхай хариу</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
              alt="About our team" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
              <p className="text-blue-600 font-bold text-2xl">100%</p>
              <p className="text-gray-500 text-sm">Чанарын баталгаа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Overview */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Вэб сайтын агуулга</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => onNavigate(Page.Info)} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Мэдээллийн хуудас</h3>
              <p className="text-gray-600 text-sm">Мэдээллийн технологийн салбарт гарч буй сүүлийн үеийн мэдээ мэдээлэл.</p>
            </div>
            <div onClick={() => onNavigate(Page.Assignments)} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Даалгавар хянах</h3>
              <p className="text-gray-600 text-sm">Бие даалт болон гэрийн даалгавруудын гүйцэтгэлийг хянах checklist.</p>
            </div>
            <div onClick={() => onNavigate(Page.Contact)} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Холбоо барих</h3>
              <p className="text-gray-600 text-sm">Санал хүсэлт болон асуух зүйлсээ бидэнд илгээх боломжтой.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

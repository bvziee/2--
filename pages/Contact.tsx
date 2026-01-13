
import React, { useState } from 'react';

const teamMembers = [
  { name: 'Тэлмэн', role: 'Багийн ахлагч' },
  { name: 'Дэлбээ', role: 'Вэб хөгжүүлэгч' },
  { name: 'Дашравдан', role: 'Дизайнер' },
  { name: 'Цэлмэг', role: 'Контент менежер' },
  { name: 'Амина', role: 'Шинжээч' },
  { name: 'Номуундарь', role: 'Маркетинг' }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and automated response
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success message
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-50 py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Багийн гишүүд ба Холбоо барих</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              2-р багийн хийж буй төсөлтэй холбоотой ямар нэгэн асуулт, санал хүсэлт байвал доорх маягтыг бөглөж бидэнд илгээнэ үү. 
            </p>

            {/* Team Members List */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Манай Багийнхан:</h3>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">И-мэйл хаяг</h4>
                  <p className="text-gray-600">contact@team-two.mn</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Байршил</h4>
                  <p className="text-gray-600">Улаанбаатар хот, Монгол улс</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-blue-50">
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-6 z-10 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Амжилттай илгээгдлээ!</h2>
                <p className="text-gray-600">
                  Санал хүсэлт өгсөнд баярлалаа. Бид таны имэйлд удахгүй хариу өгөх болно. (Автомат хариу)
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Шинэ мессеж бичих
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Таны нэр</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Овог нэр"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">И-мэйл хаяг</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Санал хүсэлт</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Та бидэнд юу хэлэхийг хүсэж байна вэ?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Илгээж байна...</span>
                  </>
                ) : (
                  <span>Илгээх</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

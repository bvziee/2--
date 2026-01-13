import React, { useState } from 'react';

const teamMembers = [
  { name: 'Тэлмэн', role: 'Valve Project Lead' },
  { name: 'Дэлбээ', role: 'Steam UI Dev' },
  { name: 'Дашравдан', role: 'Visual Designer' },
  { name: 'Цэлмэг', role: 'Source 2 Engineer' },
  { name: 'Амина', role: 'Data Analyst' },
  { name: 'Номуундарь', role: 'Community Manager' }
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#171a21] py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl font-black text-white mb-8 uppercase italic tracking-tighter">Support & Team</h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Steam x 2-р багийн хамтын ажиллагааны талаар асуух зүйл байвал Valve Support-той холбогдоно уу.
            </p>

            {/* Team List with Steam Badge style */}
            <div className="bg-[#1b2838] p-10 rounded-lg border border-[#66c0f4]/20 mb-10 shadow-2xl">
              <h3 className="text-xs font-black text-[#66c0f4] uppercase tracking-[0.4em] mb-8">Project Contributors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-black/20 rounded-sm border border-white/5 hover:border-[#66c0f4]/50 transition-all cursor-default">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#66c0f4] to-[#2a475e] rounded-sm flex items-center justify-center text-[#171a21] font-black text-sm">
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-white text-sm uppercase italic">{member.name}</p>
                      <p className="text-[10px] text-[#66c0f4] font-bold uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#66c0f4]/10 text-[#66c0f4] rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-black text-white uppercase italic">Steam Support Email</h4>
                  <p className="text-[#66c0f4]">dev@valve-team2.mn</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#a4d007]/10 text-[#a4d007] rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-black text-white uppercase italic">Valve HQ</h4>
                  <p className="text-[#66c0f4]">Bellevue, Washington, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1b2838] p-10 md:p-14 rounded-lg shadow-2xl relative overflow-hidden border border-[#66c0f4]/20">
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"/></svg>
            </div>
            {showSuccess && (
              <div className="absolute inset-0 bg-[#1b2838]/98 flex flex-col items-center justify-center text-center p-8 z-10 animate-fadeIn">
                <div className="w-24 h-24 bg-[#a4d007]/20 text-[#a4d007] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(164,208,7,0.2)]">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-4 uppercase italic">Ticket Created!</h2>
                <p className="text-gray-400 text-lg">
                  Санал хүсэлт амжилттай бүртгэгдлээ. Бид 24 цагийн дотор тантай эргэж холбогдоно.
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="mt-10 text-[#66c0f4] font-black uppercase tracking-widest hover:underline"
                >
                  Create New Ticket
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <h2 className="text-2xl font-black text-white uppercase italic mb-10">Support Ticket</h2>
              <div>
                <label className="block text-[10px] font-black text-[#66c0f4] uppercase tracking-[0.2em] mb-3">Хэрэглэгчийн нэр</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="GabeN"
                  className="w-full px-5 py-4 bg-[#171a21] border border-white/10 rounded-sm text-white focus:border-[#66c0f4] transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#66c0f4] uppercase tracking-[0.2em] mb-3">И-мэйл</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="gabe@valvesoftware.com"
                  className="w-full px-5 py-4 bg-[#171a21] border border-white/10 rounded-sm text-white focus:border-[#66c0f4] transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#66c0f4] uppercase tracking-[0.2em] mb-3">Асуудал / Санал</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Та юуг илүү сайжруулахыг хүсэж байна вэ?"
                  className="w-full px-5 py-4 bg-[#171a21] border border-white/10 rounded-sm text-white focus:border-[#66c0f4] transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-sm font-black text-[#171a21] transition-all transform active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-widest ${
                  isSubmitting ? 'bg-[#66c0f4]/50' : 'bg-gradient-to-r from-[#66c0f4] to-[#4c91ff] hover:brightness-110 shadow-lg shadow-[#66c0f4]/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-[#171a21]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Send Request</span>
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
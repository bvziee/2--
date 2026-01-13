import React, { useState, useEffect } from 'react';
import { Task } from '../types.ts';

const INITIAL_TASKS: Task[] = [
  { id: 'v1', title: 'Steam Store UI Редизайн (Mockup)', completed: true, type: 'assignment' },
  { id: 'v2', title: 'Source 2 Web API Интеграци', completed: false, type: 'assignment' },
  { id: 's1', title: 'React дээр Steam-ийн Dark Theme хийх', completed: true, type: 'homework' },
  { id: 's2', title: 'Тоглоомын жагсаалтын фильтер хөгжүүлэх', completed: false, type: 'homework' },
];

const Assignments: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem('valve_project_tasks');
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch (e) {
      return INITIAL_TASKS;
    }
  });

  useEffect(() => {
    localStorage.setItem('valve_project_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="bg-[#171a21] py-24 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">Project Roadmap</h1>
          <p className="text-[#66c0f4] text-lg font-bold uppercase tracking-[0.3em]">Valve x Team 2: Хөгжүүлэлтийн Явц</p>
        </div>

        <div className="bg-[#1b2838] p-10 rounded-lg border border-[#66c0f4]/20 mb-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
              <div className="text-4xl font-black text-[#66c0f4]/20">01</div>
           </div>
           <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-xs font-black text-[#a4d007] uppercase tracking-[0.4em] mb-2">Нийт ахиц</h3>
                <p className="text-6xl font-black text-white italic">{progress}<span className="text-[#66c0f4] text-2xl ml-1">%</span></p>
              </div>
              <div className="text-right">
                <span className="text-[#66c0f4] font-black uppercase tracking-widest text-sm">Release Build 1.0.4</span>
              </div>
            </div>
            <div className="w-full bg-[#171a21] rounded-none h-4 border border-white/5 p-[2px]">
              <div 
                className="bg-gradient-to-r from-[#66c0f4] to-[#a4d007] h-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(102,192,244,0.3)]" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
        </div>

        <div className="steam-card rounded-lg shadow-2xl overflow-hidden">
          <div className="p-10 border-b border-white/5 bg-white/5">
            <h2 className="text-2xl font-black text-white uppercase italic">Sprint Tasks</h2>
            <p className="text-gray-400 mt-2">Хөгжүүлэлтийн явцыг доорх жагсаалтаас хянана уу.</p>
          </div>
          <div className="divide-y divide-white/5">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                className={`flex items-center p-8 hover:bg-white/5 cursor-pointer transition-all ${
                  task.completed ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-sm border-2 flex items-center justify-center mr-6 transition-all duration-300 ${
                  task.completed ? 'bg-[#a4d007] border-[#a4d007]' : 'border-gray-600 bg-transparent'
                }`}>
                  {task.completed && (
                    <svg className="w-5 h-5 text-[#171a21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className={`text-xl font-bold transition-all uppercase italic ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {task.title}
                  </h4>
                  <div className="mt-2">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded ${task.type === 'assignment' ? 'text-[#66c0f4] bg-[#66c0f4]/10' : 'text-purple-400 bg-purple-400/10'}`}>
                      {task.type === 'assignment' ? 'Main Quest' : 'Side Quest'}
                    </span>
                  </div>
                </div>
                {task.completed && (
                  <span className="text-[10px] font-black text-[#a4d007] border border-[#a4d007] px-3 py-1 uppercase italic">Achievement Unlocked</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-xs flex items-center justify-center space-x-2 uppercase tracking-[0.2em]">
          <svg className="w-4 h-4 text-[#66c0f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p>Task data is saved in your Steam session (localStorage).</p>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
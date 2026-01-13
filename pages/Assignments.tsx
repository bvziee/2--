import React, { useState, useEffect } from 'react';
import { Task } from '../types.ts';

const INITIAL_TASKS: Task[] = [
  { id: 'b1', title: 'Бие даалт 1: Вэб сайтын төлөвлөгөө', completed: false, type: 'assignment' },
  { id: 'b2', title: 'Бие даалт 2: Вэб сайт хөгжүүлэлт', completed: false, type: 'assignment' },
  { id: 'g1', title: 'Гэрийн даалгавар 1: HTML үндэс', completed: false, type: 'homework' },
  { id: 'g2', title: 'Гэрийн даалгавар 2: Tailwind CSS ашиглах', completed: false, type: 'homework' },
];

const Assignments: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem('team_tasks');
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch (e) {
      return INITIAL_TASKS;
    }
  });

  useEffect(() => {
    localStorage.setItem('team_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const assignmentCount = tasks.filter(t => t.type === 'assignment' && t.completed).length;
  const homeworkCount = tasks.filter(t => t.type === 'homework' && t.completed).length;

  return (
    <div className="bg-gray-50 py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Даалгаврын Хяналт</h1>
          <p className="text-gray-500 text-lg">"2-р багийн бүтээл - Амжилтын төлөө хамтдаа"</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Бие даалт</h3>
                <p className="text-4xl font-black text-gray-900">{assignmentCount} <span className="text-gray-300 font-light text-2xl">/ 2</span></p>
              </div>
              <div className="text-right">
                <span className="text-blue-600 font-bold">{Math.round((assignmentCount / 2) * 100)}%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm shadow-blue-200" 
                style={{ width: `${(assignmentCount / 2) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-50">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-1">Гэрийн даалгавар</h3>
                <p className="text-4xl font-black text-gray-900">{homeworkCount} <span className="text-gray-300 font-light text-2xl">/ 2</span></p>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-bold">{Math.round((homeworkCount / 2) * 100)}%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm shadow-green-200" 
                style={{ width: `${(homeworkCount / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="p-10 border-b border-gray-50 bg-gradient-to-r from-blue-50/50 to-transparent">
            <h2 className="text-2xl font-bold text-gray-900">Даалгаврын жагсаалт</h2>
            <p className="text-gray-500 mt-1">Даалгавраа хийж дуусаад тэмдэглэнэ үү.</p>
          </div>
          <div className="divide-y divide-gray-50">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                className={`flex items-center p-8 hover:bg-gray-50/50 cursor-pointer transition-all ${
                  task.completed ? 'bg-gray-50/30' : 'bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center mr-6 transition-all duration-300 ${
                  task.completed ? 'bg-blue-600 border-blue-600 scale-110' : 'border-gray-200 bg-white'
                }`}>
                  {task.completed && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className={`text-xl font-semibold transition-all ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {task.title}
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${task.type === 'assignment' ? 'text-blue-600 bg-blue-50' : 'text-green-600 bg-green-50'}`}>
                      {task.type === 'assignment' ? 'Бие даалт' : 'Гэрийн даалгавар'}
                    </span>
                  </div>
                </div>
                {task.completed && (
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">Дууссан</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400 text-sm flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p>Тэмдэглэсэн даалгаврууд таны хөтөч дээр хадгалагдах болно.</p>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
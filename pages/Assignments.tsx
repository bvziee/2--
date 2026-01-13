
import React, { useState, useEffect } from 'react';
import { Task } from '../types';

const INITIAL_TASKS: Task[] = [
  { id: 'b1', title: 'Бие даалт 1: Вэб сайтын төлөвлөгөө', completed: false, type: 'assignment' },
  { id: 'b2', title: 'Бие даалт 2: Вэб сайт хөгжүүлэлт', completed: false, type: 'assignment' },
  { id: 'g1', title: 'Гэрийн даалгавар 1: HTML үндэс', completed: false, type: 'homework' },
  { id: 'g2', title: 'Гэрийн даалгавар 2: Tailwind CSS ашиглах', completed: false, type: 'homework' },
];

const Assignments: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('team_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Даалгаврын Хяналт</h1>
          <p className="text-gray-600 italic">"2-р багийн бүтээл - Амжилтын төлөө хамтдаа"</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
            <h3 className="text-lg font-bold text-blue-600 mb-2">Бие даалт</h3>
            <p className="text-3xl font-black text-gray-900">{assignmentCount} / 2</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(assignmentCount / 2) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
            <h3 className="text-lg font-bold text-green-600 mb-2">Гэрийн даалгавар</h3>
            <p className="text-3xl font-black text-gray-900">{homeworkCount} / 2</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(homeworkCount / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-100 bg-blue-50">
            <h2 className="text-2xl font-bold text-blue-900">Checklist / Reminder</h2>
            <p className="text-blue-600 text-sm">Даалгавраа хийж дуусаад тэмдэглэнэ үү.</p>
          </div>
          <div className="divide-y divide-gray-100">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                className={`flex items-center p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  task.completed ? 'opacity-60' : 'opacity-100'
                }`}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-6 transition-all ${
                  task.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}>
                  {task.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {task.title}
                  </h4>
                  <span className={`text-xs font-bold uppercase ${task.type === 'assignment' ? 'text-blue-500' : 'text-green-500'}`}>
                    {task.type === 'assignment' ? 'Бие даалт' : 'Гэрийн даалгавар'}
                  </span>
                </div>
                {task.completed && (
                  <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold">Хийсэн</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Тэмдэглэсэн даалгаврууд таны хөтөч дээр хадгалагдах болно.</p>
        </div>
      </div>
    </div>
  );
};

export default Assignments;

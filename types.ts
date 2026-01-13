
export enum Page {
  Home = 'home',
  Info = 'info',
  Assignments = 'assignments',
  Contact = 'contact'
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  type: 'assignment' | 'homework';
}

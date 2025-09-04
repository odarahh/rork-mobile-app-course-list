export interface Lesson {
  id: string;
  title: string;
  duration: number; // em minutos
  status: 'completed' | 'in-progress' | 'not-started';
  isFavorite: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number; // 0-100
  totalLessons: number;
  completedLessons: number;
  isFavorite: boolean;
  isExpanded: boolean;
  lessons: Lesson[];
}

export type ThemeMode = 'light' | 'dark';
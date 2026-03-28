import { Course } from '@/types/course';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Matters of the Mind',
    description: 'Explore os aspectos mentais do...',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
    progress: 66,
    totalLessons: 3,
    completedLessons: 2,
    isFavorite: false,
    isExpanded: false,
    lessons: [
      {
        id: '1-1',
        title: 'Introdução ao mindset',
        duration: 15,
        status: 'completed',
        isFavorite: false,
      },
      {
        id: '1-2',
        title: 'Técnicas de concentração...',
        duration: 10,
        status: 'completed',
        isFavorite: false,
      },
      {
        id: '1-3',
        title: 'Aplicação prática',
        duration: 12,
        status: 'not-started',
        isFavorite: false,
      },
    ]
  },
  {
    id: '2',
    title: 'Embrace the Journey',
    description: 'Aprenda a valorizar o processo de...',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop',
    progress: 33,
    totalLessons: 3,
    completedLessons: 1,
    isFavorite: false,
    isExpanded: false,
    lessons: [
      {
        id: '2-1',
        title: 'A importância do processo...',
        duration: 12,
        status: 'completed',
        isFavorite: false,
      },
      {
        id: '2-2',
        title: 'Celebrando pequenas vitórias',
        duration: 8,
        status: 'in-progress',
        isFavorite: false,
      },
      {
        id: '2-3',
        title: 'Superando obstáculos',
        duration: 15,
        status: 'not-started',
        isFavorite: false,
      },
    ]
  },
  {
    id: '3',
    title: 'Food Fundamental...',
    description: 'Fundamentos avançados de nutrição',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=100&h=100&fit=crop',
    progress: 0,
    totalLessons: 4,
    completedLessons: 0,
    isFavorite: false,
    isExpanded: false,
    lessons: [
      {
        id: '3-1',
        title: 'Introdução à nutrição',
        duration: 20,
        status: 'not-started',
        isFavorite: false,
      },
      {
        id: '3-2',
        title: 'Macronutrientes essenciais',
        duration: 18,
        status: 'not-started',
        isFavorite: false,
      },
      {
        id: '3-3',
        title: 'Planejamento de refeições',
        duration: 25,
        status: 'not-started',
        isFavorite: false,
      },
      {
        id: '3-4',
        title: 'Suplementação inteligente',
        duration: 15,
        status: 'not-started',
        isFavorite: false,
      },
    ]
  },
  {
    id: '4',
    title: 'Mindfulness Mastery',
    description: 'Domine as técnicas de mindfulness...',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
    progress: 100,
    totalLessons: 2,
    completedLessons: 2,
    isFavorite: true,
    isExpanded: false,
    lessons: [
      {
        id: '4-1',
        title: 'Respiração consciente',
        duration: 10,
        status: 'completed',
        isFavorite: false,
      },
      {
        id: '4-2',
        title: 'Meditação guiada',
        duration: 15,
        status: 'completed',
        isFavorite: true,
      },
    ]
  },
];
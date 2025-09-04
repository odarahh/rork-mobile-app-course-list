import { useState, useCallback } from 'react';
import { ThemeMode } from '@/types/course';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      console.log('Theme changed to:', newTheme);
      return newTheme;
    });
  }, []);

  const colors = {
    dark: {
      background: '#000000',
      cardBackground: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a0a0a0',
      border: '#333333',
      progress: '#ff4757',
      completed: '#2ed573',
      inProgress: '#3742fa',
      notStarted: '#747d8c',
      shadow: '#000000',
      shadowOpacity: 0.3,
    },
    light: {
      background: '#f8f9fa',
      cardBackground: '#ffffff',
      text: '#212529',
      textSecondary: '#6c757d',
      border: '#dee2e6',
      progress: '#dc3545',
      completed: '#28a745',
      inProgress: '#007bff',
      notStarted: '#adb5bd',
      shadow: '#000000',
      shadowOpacity: 0.15,
    }
  };

  return {
    theme,
    toggleTheme,
    colors: colors[theme]
  };
};
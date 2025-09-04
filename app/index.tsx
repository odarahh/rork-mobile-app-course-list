import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ArrowLeft, Sun, Moon } from 'lucide-react-native';
import { router } from 'expo-router';
import { Course, Lesson } from '@/types/course';
import { useTheme } from '@/hooks/useTheme';
import { CourseCard } from '@/components/CourseCard';
import { mockCourses } from '@/mocks/courses';

export default function CoursesScreen() {
  const { theme, toggleTheme, colors } = useTheme();
  const [courses, setCourses] = useState<Course[]>(mockCourses);

  const handleToggleExpand = (courseId: string) => {
    setCourses(prev =>
      prev.map(course =>
        course.id === courseId
          ? { ...course, isExpanded: !course.isExpanded }
          : course
      )
    );
  };

  const handleToggleFavorite = (courseId: string) => {
    setCourses(prev =>
      prev.map(course =>
        course.id === courseId
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      )
    );
  };

  const handleShare = (courseId: string) => {
    console.log('Compartilhar curso:', courseId);
  };

  const handleLessonPress = (lessonId: string) => {
    setCourses(prev =>
      prev.map(course => {
        const updatedLessons = course.lessons.map(lesson => {
          if (lesson.id === lessonId) {
            const newStatus: Lesson['status'] = lesson.status === 'completed' ? 'not-started' : 'completed';
            return { ...lesson, status: newStatus };
          }
          return lesson;
        });
        
        const completedCount = updatedLessons.filter(l => l.status === 'completed').length;
        const progress = Math.round((completedCount / course.totalLessons) * 100);
        
        return {
          ...course,
          lessons: updatedLessons,
          completedLessons: completedCount,
          progress
        };
      })
    );
  };

  const handleLessonToggleFavorite = (lessonId: string) => {
    setCourses(prev =>
      prev.map(course => ({
        ...course,
        lessons: course.lessons.map(lesson =>
          lesson.id === lessonId
            ? { ...lesson, isFavorite: !lesson.isFavorite }
            : lesson
        )
      }))
    );
  };

  const handleLessonShare = (lessonId: string) => {
    console.log('Compartilhar aula:', lessonId);
  };

  const renderCourse = ({ item }: { item: Course }) => (
    <CourseCard
      course={item}
      onToggleExpand={handleToggleExpand}
      onToggleFavorite={handleToggleFavorite}
      onShare={handleShare}
      onLessonPress={handleLessonPress}
      onLessonToggleFavorite={handleLessonToggleFavorite}
      onLessonShare={handleLessonShare}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Meus Cursos
        </Text>
        
        <TouchableOpacity
          style={styles.themeButton}
          onPress={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun size={24} color={colors.text} />
          ) : (
            <Moon size={24} color={colors.text} />
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  themeButton: {
    padding: 8,
  },
  listContainer: {
    paddingVertical: 8,
  },
});
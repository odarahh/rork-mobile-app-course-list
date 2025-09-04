import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Heart, Share2, ChevronDown, ChevronUp } from 'lucide-react-native';
import { Course } from '@/types/course';
import { useTheme } from '@/hooks/useTheme';
import { LessonItem } from './LessonItem';

interface CourseCardProps {
  course: Course;
  onToggleExpand: (courseId: string) => void;
  onToggleFavorite: (courseId: string) => void;
  onShare: (courseId: string) => void;
  onLessonPress: (lessonId: string) => void;
  onLessonToggleFavorite: (lessonId: string) => void;
  onLessonShare: (lessonId: string) => void;

}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onToggleExpand,
  onToggleFavorite,
  onShare,
  onLessonPress,
  onLessonToggleFavorite,
  onLessonShare,

}) => {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: colors.cardBackground,
        shadowColor: colors.shadow,
        shadowOpacity: colors.shadowOpacity,
      }
    ]}>
      <View style={styles.header}>
        <Text style={[styles.moduleLabel, { color: colors.textSecondary }]}>
          Trilha {course.id}
        </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => onToggleFavorite(course.id)}>
            <Heart
              size={20}
              color={course.isFavorite ? colors.progress : colors.textSecondary}
              fill={course.isFavorite ? colors.progress : 'transparent'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onShare(course.id)} style={styles.shareButton}>
            <Share2 size={20} color={colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onToggleExpand(course.id)}>
            {course.isExpanded ? (
              <ChevronUp size={20} color={colors.textSecondary} />
            ) : (
              <ChevronDown size={20} color={colors.textSecondary} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Image source={{ uri: course.image }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
            {course.title}
          </Text>
          <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={2}>
            {course.description}
          </Text>
          
          <View style={styles.progressSection}>
            <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
              <View
                style={[
                  styles.progressFill,
                  { 
                    backgroundColor: course.completedLessons === course.totalLessons ? colors.completed : colors.progress, 
                    width: `${course.progress}%` 
                  }
                ]}
              />
            </View>
            <Text style={[styles.progressText, { color: course.completedLessons === course.totalLessons ? colors.completed : colors.progress }]}>
              {course.completedLessons}/{course.totalLessons}
            </Text>
          </View>


        </View>
      </View>

      {course.isExpanded && (
        <View style={styles.lessonsContainer}>
          {course.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              onPress={onLessonPress}
              onToggleFavorite={onLessonToggleFavorite}
              onShare={onLessonShare}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 8,
  },
  moduleLabel: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    marginHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 0,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
  },

  lessonsContainer: {
    paddingBottom: 8,
  },
});
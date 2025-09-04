import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckCircle, Clock, Heart, Share2, ChevronRight } from 'lucide-react-native';
import { Lesson } from '@/types/course';
import { useTheme } from '@/hooks/useTheme';

interface LessonItemProps {
  lesson: Lesson;
  onToggleFavorite: (lessonId: string) => void;
  onShare: (lessonId: string) => void;
  onPress: (lessonId: string) => void;
}

export const LessonItem: React.FC<LessonItemProps> = ({
  lesson,
  onToggleFavorite,
  onShare,
  onPress,
}) => {
  const { colors } = useTheme();

  const getStatusIcon = () => {
    switch (lesson.status) {
      case 'completed':
        return <CheckCircle size={20} color={colors.completed} />;
      case 'in-progress':
        return <Clock size={20} color={colors.inProgress} />;
      default:
        return <View style={[styles.notStartedIcon, { borderColor: colors.notStarted }]} />;
    }
  };



  return (
    <TouchableOpacity
      style={[
        styles.container, 
        { 
          backgroundColor: colors.cardBackground, 
          borderColor: colors.border,
          shadowColor: colors.shadow,
          shadowOpacity: colors.shadowOpacity,
        }
      ]}
      onPress={() => onPress(lesson.id)}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        {getStatusIcon()}
        <View style={styles.content}>
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
            {lesson.title}
          </Text>
          <View style={styles.duration}>
            <Clock size={12} color={colors.textSecondary} />
            <Text style={[styles.durationText, { color: colors.textSecondary }]}>
              {lesson.duration} min
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onToggleFavorite(lesson.id)}
        >
          <Heart
            size={16}
            color={lesson.isFavorite ? colors.progress : colors.textSecondary}
            fill={lesson.isFavorite ? colors.progress : 'transparent'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onShare(lesson.id)}
        >
          <Share2 size={16} color={colors.textSecondary} />
        </TouchableOpacity>

        <ChevronRight size={16} color={colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    marginLeft: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    marginLeft: 4,
  },
  notStartedIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
});
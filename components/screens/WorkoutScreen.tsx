import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function WorkoutScreen() {
  const workouts = [
    { id: 1, name: 'Beast Mode HIIT', duration: '30 min', calories: 350, level: 7, type: 'HIIT' },
    { id: 2, name: 'Warrior Strength', duration: '45 min', calories: 400, level: 6, type: 'Strength' },
    { id: 3, name: 'Cardio Crusher', duration: '25 min', calories: 300, level: 5, type: 'Cardio' },
    { id: 4, name: 'Zen Yoga Flow', duration: '40 min', calories: 200, level: 4, type: 'Yoga' },
  ];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Training Ground</Text>
        <TouchableOpacity>
          <Icon name="filter" size={24} color="#7fff00" />
        </TouchableOpacity>
      </View>

      {workouts.map((workout) => (
        <TouchableOpacity key={workout.id} style={styles.workoutCard} activeOpacity={0.8}>
          <View style={styles.workoutIconContainer}>
            <Icon name="activity" size={32} color="#7fff00" />
          </View>
          
          <View style={styles.workoutInfo}>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <View style={styles.workoutMeta}>
              <View style={styles.workoutMetaItem}>
                <Icon name="clock" size={14} color="#8a8a9e" />
                <Text style={styles.workoutMetaText}>{workout.duration}</Text>
              </View>
              <View style={styles.workoutMetaItem}>
                <Icon name="zap" size={14} color="#8a8a9e" />
                <Text style={styles.workoutMetaText}>{workout.calories} cal</Text>
              </View>
              <View style={styles.workoutMetaItem}>
                <Icon name="trending-up" size={14} color="#8a8a9e" />
                <Text style={styles.workoutMetaText}>LVL {workout.level}</Text>
              </View>
            </View>
          </View>

          <View style={styles.workoutBadge}>
            <Text style={styles.workoutBadgeText}>{workout.type}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2a2a3e',
    alignItems: 'center',
  },
  workoutIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(127, 255, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  workoutMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  workoutMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  workoutMetaText: {
    color: '#8a8a9e',
    fontSize: 12,
    fontWeight: '600',
  },
  workoutBadge: {
    backgroundColor: '#7fff00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  workoutBadgeText: {
    color: '#000',
    fontSize: 11,
    fontWeight: '800',
  },
});


import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Achievement {
  id: number;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
  progress?: number;
}

export default function RewardsScreen() {
  const achievements: Achievement[] = [
    { id: 1, name: 'First Quest', description: 'Complete your first workout', unlocked: true, icon: 'check-circle' },
    { id: 2, name: '7-Day Warrior', description: 'Maintain a 7-day streak', unlocked: true, icon: 'zap' },
    { id: 3, name: 'Century Club', description: 'Complete 100 workouts', unlocked: false, icon: 'award', progress: 45 },
    { id: 4, name: 'Social Butterfly', description: 'Make 10 guild friends', unlocked: false, icon: 'users', progress: 7 },
  ];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Trophy Hall</Text>
        <TouchableOpacity>
          <Icon name="info" size={24} color="#7fff00" />
        </TouchableOpacity>
      </View>

      <View style={styles.rewardsStats}>
        <View style={styles.rewardsStat}>
          <Text style={styles.rewardsStatValue}>47</Text>
          <Text style={styles.rewardsStatLabel}>Total XP</Text>
        </View>
        <View style={styles.rewardsStat}>
          <Text style={styles.rewardsStatValue}>12</Text>
          <Text style={styles.rewardsStatLabel}>Achievements</Text>
        </View>
        <View style={styles.rewardsStat}>
          <Text style={styles.rewardsStatValue}>5</Text>
          <Text style={styles.rewardsStatLabel}>Chests</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Achievements</Text>

      {achievements.map((achievement) => (
        <View key={achievement.id} style={[
          styles.achievementCard,
          !achievement.unlocked && styles.achievementCardLocked
        ]}>
          <View style={[
            styles.achievementIcon,
            achievement.unlocked && styles.achievementIconUnlocked
          ]}>
            <Icon 
              name={achievement.icon as any} 
              size={32} 
              color={achievement.unlocked ? "#7fff00" : "#4a4a5e"} 
            />
          </View>

          <View style={styles.achievementInfo}>
            <Text style={[
              styles.achievementName,
              !achievement.unlocked && styles.achievementNameLocked
            ]}>
              {achievement.name}
            </Text>
            <Text style={styles.achievementDescription}>
              {achievement.description}
            </Text>
            {!achievement.unlocked && achievement.progress && (
              <View style={styles.achievementProgress}>
                <View style={styles.achievementProgressBar}>
                  <View style={[
                    styles.achievementProgressFill,
                    { width: `${achievement.progress}%` }
                  ]} />
                </View>
                <Text style={styles.achievementProgressText}>
                  {achievement.progress}%
                </Text>
              </View>
            )}
          </View>

          {achievement.unlocked && (
            <Icon name="check-circle" size={24} color="#7fff00" />
          )}
        </View>
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
  rewardsStats: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  rewardsStat: {
    flex: 1,
    backgroundColor: '#16213e',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2a2a3e',
  },
  rewardsStatValue: {
    color: '#7fff00',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 4,
  },
  rewardsStatLabel: {
    color: '#8a8a9e',
    fontSize: 11,
    fontWeight: '600',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#7fff00',
    alignItems: 'center',
  },
  achievementCardLocked: {
    borderColor: '#2a2a3e',
    opacity: 0.6,
  },
  achievementIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementIconUnlocked: {
    backgroundColor: 'rgba(127, 255, 0, 0.1)',
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  achievementNameLocked: {
    color: '#6a6a7e',
  },
  achievementDescription: {
    color: '#8a8a9e',
    fontSize: 13,
    fontWeight: '600',
  },
  achievementProgress: {
    marginTop: 8,
  },
  achievementProgressBar: {
    height: 6,
    backgroundColor: '#2a2a3e',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 4,
  },
  achievementProgressFill: {
    height: '100%',
    backgroundColor: '#7fff00',
    borderRadius: 3,
  },
  achievementProgressText: {
    color: '#8a8a9e',
    fontSize: 11,
    fontWeight: '600',
  },
});


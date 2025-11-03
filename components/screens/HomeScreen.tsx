import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  const [streakDays, setStreakDays] = useState([true, true, true, true, true, false, false]);
  const [workoutStarted, setWorkoutStarted] = useState(false);

  const completeWorkout = () => {
    const newStreak = [...streakDays];
    const firstIncomplete = newStreak.findIndex(day => !day);
    if (firstIncomplete !== -1) {
      newStreak[firstIncomplete] = true;
      setStreakDays(newStreak);
    }
    setWorkoutStarted(false);
  };

  return (
    <ScrollView 
      style={styles.scrollView} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header with User Level */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Icon name="user" size={32} color="#00d4ff" />
            </View>
          </View>
          
          <View style={styles.levelInfo}>
            <Text style={styles.levelText}>LVL 7</Text>
            <View style={styles.xpBarContainer}>
              <View style={styles.xpBar}>
                <View style={styles.xpFill} />
              </View>
            </View>
            <Text style={styles.xpText}>XP 5350/2000</Text>
          </View>
        </View>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="zap" size={24} color="#ff8c42" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Today's Ritual Card */}
      <View style={styles.ritualCard}>
        <View style={styles.cardGlow} />
        <Text style={styles.ritualTitle}>TODAY'S RITUAL</Text>
        <Text style={styles.ritualSubtitle}>THE 30-MIN HIIT QUEST</Text>
        <Text style={styles.ritualLevel}>LVL 7</Text>
        
        <TouchableOpacity 
          style={styles.startButton}
          activeOpacity={0.8}
          onPress={() => setWorkoutStarted(true)}
        >
          <Text style={styles.startButtonText}>
            {workoutStarted ? 'WORKOUT IN PROGRESS...' : 'START JOURNEY'}
          </Text>
        </TouchableOpacity>

        {workoutStarted && (
          <TouchableOpacity 
            style={styles.completeButton}
            activeOpacity={0.8}
            onPress={completeWorkout}
          >
            <Text style={styles.completeButtonText}>COMPLETE WORKOUT</Text>
          </TouchableOpacity>
        )}
        
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Epic Streak Card */}
      <View style={styles.streakCard}>
        <View style={styles.streakHeader}>
          <Text style={styles.streakTitle}>EPIC STREAK</Text>
          <View style={styles.chestIcon}>
            <View style={styles.chestBox}>
              <View style={styles.chestLock} />
            </View>
          </View>
        </View>
        
        <View style={styles.fireIcons}>
          {streakDays.map((active, index) => (
            <TouchableOpacity key={index} style={styles.fireIconContainer}>
              <Icon 
                name="zap" 
                size={24} 
                color={active ? "#ff8c42" : "#2a2a3e"}
              />
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.rewardInfo}>
          <Text style={styles.rewardTitle}>REWARD CHEST</Text>
          <Text style={styles.rewardSubtitle}>
            {streakDays.filter(d => d).length}-DAY STREAK • NEXT REWARD IN {7 - streakDays.filter(d => d).length} DAYS
          </Text>
        </View>
      </View>

      {/* Guild Hall Chronicles */}
      <View style={styles.guildSection}>
        <Text style={styles.guildTitle}>GUILD HALL CHRONICLES</Text>
        
        <View style={styles.guildCards}>
          <TouchableOpacity 
            style={[styles.guildCard, styles.guildCardBlue]}
            activeOpacity={0.8}
          >
            <View style={[styles.guildAvatar, styles.guildAvatarBlue]}>
              <Icon name="log-in" size={40} color="#00d4ff" />
            </View>
            <Text style={styles.guildLabel}>ENTER</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.guildCard, styles.guildCardGreen]}
            activeOpacity={0.8}
          >
            <View style={[styles.guildAvatar, styles.guildAvatarGreen]}>
              <Icon name="message-circle" size={40} color="#7fff00" />
            </View>
            <Text style={styles.guildLabel}>HAIL</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.guildCard, styles.guildCardOrange]}
            activeOpacity={0.8}
          >
            <View style={[styles.guildAvatar, styles.guildAvatarOrange]}>
              <Icon name="trending-up" size={40} color="#ff8c42" />
            </View>
            <Text style={styles.guildLabel}>CHALLENGE</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#00d4ff',
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  levelInfo: {
    flex: 1,
  },
  levelText: {
    color: '#7fff00',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  xpBarContainer: {
    marginBottom: 6,
  },
  xpBar: {
    height: 12,
    backgroundColor: '#2a2a3e',
    borderRadius: 6,
    overflow: 'hidden',
  },
  xpFill: {
    width: '68%',
    height: '100%',
    backgroundColor: '#7fff00',
    borderRadius: 6,
  },
  xpText: {
    color: '#8a8a9e',
    fontSize: 12,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ritualCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 24,
    borderWidth: 2,
    borderColor: '#00d4ff',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 212, 255, 0.08)',
  },
  ritualTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
    zIndex: 1,
  },
  ritualSubtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
    zIndex: 1,
  },
  ritualLevel: {
    color: '#8a8a9e',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 20,
    zIndex: 1,
  },
  startButton: {
    backgroundColor: '#ff8c42',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#ff8c42',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
    zIndex: 1,
  },
  startButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  completeButton: {
    backgroundColor: '#7fff00',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#7fff00',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
    zIndex: 1,
  },
  completeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    zIndex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2a2a3e',
    borderWidth: 1,
    borderColor: '#4a4a5e',
  },
  dotActive: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  streakCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ff8c42',
    shadowColor: '#ff8c42',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  streakHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  streakTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  chestIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chestBox: {
    width: 44,
    height: 36,
    backgroundColor: '#00d4ff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  chestLock: {
    width: 14,
    height: 14,
    backgroundColor: '#16213e',
    borderRadius: 7,
  },
  fireIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  fireIconContainer: {
    alignItems: 'center',
  },
  rewardInfo: {
    alignItems: 'center',
  },
  rewardTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 4,
  },
  rewardSubtitle: {
    color: '#8a8a9e',
    fontSize: 10,
    fontWeight: '600',
  },
  guildSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  guildTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  guildCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  guildCard: {
    flex: 1,
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
  },
  guildCardBlue: {
    borderColor: '#00d4ff',
  },
  guildCardGreen: {
    borderColor: '#7fff00',
  },
  guildCardOrange: {
    borderColor: '#ff8c42',
  },
  guildAvatar: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 36,
  },
  guildAvatarBlue: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
  },
  guildAvatarGreen: {
    backgroundColor: 'rgba(127, 255, 0, 0.1)',
  },
  guildAvatarOrange: {
    backgroundColor: 'rgba(255, 140, 66, 0.1)',
  },
  guildLabel: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});


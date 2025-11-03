import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ProfileScreenProps {
  onLogout: () => void;
}

export default function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const stats = [
    { label: 'Workouts', value: '45', icon: 'activity' },
    { label: 'Streak', value: '5', icon: 'zap' },
    { label: 'Friends', value: '23', icon: 'users' },
    { label: 'Hours', value: '32', icon: 'clock' },
  ];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatarLarge}>
          <Icon name="user" size={48} color="#00d4ff" />
        </View>
        <Text style={styles.profileName}>Warrior Elite</Text>
        <Text style={styles.profileLevel}>Level 7 • 5350 XP</Text>
        
        <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.8}>
          <Icon name="edit-2" size={16} color="#fff" />
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Icon name={stat.icon as any} size={24} color="#7fff00" />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileOption} activeOpacity={0.8}>
          <Icon name="settings" size={20} color="#8a8a9e" />
          <Text style={styles.profileOptionText}>Settings</Text>
          <Icon name="chevron-right" size={20} color="#8a8a9e" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileOption} activeOpacity={0.8}>
          <Icon name="bell" size={20} color="#8a8a9e" />
          <Text style={styles.profileOptionText}>Notifications</Text>
          <Icon name="chevron-right" size={20} color="#8a8a9e" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileOption} activeOpacity={0.8}>
          <Icon name="help-circle" size={20} color="#8a8a9e" />
          <Text style={styles.profileOptionText}>Help & Support</Text>
          <Icon name="chevron-right" size={20} color="#8a8a9e" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileOption} activeOpacity={0.8}>
          <Icon name="shield" size={20} color="#8a8a9e" />
          <Text style={styles.profileOptionText}>Privacy Policy</Text>
          <Icon name="chevron-right" size={20} color="#8a8a9e" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.profileOption, styles.logoutOption]} 
          activeOpacity={0.8}
          onPress={onLogout}
        >
          <Icon name="log-out" size={20} color="#ff4444" />
          <Text style={[styles.profileOptionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  profileAvatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#00d4ff',
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  profileLevel: {
    color: '#8a8a9e',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7fff00',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
  },
  editProfileButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: '#16213e',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2a2a3e',
  },
  statValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    color: '#8a8a9e',
    fontSize: 12,
    fontWeight: '600',
  },
  profileSection: {
    marginBottom: 24,
  },
  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2a2a3e',
  },
  profileOptionText: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 16,
  },
  logoutOption: {
    borderColor: '#ff4444',
    backgroundColor: 'rgba(255, 68, 68, 0.1)',
  },
  logoutText: {
    color: '#ff4444',
  },
});


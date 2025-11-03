import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CommunityScreen from '../screens/CommunityScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RewardsScreen from '../screens/RewardsScreen';
import WorkoutScreen from '../screens/WorkoutScreen';

interface MainAppProps {
  onLogout: () => void;
}

export default function MainApp({ onLogout }: MainAppProps) {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'workout':
        return <WorkoutScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'rewards':
        return <RewardsScreen />;
      case 'profile':
        return <ProfileScreen onLogout={onLogout} />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {renderScreen()}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveScreen('home')}
          activeOpacity={0.8}
        >
          <Icon 
            name="home" 
            size={24} 
            color={activeScreen === 'home' ? '#7fff00' : '#6a6a7e'} 
          />
          <Text style={[
            styles.navLabel, 
            activeScreen === 'home' && styles.navLabelActive
          ]}>
            HOME
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveScreen('workout')}
          activeOpacity={0.8}
        >
          <Icon 
            name="activity" 
            size={24} 
            color={activeScreen === 'workout' ? '#7fff00' : '#6a6a7e'} 
          />
          <Text style={[
            styles.navLabel, 
            activeScreen === 'workout' && styles.navLabelActive
          ]}>
            WORKOUT
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveScreen('community')}
          activeOpacity={0.8}
        >
          <Icon 
            name="users" 
            size={24} 
            color={activeScreen === 'community' ? '#7fff00' : '#6a6a7e'} 
          />
          <Text style={[
            styles.navLabel, 
            activeScreen === 'community' && styles.navLabelActive
          ]}>
            COMMUNITY
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveScreen('rewards')}
          activeOpacity={0.8}
        >
          <Icon 
            name="award" 
            size={24} 
            color={activeScreen === 'rewards' ? '#7fff00' : '#6a6a7e'} 
          />
          <Text style={[
            styles.navLabel, 
            activeScreen === 'rewards' && styles.navLabelActive
          ]}>
            REWARDS
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveScreen('profile')}
          activeOpacity={0.8}
        >
          <Icon 
            name="user" 
            size={24} 
            color={activeScreen === 'profile' ? '#7fff00' : '#6a6a7e'} 
          />
          <Text style={[
            styles.navLabel, 
            activeScreen === 'profile' && styles.navLabelActive
          ]}>
            PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#16213e',
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#2a2a3e',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navLabel: {
    color: '#6a6a7e',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  navLabelActive: {
    color: '#7fff00',
  },
});


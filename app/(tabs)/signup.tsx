import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  Modal,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SignupScreen({ onSignup, onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.authContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <ScrollView contentContainerStyle={styles.authScroll}>
        <View style={styles.authHeader}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/FleXpLogo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.appTitle}>FLEXP</Text>
          <Text style={styles.appTagline}>Begin Your Epic Journey</Text>
        </View>

        <View style={styles.authForm}>
          <Text style={styles.authTitle}>Create Your Legend</Text>
          
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#8a8a9e" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Warrior Name"
              placeholderTextColor="#6a6a7e"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="mail" size={20} color="#8a8a9e" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#6a6a7e"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#8a8a9e" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#6a6a7e"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            style={[styles.primaryButton, styles.signupButton]}
            onPress={onSignup}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>JOIN THE GUILD</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Icon name="github" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Sign up with GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Icon name="chrome" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Sign up with Google</Text>
          </TouchableOpacity>

          <View style={styles.switchAuth}>
            <Text style={styles.switchAuthText}>Already a warrior? </Text>
            <TouchableOpacity onPress={onSwitchToLogin}>
              <Text style={styles.switchAuthLink}>Login Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// Main App Component - Handles authentication state and routing
import React, { useState } from 'react';
import MainApp from '../../components/navigation/MainApp';
import LoginScreen from '../../components/screens/LoginScreen';
import SignupScreen from '../../components/screens/SignupScreen';

// ======================
// MAIN APP COMPONENT
// ======================
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  if (!isLoggedIn) {
    return showLogin ? (
      <LoginScreen 
        onLogin={() => setIsLoggedIn(true)}
        onSwitchToSignup={() => setShowLogin(false)}
      />
    ) : (
      <SignupScreen 
        onSignup={() => setIsLoggedIn(true)}
        onSwitchToLogin={() => setShowLogin(true)}
      />
    );
  }

  return <MainApp onLogout={() => setIsLoggedIn(false)} />;
}

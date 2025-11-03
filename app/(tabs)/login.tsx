import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    StatusBar,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

interface LoginScreenProps {
    onLogin: () => void;
    onSwitchToSignup: () => void;
}

export default function LoginScreen({ onLogin, onSwitchToSignup }: LoginScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.authContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
            <ScrollView contentContainerStyle={styles.authScroll}>
            <View style={styles.authHeader}>
                <Text style={styles.appTagline}>Level Up Your Fitness Journey</Text>
            </View>
            <View style={styles.authForm}>
                <Text style={styles.authTitle}>Welcome Back, Warrior</Text>

                <View style={styles.inputContainer}>
                    <Icon name="mail" size={20} color="#8a8a9e" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#6a6a7e"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#8a8a9e" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#6a6a7e"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.primaryButton}
                onPress={onLogin}
                activeOpacity={0.8}
            >
                <Text style={styles.primaryButtonText}>START YOUR QUEST</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.dividerLine} />
            </View>

                <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                    <Icon name="github" size={20} color="#fff" />
                    <Text style={styles.socialButtonText}>Continue with GitHub</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                    <Icon name="chrome" size={20} color="#fff" />
                    <Text style={styles.socialButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                
                <View style={styles.switchAuth}>
                    <Text style={styles.switchAuthText}>New to FlexP? </Text>
                    <TouchableOpacity onPress={onSwitchToSignup}>
                        <Text style={styles.switchAuthLink}>Join the Guild</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        backgroundColor: '#1a1a2e',
    },
    authScroll: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    authHeader: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#16213e',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#7fff00',
        marginBottom: 20,
        shadowColor: '#7fff00',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 10,
    },
    appTitle: {
        fontSize: 42,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 2,
        marginBottom: 8,
    },
    appTagline: {
        fontSize: 14,
        color: '#8a8a9e',
        fontWeight: '600',
    },
    authForm: {
        flex: 1,
    },
    authTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#16213e',
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#2a2a3e',
        paddingHorizontal: 16,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        paddingVertical: 16,
    },
    forgotPassword: {
        color: '#7fff00',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'right',
        marginBottom: 24,
    },
    primaryButton: {
        backgroundColor: '#7fff00',
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#7fff00',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 6,
    },
    primaryButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 1,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#2a2a3e',
    },
    dividerText: {
        color: '#6a6a7e',
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 16,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16213e',
        paddingVertical: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#2a2a3e',
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 12,
    },
    switchAuth: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 40,
    },
    switchAuthText: {
        color: '#8a8a9e',
        fontSize: 14,
    },
    switchAuthLink: {
        color: '#7fff00',
        fontSize: 14,
        fontWeight: '700',
    },
});

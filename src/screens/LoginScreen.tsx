import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import BottomMenuItem from '../components/BottomMenuItem';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitials}>GG</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.greetingText}>olá, Guilherme</Text>
            <Text style={styles.accountText}>Ag •••• C/C •••••-•</Text>
          </View>
          <Feather name="chevron-down" size={24} color="#FFFFFF" />
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.passwordLabel}>senha eletrônica</Text>
          
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#FFFFFF" />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <BottomMenuItem 
            icon={<MaterialCommunityIcons name="gesture-swipe" size={26} color="#FFFFFF" />} 
            label="atalhos" 
            color="#FFFFFF"
          />
          <BottomMenuItem 
            icon={<MaterialCommunityIcons name="key-chain" size={26} color="#FFFFFF" />} 
            label="iToken" 
            color="#FFFFFF"
          />
          <BottomMenuItem 
            icon={<Feather name="message-circle" size={26} color="#FFFFFF" />} 
            label="ajuda" 
            color="#FFFFFF"
          />
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EC7000',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    color: '#EC7000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  accountText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: '100%',
    paddingBottom: 8,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    marginLeft: 12,
    letterSpacing: 4,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#EC7000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
});
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import BottomMenuItem from '../../components/BottomMenuItem';
import { styles } from './style';

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
            <Text style={styles.profileInitials}>PC</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.greetingText}>olá, Pedro</Text>
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
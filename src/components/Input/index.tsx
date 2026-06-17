import React, { useState, ReactNode } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  type?: 'text' | 'password';
  variant?: 'default' | 'underline';
  leftIcon?: ReactNode;
}

export default function Input({ label, error, type = 'text', variant = 'default', leftIcon, ...rest }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === 'password';
  const isUnderline = variant === 'underline';

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, !isUnderline && { color: '#333333', fontSize: 14, textAlign: 'left', marginBottom: 8, fontWeight: '500' }]}>{label}</Text>}

      <View style={[
        styles.inputContainer,
        isUnderline ? styles.inputContainerUnderline : styles.inputContainerDefault,
        error && styles.inputError
      ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[styles.input, isUnderline ? styles.inputUnderline : styles.inputDefault]}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor={isUnderline ? "#FFFFFF" : "#999999"}
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={isUnderline ? "#FFFFFF" : "#666666"}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
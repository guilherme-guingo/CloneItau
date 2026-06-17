import React, { ReactNode } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

interface BottomMenuItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  color?: string;
}

export default function BottomMenuItem({ icon, label, isActive, color }: BottomMenuItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Text style={[styles.label, { color: color || (isActive ? '#EC7000' : '#666666') }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
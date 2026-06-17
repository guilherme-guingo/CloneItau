import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '500',
  },
});
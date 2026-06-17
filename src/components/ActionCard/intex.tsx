import React, { ReactNode } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

interface ActionCardProps {
  icon: ReactNode;
  title: string;
}

export default function ActionCard({ icon, title }: ActionCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
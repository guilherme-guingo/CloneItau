import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 100,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
});
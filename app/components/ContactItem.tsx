import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Contact } from '../data/contacts';
import { theme, colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

interface ContactItemProps {
  contact: Contact;
  onPress?: (contact: Contact) => void;
}

export default function ContactItem({ contact, onPress }: ContactItemProps) {
  // Create color based on contact name for consistent avatar colors
  const getInitialColor = (name: string) => {
    const charCode = name.charCodeAt(0);
    const hue = (charCode * 10) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  const initialColor = getInitialColor(contact.name);
  const textColor = 'white';
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress && onPress(contact)}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        {contact.avatar ? (
          <Image source={{ uri: contact.avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.placeholderAvatar, { backgroundColor: initialColor }]}>
            <Text style={[styles.placeholderText, { color: textColor }]}>
              {contact.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <View style={styles.contactInfoRow}>
          <Ionicons name="call-outline" size={14} color={colors.textSecondary} style={styles.infoIcon} />
          <Text style={styles.contactInfo}>{contact.phone}</Text>
        </View>
        <View style={styles.contactInfoRow}>
          <Ionicons name="mail-outline" size={14} color={colors.textSecondary} style={styles.infoIcon} />
          <Text style={styles.contactInfo}>{contact.email}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="chevron-forward" size={20} color={colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['4'],
    marginVertical: spacing['1'],
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  avatarContainer: {
    marginRight: spacing['4'],
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.full,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing['1'],
    color: colors.text,
  },
  contactInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing['1'],
  },
  infoIcon: {
    marginRight: spacing['1'],
  },
  contactInfo: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  actionButton: {
    padding: spacing['2'],
  },
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme, colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      
      <View style={styles.welcomeContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="book" size={40} color={colors.card} />
        </View>
        <Text style={styles.subtitle}>Your Contacts</Text>
        <Text style={styles.description}>
          Access and manage your important contacts with ease
        </Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: colors.primaryLight }]}>
            <Ionicons name="people" size={24} color={colors.primary} />
          </View>
          <Text style={styles.statCount}>10</Text>
          <Text style={styles.statLabel}>Contacts</Text>
        </View>
        
        <View style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: colors.accentLight }]}>
            <Ionicons name="star" size={24} color={colors.accent} />
          </View>
          <Text style={styles.statCount}>3</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>
      
      <Link href="/(tabs)/contacts" asChild>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>View All Contacts</Text>
          <Ionicons name="arrow-forward" size={20} color={colors.card} />
        </TouchableOpacity>
      </Link>
      
      <View style={styles.quickActionContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="person-add" size={22} color={colors.primary} />
            </View>
            <Text style={styles.quickActionText}>Add Contact</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="search" size={22} color={colors.primary} />
            </View>
            <Text style={styles.quickActionText}>Search</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="settings" size={22} color={colors.primary} />
            </View>
            <Text style={styles.quickActionText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing['10'],
    paddingHorizontal: spacing['5'],
  },
  header: {
    marginBottom: spacing['6'],
  },
  greeting: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    marginBottom: spacing['1'],
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  welcomeContainer: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing['6'],
    alignItems: 'center',
    marginBottom: spacing['6'],
    ...shadows.md,
  },
  iconContainer: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing['4'],
    ...shadows.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing['2'],
  },
  description: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing['6'],
  },
  statCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing['4'],
    alignItems: 'center',
    width: '48%',
    ...shadows.sm,
  },
  statIcon: {
    padding: spacing['3'],
    borderRadius: borderRadius.full,
    marginBottom: spacing['2'],
  },
  statCount: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  statLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing['4'],
    paddingHorizontal: spacing['5'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing['6'],
    ...shadows.sm,
  },
  buttonText: {
    color: colors.card,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    marginRight: spacing['2'],
  },
  quickActionContainer: {
    marginBottom: spacing['6'],
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing['4'],
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing['3'],
    width: '30%',
    ...shadows.sm,
  },
  quickActionIcon: {
    backgroundColor: colors.highlight,
    padding: spacing['3'],
    borderRadius: borderRadius.full,
    marginBottom: spacing['2'],
  },
  quickActionText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    fontWeight: typography.fontWeight.medium,
  },
});
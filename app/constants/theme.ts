// Modern UI Theme Constants

// Color Palette
export const colors = {
  // Primary colors
  primary: '#6366F1', // Indigo
  primaryDark: '#4F46E5',
  primaryLight: '#A5B4FC',
  
  // Accent colors
  accent: '#F59E0B', // Amber
  accentDark: '#D97706',
  accentLight: '#FCD34D',
  
  // Neutral colors
  background: '#F9FAFB',
  card: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  
  // UI colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Additional UI
  placeholder: '#D1D5DB',
  disabled: '#E5E7EB',
  highlight: 'rgba(99, 102, 241, 0.1)',
  overlay: 'rgba(17, 24, 39, 0.5)',
};

// Typography
export const typography = {
  fontFamily: {
    sans: undefined, // System font
    mono: undefined, // System monospace font
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  '0': 0,
  '0.5': 2,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '8': 32,
  '10': 40,
  '12': 48,
  '16': 64,
};

// Border Radius
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadows
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
};

// Component Styles
export const componentStyles = {
  button: {
    primary: {
      backgroundColor: colors.primary,
      pressedBackgroundColor: colors.primaryDark,
      textColor: colors.card,
      borderRadius: borderRadius.md,
      paddingVertical: spacing['3'],
      paddingHorizontal: spacing['5'],
    },
    secondary: {
      backgroundColor: colors.card,
      pressedBackgroundColor: colors.borderLight,
      textColor: colors.primary,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: borderRadius.md,
      paddingVertical: spacing['3'],
      paddingHorizontal: spacing['5'],
    },
    accent: {
      backgroundColor: colors.accent,
      pressedBackgroundColor: colors.accentDark,
      textColor: colors.card,
      borderRadius: borderRadius.md,
      paddingVertical: spacing['3'],
      paddingHorizontal: spacing['5'],
    },
  },
  
  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.md,
    paddingVertical: spacing['3'],
    paddingHorizontal: spacing['4'],
    fontSize: typography.fontSize.base,
    color: colors.text,
  },
  
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing['4'],
    ...shadows.md,
  },
  
  header: {
    backgroundColor: colors.card,
    paddingVertical: spacing['4'],
    paddingHorizontal: spacing['4'],
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
};

// Animation Durations
export const animation = {
  fast: 200,
  normal: 300,
  slow: 500,
};

// Default screen container style
export const screenContainer = {
  flex: 1,
  backgroundColor: colors.background,
  paddingHorizontal: spacing['4'],
};

// Export theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  componentStyles,
  animation,
  screenContainer,
};

export default theme;
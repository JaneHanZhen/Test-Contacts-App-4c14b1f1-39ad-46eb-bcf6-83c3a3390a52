import React, { useState } from 'react';
import { 
  StyleSheet, 
  FlatList, 
  View, 
  SafeAreaView, 
  TextInput, 
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ContactItem from '../components/ContactItem';
import { contacts, Contact } from '../data/contacts';
import { theme, colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

export default function ContactsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [animation] = useState(new Animated.Value(0));
  
  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactPress = (contact: Contact) => {
    // Animate press feedback
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: theme.animation.fast,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: theme.animation.fast,
        useNativeDriver: true,
      }),
    ]).start();
    
    // You could add navigation to a contact details screen here
    console.log('Friend selected:', contact.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends..."
          placeholderTextColor={colors.textTertiary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity 
            onPress={() => setSearchQuery('')}
            style={styles.clearButton}
          >
            <Ionicons name="close-circle" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.listContainer}>
        {filteredContacts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconContainer}>
              <Ionicons name="search" size={32} color={colors.primary} />
            </View>
            <Text style={styles.emptyTitle}>No Results</Text>
            <Text style={styles.emptyText}>We couldn't find any friends matching "{searchQuery}"</Text>
          </View>
        ) : (
          <>
            <Text style={styles.contactsCount}>
              {filteredContacts.length} {filteredContacts.length === 1 ? 'Friend' : 'Friends'}
            </Text>
            <FlatList
              data={filteredContacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContactItem 
                  contact={item} 
                  onPress={handleContactPress}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing['10'],
    paddingHorizontal: spacing['5'],
    paddingBottom: spacing['4'],
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginHorizontal: spacing['5'],
    marginTop: spacing['4'],
    marginBottom: spacing['2'],
    paddingHorizontal: spacing['4'],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.sm,
  },
  searchIcon: {
    marginRight: spacing['2'],
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: typography.fontSize.base,
    color: colors.text,
  },
  clearButton: {
    padding: spacing['2'],
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: spacing['5'],
  },
  contactsCount: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    marginVertical: spacing['3'],
  },
  listContent: {
    paddingBottom: spacing['5'],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing['5'],
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing['4'],
  },
  emptyTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing['2'],
  },
  emptyText: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed,
  },
});
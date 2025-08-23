import React from 'react';
import { Redirect } from 'expo-router';

export default function IndexScreen() {
  // Redirect to contacts page
  return <Redirect href="/(tabs)/contacts" />;
}
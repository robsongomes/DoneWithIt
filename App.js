import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './app/components/Card';
import ListItem from './app/components/ListItem';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  }
})
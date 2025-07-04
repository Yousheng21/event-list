import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Navigation } from './components/navigation/Navigation';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

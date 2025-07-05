import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Navigation } from './components/navigation/Navigation';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar />
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

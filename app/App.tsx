import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Navigation } from './components/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
import { displayToast } from './utils/toast';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        displayToast('error', 'Отсутствует соединение с интернетом');
      }
    });

    return () => removeNetInfoSubscription();
  }, []);
  
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <View style={styles.container}>
              <StatusBar />
              <Navigation />
            </View>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

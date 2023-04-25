import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style='auto' />
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

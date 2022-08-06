import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEvent } from '../event';

export default function HomeScreen() {
  useEvent(
    'hello',
    (name) => alert(`Hello, ${name || 'World'}!`),
    this,
    false
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

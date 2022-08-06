import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEventEmitter } from '../event';

export default function SettingsScreen() {
  const emitter = useEventEmitter();
  const [name, setName] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setName}
        placeholder="Name..."
        style={styles.input}
        value={name}
      />
      <Button
        onPress={() => emitter.emit('hello', name)}
        style={styles.button}
        title="Say Hello"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 10
  }
});

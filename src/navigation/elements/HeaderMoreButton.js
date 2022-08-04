import { MaterialIcons } from '@expo/vector-icons';
import { PlatformPressable } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';

import { SETTINGS } from '../routes';

export default function HeaderMoreButton({ onPress, size = 24, style }) {
  const navigation = useNavigation();

  return (
    <PlatformPressable
      android_ripple={{ radius: 16 }}
      onPress={onPress ? onPress : () => navigation.navigate(SETTINGS)}
      style={[styles.pressable, style]}
    >
      <MaterialIcons name="more-vert" size={size} />
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: Platform.select({
      android: -5,
      default: 10
    }),
    padding: 5
  }
});

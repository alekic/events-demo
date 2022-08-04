import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen } from '../screens';
import { HeaderMoreButton } from './elements';
import { HOME, SETTINGS } from './routes';

const Stack = createNativeStackNavigator();

export default function RooStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerRight: HeaderMoreButton
        }}
      />
      <Stack.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}

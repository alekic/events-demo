import { NavigationContainer } from '@react-navigation/native';
import { EventEmitter } from 'eventemitter3';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { EventEmitterProvider } from './event';

import { RooStackNavigator } from './navigation';

const eventEmitter = new EventEmitter();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <EventEmitterProvider eventEmitter={eventEmitter}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RooStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </EventEmitterProvider>
    </>
  );
}

registerRootComponent(App);

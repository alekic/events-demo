import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import EventEmitterContext from './EventEmitterContext';
import EventEmitterProvider from './EventEmitterProvider';

const eventEmitter = { name: 'Batman' };

describe('EventEmitterProvider', () => {
  it('should provide event emitter', () => {
    render(
      <EventEmitterProvider eventEmitter={eventEmitter}>
        <EventEmitterContext.Consumer>
          {(emitter) => <Text>{emitter.name}</Text>}
        </EventEmitterContext.Consumer>
      </EventEmitterProvider>
    );

    expect(screen.getByText(/Batman/i)).toBeDefined();
  });

  it('should render correctly', () => {
    render(
      <EventEmitterProvider eventEmitter={eventEmitter}>
        <Text>Robin</Text>
      </EventEmitterProvider>
    );

    expect(screen.getByText(/Robin/i)).toBeDefined();
  });
});

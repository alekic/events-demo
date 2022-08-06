import EventEmitterContext from '../EventEmitterContext';
import mockedEventEmitter from './eventEmitter';

export default function EventEmitterProvider({ children }) {
  return (
    <EventEmitterContext.Provider value={mockedEventEmitter}>
      {children}
    </EventEmitterContext.Provider>
  );
}

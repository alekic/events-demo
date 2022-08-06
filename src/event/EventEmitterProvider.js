import EventEmitterContext from './EventEmitterContext';

export default function EventEmitterProvider({ children, eventEmitter }) {
  return (
    <EventEmitterContext.Provider value={eventEmitter}>
      {children}
    </EventEmitterContext.Provider>
  );
}

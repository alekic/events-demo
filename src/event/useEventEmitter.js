import { useContext } from 'react';
import EventEmitterContext from './EventEmitterContext';

export default function useEventEmitter() {
  return useContext(EventEmitterContext);
}

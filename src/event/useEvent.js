import { useEffect } from 'react';
import useEventEmitter from './useEventEmitter';

export default function useEvent(event, fn, context, once) {
  const emitter = useEventEmitter();

  useEffect(() => {
    if (once) {
      emitter.once(event, fn, context);
    } else {
      emitter.on(event, fn, context);
    }

    return () => {
      emitter.off(event, fn, context, once);
    };
  }, [event, fn, context, once]);
}

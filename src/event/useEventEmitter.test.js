import { renderHook } from '@testing-library/react-hooks';
import EventEmitterProvider from './EventEmitterProvider';
import useEventEmitter from './useEventEmitter';

jest.mock('./EventEmitterProvider');

describe('useEventEmitter', () => {
  it('should return event emitter', () => {
    const { result } = renderHook(() => useEventEmitter(), {
      wrapper: EventEmitterProvider
    });

    expect(result.current).toEqual(
      expect.objectContaining({
        addListener: expect.any(Function),
        emit: expect.any(Function),
        off: expect.any(Function),
        on: expect.any(Function),
        once: expect.any(Function),
        removeListener: expect.any(Function),
        removeAllListeners: expect.any(Function)
      })
    );
  });
});

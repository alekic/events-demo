import { renderHook } from '@testing-library/react-hooks';
import eventEmitter from './__mocks__/eventEmitter';
import EventEmitterProvider from './EventEmitterProvider';
import useEvent from './useEvent';

jest.mock('./EventEmitterProvider');

const context = {};
const event = 'test';
const fn = jest.fn();

function renderUseEventHook() {
  return renderHook(
    ({ event, fn, context, once }) => useEvent(event, fn, context, once),
    {
      initialProps: {
        context,
        event,
        fn,
        once: false
      },
      wrapper: EventEmitterProvider
    }
  );
}

describe('useEvent', () => {
  it('should add event listener on mount', () => {
    renderUseEventHook();

    expect(eventEmitter.on).toBeCalledWith(event, fn, context);
  });

  it('should update event listener when arguments change', () => {
    const { rerender } = renderUseEventHook();

    rerender({ context, event, fn, once: true });

    expect(eventEmitter.once).toBeCalledWith(event, fn, context);
  });

  it('should remove event listener on unmount', () => {
    const { unmount } = renderUseEventHook();

    unmount();

    expect(eventEmitter.off).toBeCalledWith(event, fn, context, false);
  });
});

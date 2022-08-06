const addListenerMock = jest.fn();
const removeListenerMock = jest.fn();

export default {
  addListener: addListenerMock,
  emit: jest.fn(),
  off: removeListenerMock,
  on: addListenerMock,
  once: jest.fn(),
  removeListener: removeListenerMock,
  removeAllListeners: jest.fn()
};

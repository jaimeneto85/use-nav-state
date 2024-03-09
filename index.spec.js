import { renderHook, act } from '@testing-library/react-hooks/dom';

import { useNavState } from './index';

describe('useStringStateWithUrl hook', () => {
  beforeEach(() => {
    // Mock para window.history.pushState
    window.history.pushState = jest.fn();
  });

  afterEach(() => {
    // Limpa os mocks após cada teste
    jest.clearAllMocks();
  });
  test('should use string state with URL', () => {
    const { result } = renderHook(() => useNavState('testKey', 'initial'));
    
    let [currentState, setState] = result.current;

    act(() => {
      setState('newValue');
    });

    [currentState] = result.current;
    // Verifica se o estado foi atualizado corretamente.
    expect(currentState).toBe('newValue');
    });
});

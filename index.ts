import { useState, useEffect } from 'react';

type TUseNavState = [value: string, setValue: (value: string) => void];

export function useNavState(key: string, initialValue?: string) : TUseNavState {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || initialValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (value) params.set(key, value);
    else params.delete(key);
    console.log(params.toString());
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  }, [value, key]);

  return [value, setValue];
}
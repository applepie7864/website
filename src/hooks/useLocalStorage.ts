import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (newValue: T) => setValue(newValue);

  return [value, updateValue];
}
// create the useLocalStorage hook which takes the key and default value check if that value exists in local storage

import { useEffect, useState } from "react";

function UseLocalStorage({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue: string;
}) {
  const [value, setValue] = useState(() => {
    let currentValue: string;
    try {
      const result = JSON.parse(localStorage.getItem(key) || defaultValue);
      currentValue = result;
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
export default UseLocalStorage;

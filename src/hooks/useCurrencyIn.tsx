import { useState, useEffect } from "react";

export function UseCurrencyInfo(currency: string) {
  const [data, setData] = useState({});
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const info: any = result.json();
        if (!ignore) {
          setData(info);
        }
      } catch (err) {
        console.log(err);
      }
    };
    return () => {
      ignore = true;
    };
  }, [currency]);
  return data;
}

import { useState, useEffect } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState("");
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}`
        );
        const info: any = result.json();
        if (!ignore) {
          setData(info);
        }
      } catch (err) {}
    };
  }, [currency]);
}

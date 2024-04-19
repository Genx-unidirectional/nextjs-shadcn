import { useEffect, useState } from "react";
// import { User } from "@/components/react/SearchAutoComplete";
import axios from "axios";
type Product = {
    id:number,
    title:string
}
function useFetch(url: string, obj: {}) {
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    let ignore = false;
    const fetchUser = async () => {
      const response = await axios.get(url);
      if (!response) {
        setIsError(true);
      }
      if (!ignore) {
        setData([...response.data.products]);
      }
    };
    fetchUser();
    setIsLoading(false);
    return () => {
      ignore = true;
    };
  }, [url]);
  return { error, data, loading };
}
export default useFetch;

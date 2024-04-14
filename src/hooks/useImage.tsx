import { useEffect, useState } from "react";
type Props = {
  url: string;
  page: string;
  limit: string;
};
type ImageData = {};

function UseImage({ url, page = "1", limit = "4" }: Props) {
  const [response, setResponse] = useState<{
    data: ImageData | null;
    isError: boolean;
    error: string;
  }>({
    data: null,
    isError: true,
    error: "",
  });

  useEffect(() => {
    let ignore = false;
    const fetchImage = async (url: string, page: string, limit: string) => {
      try {
        const result = await fetch(`${url}?page=${page}&limit=${limit}`);
        if (!result) {
          throw new Error("Invalid url or limit or page");
        }
        const gotData = await result.json();
        if (!ignore) {
          setResponse({
            ...response,
            data: gotData as ImageData,
            isError: false,
          });
        }
      } catch (err: any) {
        if (!ignore) {
          setResponse({
            ...response,
            error: `Unable to fetch data from ${url}`,
            isError: true,
          });
        }
      }
    };
    fetchImage(url, page, limit);
    return () => {
      ignore = true;
    };
  }, [url, page, limit]);
  return response;
}
export default UseImage;

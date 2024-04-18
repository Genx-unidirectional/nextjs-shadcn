import { ProductStateType } from "@/lib/validators";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function ScrollIndicator() {
  const [data, setData] = useState<ProductStateType[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const refContainer = useRef<HTMLDivElement>(null);
  const fetchProducts = async () => {
    try {
      const result = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      if (!result) {
        setError(true);
        setLoading(false);
        throw new Error("Error while fetching the data");
      }
      console.log(result.data);
      setLoading(false);
      setData([...result.data.products]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleScroll = () => {
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight);

    // console.log(document.documentElement.scrollTop);
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScroll / height) * 100);
  };
  if (refContainer.current) {
    refContainer.current.style.width = `${scrollPercentage}%`;
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" min-h-full relative w-full pt-3 flex flex-col items-center gap-4 ">
      <div className="fixed bg-white w-full top-0 h-1">
        <div ref={refContainer} className="h-1 bg-red-500 w-[0%]"></div>
      </div>
      {data?.map((item, idx) => (
        <div
          key={item.id}
          className="flex flex-col items-baseline bg-white w-full rounded-lg"
        >
          <h2 className="text-2xl text-black font-bold mb-4">{item.title}</h2>
          <p className="text-slate-700 text-lg font-medium">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
export default ScrollIndicator;

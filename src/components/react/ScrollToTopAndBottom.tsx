import useFetch from "@/hooks/useFetch";
import { useRef } from "react";

function ScrollToTopAndBottom() {
  const { loading, error, data } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const ref = useRef<HTMLDivElement>(null);
  const handleScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  const handleBottom = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col h-full w-full items-center">
      <button
        onClick={handleBottom}
        className="bg-black text-white p-2 font-medium my-4 rounded-lg"
      >
        Scroll To Bottom
      </button>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="flex w-full items-center flex-col">
          {data?.map((item) => <div key={item.id}>{item.title}</div>)}
          <div ref={ref}></div>
        </div>
      )}
      <button
        onClick={handleScrollTop}
        className="bg-black text-white p-2 font-medium my-4 rounded-lg"
      >
        Scroll To Top
      </button>
    </div>
  );
}
export default ScrollToTopAndBottom;

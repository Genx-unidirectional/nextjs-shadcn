"use client";

import UseImage from "@/hooks/useImage";
import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
function ImageSlider() {
  const [count, setCount] = useState<number>(0);
  const { data, isError, error } = UseImage({
    url: "https://picsum.photos/v2/list",
    page: "1",
    limit: "4",
  });

  console.log(data);
  const handleIncrement = () => {
    if (count + 1 < data?.length!) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="aspect-square w-3/4 relative rounded-lg overflow-hidden">
      {data?.map((item, idx) => {
        if (count !== idx) {
          return null;
        }
        return (
          <img
            src={item.download_url}
            className="w-full h-full object-cover"
            alt={item.author}
            key={item.id}
          />
        );
      })}
      <button
        onClick={handleIncrement}
        className="absolute top-[calc(50%-20px)] left-2 text-white z-10"
      >
        <ChevronLeftIcon className="w-10 h-10 shadow-2xl shadow-black text-white " />
      </button>
      <button
        onClick={handleDecrement}
        className="absolute top-[calc(50%-20px)] right-2 text-white z-10"
      >
        <ChevronRightIcon className="w-10 h-10 shadow-2xl shadow-black text-white " />
      </button>
      <div className="flex absolute bottom-2 left-[35%] z-20 justify-evenly gap-2">
        {data?.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCount(idx)}
            className={cn("bg-slate-400 w-4 h-4 rounded-full", {
              "bg-slate-50": count === idx,
            })}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default ImageSlider;

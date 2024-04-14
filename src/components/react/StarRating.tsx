"use client";

import { cn } from "@/lib/utils";
import { StarIcon } from "@radix-ui/react-icons";
import { useState } from "react";
function StarRating() {
  const [hover, setHover] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const mouseMoveHandle = (num: number) => {
    setHover(num);
  };
  return (
    <div
      onMouseLeave={() => mouseMoveHandle(0)}
      className="bg-black cursor-pointer rounded-lg border border-white p-2 flex justify-evenly items-center gap-4 "
    >
      {"abcdefg".split("").map((item, idx) => {
        idx += 1;

        return (
          <div
            key={idx}
            className={cn(
              " text-white shape bg-white",
              idx <= (hover || rating) ? "bg-red-500" : "bg-white"
            )}
            //   onClick={handleClick}
            onMouseMove={() => mouseMoveHandle(idx)}
            onClick={() => setRating(idx)}
          ></div>
        );
      })}
    </div>
  );
}
export default StarRating;

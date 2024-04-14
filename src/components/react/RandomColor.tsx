"use client";

import { randomHexColor, randomRgbColor } from "@/lib/react/utility";
import { useEffect, useRef, useState } from "react";

function RandomColor() {
  const refContainer = useRef<HTMLDivElement>(null);
  const [rgb, setRgb] = useState(true);
  const [color, setColor] = useState<string>("");
  //   console.log(randomHexColor());
  useEffect(() => {
    if (refContainer.current) {
      setColor(randomRgbColor());
      refContainer.current.style.backgroundColor = color;
    }
  }, []);
  const handleRgb = () => {
    console.log("trigger hsla");

    setColor(randomRgbColor());
    if (refContainer.current) {
      refContainer.current.style.backgroundColor = color;
    }
  };
  const handleHsla = () => {
    console.log("trigger hsla");
    setColor(randomHexColor());
    if (refContainer.current) {
      refContainer.current.style.backgroundColor = color;
    }
  };
  return (
    <div className="lg:w-1/2 md:w-2/3 sm:w-9/12 w-10/12   gap-4 bg-white flex flex-col justify-center items-center rounded-lg">
      <div
        ref={refContainer}
        className="flex h-[300px]  items-center justify-center    border-b border-black w-full "
      >
        <h2 className="font-bold text-4xl text-black tracking-tight">
          {color}
        </h2>
      </div>
      <div className="w-full flex justify-between items-center p-2 sm:p-4">
        <button
          onClick={() => setRgb(true)}
          className="bg-black  text-white p-1 font-medium   rounded-lg"
        >
          Set to Rgb
        </button>
        <button
          onClick={() => setRgb(false)}
          className="bg-black text-white font-medium  p-1 rounded-lg"
        >
          Set to hsla
        </button>
        <button
          onClick={rgb ? handleRgb : handleHsla}
          className="bg-black text-white font-medium  p-1 rounded-lg"
        >
          Change Color
        </button>
      </div>
    </div>
  );
}
export default RandomColor;

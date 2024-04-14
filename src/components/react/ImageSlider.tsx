"use client";
import UseImage from "@/hooks/useImage";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { recipes } from "@/lib/react/data";
import { cn } from "@/lib/utils";
function ImageSlider() {
  const [imgCount, setImCount] = useState(1);
  //   const { data, isError, error } = UseImage({
  //     url: "https://picsum.photos/v2/list",
  //     page: "1",
  //     limit: "5",
  //   });
  const handleIncrement = () => {
    if (Number(imgCount) < recipes.length) {
      console.log("increment");
      setImCount(imgCount + 1);
    }
  };
  const handleDecrement = () => {
    if (Number(imgCount) > 1) {
      setImCount((prev) => prev - 1);
    }
  };
  return (
    <div className="relative bg-white w-[90%]  h-[400px] overflow-hidden  lg:w-1/2 md:w-[70%] sm:w-[65%] rounded-lg ">
      {/* {data?.map((item) => {
        if (item.id !== imgCount.toString()) {
          return null;
        }
        return (
          <Image
            key={item.id}
            src={item.url}
            alt="image"
            width={100}
            height={100}
            className="w-full h-full"
          ></Image>
        );
      })} */}
      {recipes.map((recipe) => {
        if (imgCount.toString() !== recipe.id) {
          return;
        }
        return (
          <Image
            key={recipe.id}
            src={`img/${recipe.image}`}
            alt={recipe.title}
            width={100}
            height={100}
            // layout="fill" // Fill the parent container
            // objectFit="cover" // Maintain aspect ratio and cover the container
            className="w-full h-full"
          ></Image>
        );
      })}
      <div
        onClick={handleDecrement}
        className="absolute z-10  top-[calc(50%-20px)]"
      >
        <ArrowLeftIcon className="w-10 h-10 font-bold cursor-pointer  text-black" />
      </div>
      <div
        onClick={handleIncrement}
        className="absolute z-10 top-[calc(50%-20px)] right-0"
      >
        <ArrowRightIcon
          onClick={() => handleIncrement}
          className=" w-10 h-10 font-bold cursor-pointer  text-black"
        />
      </div>
      <div className="flex absolute bottom-4 left-[25%] z-10 bg-transparent gap-1 justify-center items-center">
        {recipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => setImCount(Number(recipe.id))}
            className={cn("rounded-full bg-slate-300 w-4 h-4", {
              "bg-slate-50": recipe.id === imgCount.toString(),
            })}
          ></button>
        ))}
      </div>
    </div>
  );
}
export default ImageSlider;

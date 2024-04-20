import { cn } from "@/lib/utils";
import { useRef } from "react";

function ScrollSection() {
  const ref = useRef<HTMLElement>(null);
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];
  const handleScrollIntoSection = () => {
    let pos = ref.current?.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen relative w-full  ">
      <div className="absolute top-5 w-full flex justify-center">
        <button
          onClick={handleScrollIntoSection}
          className="bg-black   text-white p-1 text-xl rounded-lg "
        >
          Scroll TO Particular Section
        </button>
      </div>
      {data.map((item) => (
        <section
          ref={item.label === "Third Card" ? ref : null}
          key={item.label}
          className={cn(
            "w-full h-screen flex flex-col justify-center text-5xl font-bold text-white items-center",
            {
              "bg-orange-500": item.style.background === "orange",
              "bg-red-500": item.style.background === "red",
              "bg-gray-400 text-black": item.style.background === "gray",
              "bg-blue-500": item.style.background === "blue",
              "bg-green-500": item.style.background === "green",
            }
          )}
        >
          <h2>{item.label}</h2>
        </section>
      ))}
    </div>
  );
}
export default ScrollSection;

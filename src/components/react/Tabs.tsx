import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  tabContent: {
    label: string;
    content: JSX.Element;
  }[];
};

function Tabs({ tabContent }: Props) {
  const [tabIndex, setTabIndex] = useState("1");
  const handleClick = (index: string) => {
    setTabIndex(index);
  };
  return (
    <div className="min-h-full w-full flex justify-center gap-4 flex-col items-center ">
      <div className="flex">
        {tabContent.map((tab) => (
          <div
            onClick={() => handleClick(tab.label.slice(-1))}
            className={cn("p-2 text-2xl font-bold text-white cursor-pointer", {
              "bg-red-600": tab.label.slice(-1) === "1",
              "bg-yellow-400": tab.label.slice(-1) === "2",
              "bg-green-600": tab.label.slice(-1) === "3",
            })}
            key={tab.label}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg text-black">
        {tabContent[Number(tabIndex) - 1] &&
          tabContent[Number(tabIndex) - 1].content}
      </div>
    </div>
  );
}
export default Tabs;

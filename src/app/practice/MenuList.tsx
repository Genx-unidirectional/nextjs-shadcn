import { MenuItem } from "@/config/recursiveUi";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import RecursiveTreeMenu from "./recursiveTree";
function MenuList({ item }: { item: MenuItem }) {
  // const [displayCurrentChildren, setDisplayCurrentChildren] = useState<{
  //   [index: string]: boolean;
  // }>({});
  const [show, setShow] = useState(false);
  // const handleToggle = (getLabel: string) => {
  //   console.log("Hello");
  //   console.log(displayCurrentChildren);
  //   setDisplayCurrentChildren({
  //     ...displayCurrentChildren,
  //     [getLabel]: !displayCurrentChildren[getLabel],
  //   });
  // };
  return (
    <li className="flex text-black font-bold flex-col gap-2">
      <div className="flex items-center gap-2 justify-start">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          // <span onClick={() => handleToggle(item.label)}>
          <span onClick={() => setShow(!show)}>
            {/* {displayCurrentChildren[item.label] ? ( */}
            {show ? (
              <MinusIcon className="w-5 h-5 text-white font-bold" />
            ) : (
              <PlusIcon className="w-5 h-5 text-white font-bold" />
            )}
          </span>
        ) : null}
      </div>
      <div className="ml-8">
        {/* {item && item.children && displayCurrentChildren[item.label] ? ( */}
        {item && item.children && show ? (
          <RecursiveTreeMenu list={item.children} />
        ) : null}
      </div>
    </li>
  );
}
export default MenuList;

"use client";
import { MenuItem } from "@/config/recursiveUi";
import MenuList from "./MenuList";

function RecursiveTreeMenu({ list }: { list: MenuItem[] }) {
  return (
    <ul className="list-disc w-full  flex flex-col gap-2 text-black items-start">
      {list && list.length
        ? list.map((item) => <MenuList key={item.label} item={item} />)
        : null}
    </ul>
  );
}
export default RecursiveTreeMenu;

import { RecordType } from "zod";
import RecursiveTreeMenu from "./recursiveTree";
import { menus } from "@/config/recursiveUi";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 min-h-screen w-full">
      <div className="col-span-4 bg-orange-500 md:col-span-3">
        <RecursiveTreeMenu list={menus} />
      </div>
      <div className="col-span-8 bg-orange-300 md:col-span-9">{children}</div>
    </div>
  );
}
export default layout;

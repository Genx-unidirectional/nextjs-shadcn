import { MouseEventHandler } from "react";
import { User } from "./SearchAutoComplete";

type Props = {
  data: User[];
  handleClick: MouseEventHandler<HTMLLIElement>;
};

function Suggestion({ data, handleClick }: Props) {
  return (
    <ul className="w-[80%] h-[400px] overflow-hidden overflow-y-scroll mx-auto list-none flex rounded-lg mt-4  bg-white flex-col  items-center">
      {data.map((user) => (
        <li
          className="w-full p-2 rounded-lg transition-all cursor-pointer duration-300 text-black font-medium hover:bg-slate-300 text-lg"
          onClick={handleClick}
          key={user.id}
        >
          {user.firstName}
        </li>
      ))}
    </ul>
  );
}
export default Suggestion;

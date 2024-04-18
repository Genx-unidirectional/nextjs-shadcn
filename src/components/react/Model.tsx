import { Dispatch, SetStateAction } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

function Model({ setShow }: Props) {
  return (
    <div className="h-full w-full z-10 absolute flex justify-center items-center bg-black ">
      <div className=" bg-white  animate-model-it relative w-1/2 text-black flex flex-col gap-2 p-6 rounded-lg  items-start">
        <h2 className="font-bold text-3xl">You have opened the model.</h2>
        <p>There is nothing to see here hope we serve you better at later.</p>
        <button
          onClick={() => setShow(false)}
          className="absolute top-0 right-0 p-3 z-20"
        >
          <Cross1Icon className="text-black w-7 h-7 " />
        </button>
      </div>
    </div>
  );
}
export default Model;

import { useState } from "react";
import Model from "./Model";

function ModelPop() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-full w-full flex flex-col justify-items-center items-center">
      <button
        onClick={() => setShow(true)}
        className="bg-white text-black font-medium text-2xl p-2"
      >
        Show Model
      </button>
      {show && <Model setShow={setShow} />}
    </div>
  );
}
export default ModelPop;

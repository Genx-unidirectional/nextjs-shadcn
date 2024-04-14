"use client";
import { Data, QNA_DATA } from "@/lib/data";
import { PlusIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useState } from "react";

function Accordion() {
  const [select, setSelect] = useState<number | null>(null);
  const [enableMultiple, setEnableMultiple] = useState<boolean>(false);
  const [ids, setIds] = useState<number[]>([]);
  return (
    <div className="lg:w-1/2 md:w-2/3 bg-white text-black relative sm:w-3/5 w-full p-2 flex items-center  justify-center flex-col rounded-lg">
      <button
        className="absolute -top-12 left-[35]3%] bg-white font-medium rounded-lg text-black p-2"
        onClick={() => {
          // console.log("enable multiple");
          setEnableMultiple(!enableMultiple);
        }}
      >
        Enable multiple Open
      </button>
      {QNA_DATA.map((item) => (
        <Block
          ids={ids}
          setIds={setIds}
          select={select}
          enableMultiple={enableMultiple}
          setSelect={setSelect}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
export default Accordion;

type BlockProps = {
  ids: number[];
  setIds: Dispatch<SetStateAction<number[]>>;
  select: number | null;
  enableMultiple: boolean;
  setSelect: Dispatch<SetStateAction<number | null>>;
  id: number;
  answer: string;
  question: string;
};
function Block({
  ids,
  setIds,
  select,
  setSelect,
  enableMultiple,
  id,
  answer,
  question,
}: BlockProps) {
  const handleSingle = () => {
    if (select !== id) setSelect(id);
    else setSelect(null);
  };
  const handleMultiple = () => {
    // console.log("multiple triggered");
    // console.log(ids);
    let currentIds = [...ids];
    const idPresent = ids.indexOf(id);
    if (idPresent === -1) currentIds.push(id);
    else currentIds.splice(idPresent, 1);
    setIds(currentIds);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex  w-full  justify-between items-center cursor-pointer"
        onClick={enableMultiple ? handleMultiple : handleSingle}
      >
        <h2 className="font-medium text-2xl">{question}</h2>
        <PlusIcon className="w-6 h-6 " />
      </div>
      {enableMultiple ? (
        ids.indexOf(id) !== -1 ? (
          <p>{answer}</p>
        ) : null
      ) : (
        select === id && <p>{answer}</p>
      )}
    </div>
  );
}

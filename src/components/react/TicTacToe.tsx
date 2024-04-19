//Make 3*3 grid of with div using empty array of length 9
//Store that empty array in state
//create mockup as BoardComponent which takes that array as prop
//We also need to make state should revert back at the game at whatever position of game we want so store every state in history

import { useState } from "react";

function TicTacToe() {
  const [history, setHistory] = useState<(string | undefined)[][]>([
    Array(9).fill(undefined),
  ]);
  const [isX, setIsX] = useState(true);
  const [isWinner, setIsWinner] = useState("");
  const currentArr = history[history.length - 1];
  const setValue = (id: number) => {
    //we have to assign x or y to the specified index we take in this function
    const newArr = history[history.length - 1].slice(0);
    if (isX) {
      newArr[id] = "X";
      setIsX(false);
    } else {
      newArr[id] = "O";
      setIsX(true);
    }
    setHistory([...history, newArr]);

    const winner = checkWinner(newArr);
    if (winner) {
      setIsWinner(winner);
    }
  };
  const jumpTo = (idx: number) => {
    const newHistory = history.slice(0, idx + 1);
    setHistory(newHistory);
  };
  const restart = () => {
    jumpTo(0);
    setIsX(true);
    setIsWinner("");
  };
  return (
    <div className="flex  gap-2 items-center justify-center">
      <div className="flex gap-4 ">
        <div className="h-40 bg-teal-300 gap-1 flex-col flex rounded-lg overflow-hidden overflow-y-scroll p-2">
          {history.map((arr, idx) => (
            <button
              onClick={() => jumpTo(idx)}
              className="text-sm text-white bg-black p-[1px] tracking-tight rounded-sm"
            >
              Hop on {idx}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Board setValue={setValue} XorO={currentArr} />
        <button
          onClick={restart}
          className="bg-white text-black p-[1px] font-medium text-xl rounded-lg"
        >
          Restart
        </button>
        {isWinner.length > 0 && (
          <p className="text-white font-medium text-2xl">
            Winner is {isWinner}
          </p>
        )}
      </div>
    </div>
  );
}
export default TicTacToe;

type Props = {
  XorO: Array<string | undefined>;
  setValue: (id: number) => void;
};

const Board = ({ XorO, setValue }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-[1px]">
      {XorO.map((block, idx) => (
        <div
          key={idx}
          onClick={() => setValue(idx)}
          className="w-10 h-10 bg-white flex justify-center items-center rounded-sm text-black font-bold text-2xl"
        >
          {block}
        </div>
      ))}
    </div>
  );
};

const checkWinner = (arr: (string | undefined)[]) => {
  const winPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winPat.length; i++) {
    const [a, b, c] = winPat[i];
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      return arr[a];
    }
  }
};

//Make 3*3 grid of with div using empty array of length 9
//Store that empty array in state
//create mockup as BoardComponent which takes that array as prop
//We also need to make state should revert back at the game at whatever position of game we want so store every state in history

import { useState } from "react";

function TicTacToe() {
  const [xOrOArr, setXOrYArr] = useState<(string | undefined)[]>(
    Array(9).fill(undefined)
  );
  const [isX, setIsX] = useState(true);
  const [isWinner, setIsWinner] = useState("");

  const setValue = (id: number) => {
    //we have to assign x or y to the specified index we take in this function
    const newArr = xOrOArr.splice(0);
    if (isX) {
      newArr[id] = "X";
      setIsX(false);
    } else {
      newArr[id] = "O";
      setIsX(true);
    }

    setXOrYArr(newArr);
    const winner = checkWinner(newArr);
    if (winner) {
      setIsWinner(winner);
    }
  };
  const restart = () => {
    setIsWinner("");
    setIsX(true);
    setXOrYArr(Array(9).fill(undefined));
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Board setValue={setValue} XorO={xOrOArr} />
      <div>
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

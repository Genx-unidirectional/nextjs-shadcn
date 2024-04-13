"use client";
import InputCurrency from "@/components/Input-currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UseCurrencyInfo } from "@/hooks/useCurrencyIn";
function Page() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();
  // const currencyInfo: {
  //   [index: string]: string;
  // } = UseCurrencyInfo(from);
  // console.log(UseCurrencyInfo(from));
  // const options = Object.keys(currencyInfo[from as string]);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-500 to to-blue-900">
      <div className="bg-transparent relative flex flex-col p-4  z-10  rounded-lg overflow-hidden  h-1/2 w-2/3 sm:w-1/2  md:w-2/5 mx-auto">
        <div className="absolute top-0 left-0 w-full gap h-full bg-white  opacity-25 "></div>
        <div className="z-10 w-full h-full flex flex-col gap-3">
          {/* <InputCurrency />
          <InputCurrency /> */}
          <Button variant={"default"} className="bg-blue-600 text-white">
            Click
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Page;

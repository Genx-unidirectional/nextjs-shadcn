import { Label } from "./ui/label";
import { useId } from "react";
import { Input } from "./ui/input";
import { ChangeEvent } from "react";

type Props = {
  label: string;
  amount: number;
  onAmountChange?: (arg: number) => void;
  onCurrencyChange?: (arg: string) => void;
  currencyOptions: string[];
  selectedCurrency: string;
  amountDisabled: boolean;
  currencyDisabled: boolean;
  className: string;
};
function InputCurrency({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className,
}: Props) {
  const id = useId();
  return (
    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
      <div className="flex flex-col gap-2 items-start w-1/2">
        <Label className="" htmlFor={id}>
          From
        </Label>
        <Input
          id={id}
          className=""
          value={amount}
          disabled={amountDisabled}
          placeholder="amount"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></Input>
      </div>
      <div className=" flex flex-col gap-2 items-end w-1/2">
        <Label htmlFor="currentCurrency">Currency Type</Label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputCurrency;

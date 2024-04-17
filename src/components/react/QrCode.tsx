"use client";
import QRCode from "react-qr-code";

import { useState } from "react";
import { cn } from "@/lib/utils";

function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [text, setText] = useState("");
  const makeQr = () => {
    setQrCode(text);
    setText("");
  };
  return (
    <div className="w-4/5  p-2 rounded-lg  bg-white flex flex-col items-center gap-3">
      <div className="flex w-full h-12 gap-1">
        <input
          type="text"
          className="border border-black rounded-lg w-3/4 text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          disabled={text && text.trim() !== "" ? false : true}
          onClick={makeQr}
          className={cn(
            "bg-black text-white w-1/4 rounded-lg font-medium text-sm text-nowrap p-1",
            {
              "opacity-50": text.trim() === "",
            }
          )}
        >
          Make QR
        </button>
      </div>
      <div className="">
        <QRCode value={qrCode} size={200} />
      </div>
    </div>
  );
}
export default QrCode;

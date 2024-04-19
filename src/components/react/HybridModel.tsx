import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
function HybridModel() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div className="h-full w-full flex justify-center items-center">
      {showContent ? (
        <div
          ref={ref}
          className="w-4/5 md:w-3/5 rounded-lg p-3 bg-white text-black flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold">This is random content</h2>
          <p>
            There is something which you can do by clicking outside of this
            content
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="bg-white rounded-lg p-1 text-2xl font-medium text-black"
        >
          Get Content
        </button>
      )}
    </div>
  );
}
export default HybridModel;

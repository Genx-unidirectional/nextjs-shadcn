import { useLayoutEffect, useState } from "react";

function UseWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return windowSize;
}
export default UseWindowResize;

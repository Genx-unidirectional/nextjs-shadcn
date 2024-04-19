import { RefObject, TouchEvent, useEffect } from "react";

function useOutsideClick(ref: RefObject<HTMLDivElement>, handler: () => void) {
  useEffect(() => {
    const listener: EventListener = (event) => {
      // Extract the target element based on the event type
      console.log("triggered");
      const whichEvent =
        event instanceof MouseEvent
          ? (event as MouseEvent)
          : (event as unknown as TouchEvent);
      if (!ref.current || ref.current.contains(whichEvent.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

export default useOutsideClick;

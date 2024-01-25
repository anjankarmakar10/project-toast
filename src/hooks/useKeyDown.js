import { useEffect } from "react";

const useKeyDown = (key, callback) => {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, key]);
};
export default useKeyDown;

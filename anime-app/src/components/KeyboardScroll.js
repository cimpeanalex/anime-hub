import { useEffect } from "react";

const KeyboardScroll = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "PageDown":
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          break;
        case "PageUp":
          window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default KeyboardScroll;

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isSmall, setIsSmall] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth <= 768);
      setIsMedium(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsLarge(window.innerWidth > 1024);
    }

    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
      setIsMedium(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsLarge(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [isSmall, isMedium, isLarge];
};

export default useScreenSize;

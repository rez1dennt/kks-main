import { useState } from "react";

const useCarousel = (elementsCount: number, isCyclic: boolean = false) => {
  const [currentElement, setCurrentElement] = useState(0);

  const handleElementChange = (direction: "left" | "right") => {
    if (direction === "left" && currentElement >= 1)
      setCurrentElement(currentElement - 1);
    else if (direction === "left" && currentElement <= 1 && isCyclic)
      setCurrentElement(elementsCount - 1);
    else if (direction === "right" && currentElement <= elementsCount - 2) {
      setCurrentElement(currentElement + 1);
    } else if (
      direction === "right" &&
      currentElement >= elementsCount - 2 &&
      isCyclic
    ) {
      setCurrentElement(0);
    }
  };

  const goTo = (index: number) => {
    setCurrentElement(index);
  };

  return {
    handleElementChange,
    goTo,
    currentElement,
  };
};

export default useCarousel;

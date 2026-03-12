"use client";

import { FC } from "react";
import { useVisibility } from "./ScrollTracker";

interface PageNumberProps {
  pagesCount?: number;
}

const PageNumber: FC<PageNumberProps> = ({ pagesCount }) => {
  const { visibleElementId } = useVisibility();
  const currentPage = String(Number(visibleElementId || 1)).padStart(2, "0");
  const totalPages = String(pagesCount || 0).padStart(2, "0");

  return (
    <div className="fixed bottom-[90px] left-[45px] max-[920px]:hidden z-1000">
      <span className="text-[50px] font-medium font-(family-name:--font-sf-ui-display)">
        {currentPage}{" "}
      </span>
      <span className="text-[35px] text-(--color-text-dark) font-medium font-(family-name:--font-sf-ui-display)">
        / {totalPages}
      </span>
    </div>
  );
};

export default PageNumber;

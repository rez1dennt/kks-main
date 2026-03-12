"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { useVisibility } from "./ScrollTracker";

interface OpacityChangerProps {
  children: ReactNode;
  targetId?: string;
  zIndex?: number | string;
  targetScrollOffset?: number;
  content?: boolean;
}

const OpacityChanger: FC<OpacityChangerProps> = ({
  children,
  targetId,
  zIndex,
  targetScrollOffset,
  content = false,
}) => {
  const { visibleElementId, scrollOffset } = useVisibility();
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="duration-700 relative"
      style={{
        opacity:
          content && Number(windowSize.width) < 1400
            ? 1
            : targetScrollOffset
            ? targetScrollOffset < Number(scrollOffset)
              ? 1
              : 0
            : Number(targetId) === Number(visibleElementId)
            ? 1
            : 0,
        zIndex: zIndex || (6 - Number(targetId)) * -1 - 10 || "auto",
      }}
    >
      {children}
    </div>
  );
};

export default OpacityChanger;

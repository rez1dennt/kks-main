"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from "react";

type VisibilityContextType = {
  visibleElementId: string | null;
  scrollOffset: number | null;
  scrollToElement: (id: string) => void;
};

const VisibilityContext = createContext<VisibilityContextType>({
  visibleElementId: null,
  scrollOffset: null,
  scrollToElement: () => {},
});

export const useVisibility = () => useContext(VisibilityContext);

export const VisibilityProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: VisibilityContextType;
}) => (
  <VisibilityContext.Provider value={value}>
    {children}
  </VisibilityContext.Provider>
);

type ScrollTrackerProps = {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  scrollBehavior?: ScrollBehavior;
};

export const ScrollTracker = ({
  children,
  rootMargin = "0px",
  threshold = [0.3, 0.7],
  scrollBehavior = "smooth",
}: ScrollTrackerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleElementId, setVisibleElementId] = useState<string | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return window.sessionStorage.getItem("visibleElementId");
  });
  const [scrollOffset, setScrollOffset] = useState(0);

  const getTrackedElements = useCallback(() => {
    if (!containerRef.current) {
      return [];
    }

    return Array.from(containerRef.current.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && !!child.id
    );
  }, []);

  const updateVisibleElement = useCallback(() => {
    const trackedElements = getTrackedElements();
    if (!trackedElements.length) {
      return;
    }

    const viewportMiddle = window.innerHeight / 2;
    let currentVisibleId = trackedElements[0].id;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const element of trackedElements) {
      const { top, bottom } = element.getBoundingClientRect();

      if (top <= viewportMiddle && bottom >= viewportMiddle) {
        currentVisibleId = element.id;
        closestDistance = -1;
        break;
      }

      const distanceToViewportMiddle = Math.min(
        Math.abs(top - viewportMiddle),
        Math.abs(bottom - viewportMiddle)
      );

      if (distanceToViewportMiddle < closestDistance) {
        closestDistance = distanceToViewportMiddle;
        currentVisibleId = element.id;
      }
    }

    setVisibleElementId((previousVisibleId) =>
      previousVisibleId === currentVisibleId ? previousVisibleId : currentVisibleId
    );
  }, [getTrackedElements]);

  const syncVisibleElement = useCallback(() => {
    requestAnimationFrame(() => {
      updateVisibleElement();
      requestAnimationFrame(updateVisibleElement);
    });
  }, [updateVisibleElement]);

  const scrollToElement = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        setVisibleElementId(id);
        element.scrollIntoView({
          behavior: scrollBehavior,
          block: "start",
        });
      }
    },
    [scrollBehavior]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
      updateVisibleElement();
    };

    const handleViewportChange = () => {
      setScrollOffset(window.scrollY);
      syncVisibleElement();
    };

    handleViewportChange();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("pageshow", handleViewportChange);
    window.addEventListener("popstate", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("pageshow", handleViewportChange);
      window.removeEventListener("popstate", handleViewportChange);
    };
  }, [syncVisibleElement, updateVisibleElement]);

  useEffect(() => {
    syncVisibleElement();
  }, [children, rootMargin, threshold, syncVisibleElement]);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      return;
    }

    const pendingHomeSectionId =
      window.sessionStorage.getItem("pendingHomeSectionId");
    if (!pendingHomeSectionId) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = document.getElementById(pendingHomeSectionId);
        if (!element) {
          return;
        }

        setVisibleElementId(pendingHomeSectionId);
        element.scrollIntoView({ behavior: "auto", block: "start" });
        window.sessionStorage.removeItem("pendingHomeSectionId");
        syncVisibleElement();
      });
    });
  }, [children, syncVisibleElement]);

  useEffect(() => {
    if (!visibleElementId) {
      return;
    }

    window.sessionStorage.setItem("visibleElementId", visibleElementId);
    if (window.location.pathname === "/") {
      window.sessionStorage.setItem("lastHomeSectionId", visibleElementId);
    }
  }, [visibleElementId]);

  return (
    <VisibilityProvider
      value={{ visibleElementId, scrollToElement, scrollOffset }}
    >
      <div ref={containerRef}>{children}</div>
    </VisibilityProvider>
  );
};

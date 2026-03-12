"use client";

import HeaderNavigationElement from "@/shared/components/HeaderNavigationElement";
import { useVisibility } from "@/shared/components/ScrollTracker";
import { useEffect, useRef, useState } from "react";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span className=" cursor-pointer relative block h-[18px] w-[20px]" aria-hidden="true">
    <span
      className={` absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
        isOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
      }`}
    />
    <span
      className={`absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
        isOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
      }`}
    />
  </span>
);

const HeaderNavigation = ({ elements }: { elements: string[] }) => {
  const { visibleElementId, scrollToElement } = useVisibility();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const previousBodyOverflowX = document.body.style.overflowX;
    const previousHtmlOverflowX = document.documentElement.style.overflowX;
    const previousBodyWidth = bodyElement.style.width;
    const previousHtmlWidth = htmlElement.style.width;
    const previousBodyMaxWidth = bodyElement.style.maxWidth;
    const previousHtmlMaxWidth = htmlElement.style.maxWidth;

    if (isOpen) {
      htmlElement.classList.add("kks-menu-open");
      bodyElement.classList.add("kks-menu-open");
      bodyElement.style.overflowX = "hidden";
      htmlElement.style.overflowX = "hidden";
      bodyElement.style.width = "100%";
      htmlElement.style.width = "100%";
      bodyElement.style.maxWidth = "100vw";
      htmlElement.style.maxWidth = "100vw";
    }

    document.addEventListener("keydown", handleEscapePress);

    return () => {
      htmlElement.classList.remove("kks-menu-open");
      bodyElement.classList.remove("kks-menu-open");
      bodyElement.style.overflowX = previousBodyOverflowX;
      htmlElement.style.overflowX = previousHtmlOverflowX;
      bodyElement.style.width = previousBodyWidth;
      htmlElement.style.width = previousHtmlWidth;
      bodyElement.style.maxWidth = previousBodyMaxWidth;
      htmlElement.style.maxWidth = previousHtmlMaxWidth;
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-[19px] relative hidden items-center min-[1201px]:flex">
        <div className="w-[150%] h-[1px] absolute top-[3px] left-[-25%] bg-gradient-to-r from-transparent from-10% via-[#404040] via-25% to-transparent to-100%" />
        <nav className="flex gap-[35px]">
          {elements.map((tab, index) => (
            <HeaderNavigationElement
              key={index}
              text={tab}
              selected={Number(visibleElementId) === index + 1}
              onClick={() => scrollToElement(String(index + 1))}
            />
          ))}
        </nav>
      </div>
      <div ref={menuRef} className="mt-[19px] relative flex justify-end min-[1201px]:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-[56px] w-[56px] items-center justify-center rounded-full border bg-[#101010] text-white transition-all duration-300 ${
            isOpen
              ? "border-white shadow-[0_0_0_6px_rgba(255,255,255,0.06)]"
              : "border-[#3a3a3a] hover:border-[#707070]"
          }`}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
        {isOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-[105] bg-transparent"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть меню"
            />
            <div
              className="absolute right-0 top-[calc(100%+16px)] z-[110] flex flex-col gap-[14px] rounded-[28px] border border-[#303030] bg-[#050505]/95 p-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              style={{ width: "min(340px, calc(100vw - 48px))" }}
            >
              <div className="flex items-start justify-between gap-[16px] border-b border-[#1f1f1f] pb-[14px]">
                <div>
                  <span className="font-(family-name:--font-sf-ui-display) text-[24px] font-medium text-white">
                    Меню
                  </span>
                  <p className="mt-[6px] max-w-[210px] text-[13px] leading-[1.4] text-(--color-text-dark)">
                    Быстрый переход по основным разделам сайта.
                  </p>
                </div>
              
              </div>
              <nav className="flex flex-col gap-[10px]">
                {elements.map((tab, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      scrollToElement(String(index + 1));
                      setIsOpen(false);
                    }}
                    className={`group flex items-center justify-between rounded-[18px] border px-[16px] py-[14px] text-left transition-all duration-200 ${
                      Number(visibleElementId) === index + 1
                        ? "border-white bg-white text-black"
                        : "border-[#242424] bg-[#0d0d0d] text-white hover:border-[#4f4f4f] hover:bg-[#131313]"
                    }`}
                  >
                    <span className="font-(family-name:--font-sf-ui-display) text-[17px] font-medium">
                      {tab}
                    </span>
                    <span
                      className={`text-[12px] tracking-[0.2em] ${
                        Number(visibleElementId) === index + 1
                          ? "text-black/65"
                          : "text-(--color-text-dark) group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HeaderNavigation;

import React from "react";

interface ElementProps {
  selected?: boolean;
  text: string;
  onClick?: VoidFunction;
}

const HeaderNavigationElement: React.FC<ElementProps> = ({
  selected = false,
  text,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center relative cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`transition-all ${
          !selected ? "bg-(--color-text-dark)" : "bg-white"
        } w-[7px] h-[7px] rounded-full`}
      />
      {selected && (
        <div className="w-[21px] h-[21px] rounded-full border absolute top-[-7px] transition-all" />
      )}
      <div
        className={`transition-all text-[18px] max-[1500px]:text-[14px]
        ${
          !selected
            ? "text-(--color-text-dark) mt-[27px]"
            : "text-white text-[22px] mt-[22px]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default HeaderNavigationElement;

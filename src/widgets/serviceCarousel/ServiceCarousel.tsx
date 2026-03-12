"use client";

import IconButton from "@/shared/components/IconButton";
import Image from "next/image";
import { services } from "./constants";

const ServiceCarousel = ({
  handleElementChange,
  currentElement,
}: {
  handleElementChange: (direction: "left" | "right") => void;
  currentElement: number;
}) => {
  return (
    <div className="w-full max-w-[630px] self-start rounded-[28px] border border-[#242424] bg-[#050505]/72 p-[20px] max-[700px]:p-[18px]">
      <div className="flex flex-col">
        <div className="flex w-full items-start justify-between gap-[20px] max-[760px]:flex-col max-[760px]:items-start">
          <span className="max-w-[400px] font-(family-name:--font-sf-ui-display) text-[30px] leading-[1.05] font-bold transition-all duration-300 max-[1200px]:text-[26px] max-[760px]:text-[24px] max-[530px]:text-[21px]">
            {services[currentElement].name}
          </span>
          <div className="flex shrink-0 gap-[16px]">
            <button
              className="rounded-full bg-[#323232] p-[11px] duration-300 hover:bg-[#3A3A3A] disabled:bg-[#212121] cursor-pointer"
              onClick={() => handleElementChange("left")}
            >
              <Image
                src="/images/left_arrow.svg"
                width={30}
                height={30}
                alt=""
              />
            </button>
            <button
              className="rounded-full bg-[#323232] p-[11px] duration-300 hover:bg-[#3A3A3A] disabled:bg-[#212121] cursor-pointer"
              onClick={() => handleElementChange("right")}
            >
              <Image
                src="/images/right_arrow.svg"
                width={30}
                height={30}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="mb-[16px] mt-[14px] h-[3px] w-full bg-[#1f1f1f]" />
        <div className="flex items-center justify-center rounded-[22px] bg-[#0d0d0d] p-[16px]">
          <Image
            src={services[currentElement].image}
            alt=""
            width={320}
            height={320}
            className="h-auto w-full max-w-[320px] object-contain"
          />
        </div>
        <div className="mt-[16px]">
          <IconButton
            label="Узнать подробнее"
            href={services[currentElement].link}
          >
            <Image src="images/forward.svg" width={40} height={40} alt="" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;

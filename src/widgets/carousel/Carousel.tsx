"use client";

import useCarousel from "@/shared/hooks/useCarousel";
import Image from "next/image";
import { CSSProperties, FC, ReactNode } from "react";

interface CarouselProps {
  data: {
    imageUrl: string | null;
    alt?: string;
    title?: string;
    subtitle?: string;
  }[];
  showNext?: boolean;
  children?: ReactNode;
  extra?: ReactNode;
  imageSize?: {
    width: number;
    height: number;
  };
}

const Carousel: FC<CarouselProps> = ({
  data,
  children,
  extra,
  imageSize,
  showNext = false,
}) => {
  const { handleElementChange, currentElement } = useCarousel(data.length);
  const currentItem = data[currentElement];
  const nextItem =
    showNext && currentElement < data.length - 1
      ? data[currentElement + 1]
      : null;
  const hasNavigation = data.length > 1;
  const contentStyle = {
    "--carousel-content-height": `${imageSize?.height || 760}px`,
  } as CSSProperties;

  return (
    <div className="w-full max-w-full min-h-[700px]">
      <div className="min-[1320px]:hidden mb-[90px]">{children}</div>
      <div className="flex grow-1 max-[920px]:justify-center min-[1320px]:h-full">
        {currentItem ? (
          <div className="inline-flex w-full gap-[35px] items-start justify-between max-[980px]:flex-col-reverse max-[980px]:items-start">
            <div
              className="flex min-h-[var(--carousel-content-height)] max-w-[620px] flex-col self-stretch max-[980px]:min-h-0 max-[980px]:w-full"
              style={contentStyle}
            >
              <div className="max-[1320px]:hidden">{children}</div>
              <div>
                {extra}
                <div className="max-w-[620px]">
                  <span className="font-(family-name:--font-sf-ui-display) font-bold text-[25px] leading-[0.9]">
                    {currentItem.title}
                  </span>
                  <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px]" />
                  <span className="text-(--color-text-dark) max-w-[250px] mt-[35px] inline-block">
                    {currentItem.subtitle}
                  </span>
                </div>
              </div>
              {hasNavigation && (
                <div className="flex gap-[35px] mt-auto pt-[90px] max-[930px]:pt-[40px]">
                  <button
                    className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
                    onClick={() => handleElementChange("left")}
                    disabled={currentElement === 0}
                  >
                    <Image
                      src="/images/left_arrow.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </button>
                  <button
                    className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
                    onClick={() => handleElementChange("right")}
                    disabled={currentElement === data.length - 1}
                  >
                    <Image
                      src="/images/right_arrow.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-end gap-[35px] self-end max-[980px]:self-start">
              {currentItem.imageUrl && (
                <Image
                  src={currentItem.imageUrl}
                  alt={currentItem.alt || ""}
                  width={imageSize?.width || 537}
                  height={imageSize?.height || 760}
                />
              )}
              {nextItem?.imageUrl && (
                <Image
                  src={nextItem.imageUrl}
                  alt={nextItem.alt || ""}
                  width={188}
                  height={266}
                  className="max-[1700px]:hidden"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;

"use client";

import ServiceList from "@/shared/components/ServiceList";
import ServiceCarousel from "../serviceCarousel/ServiceCarousel";
import useCarousel from "@/shared/hooks/useCarousel";

const ServiceModule = () => {
  const { handleElementChange, currentElement } = useCarousel(6, true);

  return (
    <div className="grid w-full max-w-[1320px] grid-cols-[minmax(280px,400px)_minmax(0,1fr)] place-items-center items-start gap-[26px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[24px]">
      <ServiceList currentService={currentElement} />
      <ServiceCarousel
        currentElement={currentElement}
        handleElementChange={handleElementChange}
      />
    </div>
  );
};

export default ServiceModule;

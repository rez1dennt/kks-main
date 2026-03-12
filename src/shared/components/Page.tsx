import React from "react";

const Page = ({
  id,
  children,
  zIndex,
  overflow,
}: {
  id: string;
  children: React.ReactNode;
  zIndex?: number;
  overflow?: string;
}) => {
  return (
    <div
      className="relative z-10 pl-[200px] max-[920px]:pl-[45px] pr-[45px] min-h-screen"
      id={id}
      style={{ zIndex, overflow }}
    >
      {children}
    </div>
  );
};

export default Page;

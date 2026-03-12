import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => (
  <header className="relative max-[840px]:justify-center w-full px-[45px] pt-[20px] pb-[40px] flex justify-between items-center gap-[20px] fixed z-100 bg-gradient-to-b from-10% from-(--color-background) to-90% to-transparent max-[1200px]:justify-start">
    <Link href="/">
      <Image src="/images/logo.png" alt="" width={155} height={100} />
    </Link>
    <div className="flex flex-1 justify-center max-[1200px]:absolute max-[1200px]:right-[45px] max-[1200px]:top-[32px] max-[1200px]:z-[101] max-[1200px]:flex-none max-[1200px]:justify-end">
      {children}
    </div>
    <Link
      href="tel:89182680770"
      className="text-(--color-text-light) text-[35px] font-(family-name:--font-sf-ui-display) font-medium whitespace-nowrap max-[1200px]:ml-auto max-[1200px]:mr-[88px] max-[840px]:hidden"
    >
      8 (918) 268-07-70
    </Link>
  </header>
);

export default Header;

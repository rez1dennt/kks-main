import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardLinkProps {
  iconUrl: string;
  text?: string;
  href: string;
}

const CardLink: FC<CardLinkProps> = ({ text, iconUrl, href }) => {
  return (
    <Link href={href}>
      <div className="relative flex flex-col justify-between p-[20px] rounded-[15px] w-[230px] max-[480px]:w-[170px] h-[160px] border-1 border-(--color-text-dark) hover:border-(--color-blue) hover:translate-y-[-10px] transition-all duration-300">
        <div className="absolute w-[7px] h-[7px] rounded-full bg-(--color-blue) top-[50%] left-[-4px] translate-y-[-4px]" />
        <div className="flex w-full justify-end">
          <Image src={iconUrl} width={40} height={40} alt="" />
        </div>
        <span className="text-(--font-sf-ui-display) font-medium">{text}</span>
      </div>
    </Link>
  );
};

export default CardLink;

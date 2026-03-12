import { services } from "@/widgets/serviceCarousel/constants";
import Link from "next/link";

const ServiceList = ({ currentService }: { currentService: number }) => {
  return (
    <div className="w-full max-w-[340px] overflow-hidden transition duration-300">
      <ul className="flex flex-col gap-[8px] text-(--color-text-dark)">
        {services.map((el, idx) => (
          <li
            key={idx}
            className="mb-0 list-none border-b border-[#1f1f1f] pb-[12px] hover:text-[#fff] transition duration-300 cursor-pointer"
            style={{ color: idx === currentService ? "#fff" : "currentcolor" }}
          >
            <Link
              href={el.link}
              className="inline-block text-[21px] leading-[1.08] max-[1400px]:text-[19px] max-[600px]:text-[18px]"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;

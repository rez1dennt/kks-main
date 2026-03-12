import { FC } from "react";

interface StatisticsProps {
  stat?: string;
  label?: string;
}

const Statistics: FC<StatisticsProps> = ({ stat, label }) => (
  <div className="max-[720px]:flex gap-[15px]">
    <span className="font-(family-name:--font-sf-ui-display) font-bold text-[50px] leading-[0.9]">
      {stat}
    </span>
    <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px] max-[720px]:w-[7px] max-[720px]:h-full max-[720px]:mt-0 min-w-[7px]" />
    <span className="text-(--color-text-dark) max-w-[250px] mt-[35px] max-[720px]:mt-0 inline-block">
      {label}
    </span>
  </div>
);

export default Statistics;

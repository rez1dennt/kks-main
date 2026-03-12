import IconButton from "@/shared/components/IconButton";
import Page from "@/shared/components/Page";
import Image from "next/image";

const MainPage = () => (
  <Page id="1">
    <section className="mb-[100px] pt-[325px] max-[610px]:pt-[180px]">
      <h1 className="leading-none max-w-[700px] font-(family-name:--font-sf-ui-display)">
        Краснодар Компрессор Сервис
      </h1>
      <div className="flex gap-[35px] max-[610px]:gap-[15px] mt-[70px]">
        <div className="w-[7px] bg-(--color-blue)" />
        <p className="max-w-[306px] text-(--color-text-dark)">
          Разрабатываем и поставляем
          <br />
          <span className="text-(--color-text-light)">
            компрессорное оборудование
          </span>
          <br />
          для различных отраслей промышленности
        </p>
      </div>
      <div className="mt-[90px] max-[500px]:mt-[45px]">
        <IconButton label="Оставить заявку" scrollToId="7">
          <Image src="images/board.svg" width={40} height={40} alt="" />
        </IconButton>
      </div>
    </section>
  </Page>
);

export default MainPage;

import DirectorProfile from "@/shared/components/DirectorProfile";
import IconButton from "@/shared/components/IconButton";
import OpacityChanger from "@/shared/components/OpacityChanger";
import Page from "@/shared/components/Page";
import Statistics from "@/shared/components/Statistics";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => (
  <Page id="2">
    <OpacityChanger targetId="2" content>
      <div className="relative mb-[172px] pt-[230px]">
        <section>
          <div className="flex gap-[35px] max-[610px]:gap-[15px]">
            <div className="w-[7px] bg-(--color-blue)" />
            <div>
              <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
                Кто мы?
              </span>
              <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
                О компании
              </h2>
            </div>
          </div>
          <p className="mt-[70px] ml-[45px] max-[600px]:ml-0 max-w-[715px] text-(--color-text-dark)">
            ООО «Краснодар компрессор сервис» (ККС) занимается разработкой и
            поставкой компрессорного оборудования для нефтяной, химической,
            металлургической, атомной и других отраслей промышленности. В
            ассортимент входят поршневые компрессоры для сжатия воздуха и
            различных газов, а также блок-модульные станции, включая азотные
            установки на базе мембранных технологий и системы для
            компримирования взрывоопасных газов.
            <br />
            <br /> Компания предлагает оборудование в различных исполнениях:
            контейнерном, на шасси, прицепах, салазках и рамах собственного
            производства. ККС также предоставляет сервисное обслуживание,
            ремонт, поставку запчастей и модернизацию установок. Вся продукция{" "}
            <Link
              href="/license"
              className="text-(--color-blue) underline decoration-solid"
            >
              сертифицирована
            </Link>{" "}
            и соответствует отраслевым стандартам.
          </p>
        </section>
        <div className="ml-[45px] mt-[90px] mr-[100px] max-[740px]:mr-[45px] flex justify-between flex-wrap gap-[90px] max-[485px]:ml-0">
          <IconButton label="Связаться с нами" scrollToId="7">
            <Image src="images/call.svg" width={40} height={40} alt="" />
          </IconButton>
          <div className="flex gap-[35px] max-[740px]:flex-col">
            <Statistics stat="5+" label="вариантов исполнения оборудования" />
            <Statistics stat="10+" label="отраслей промышленности" />
            <Statistics stat="100%" label="продукции сертифицировано" />
          </div>
        </div>
        <DirectorProfile />
        <div className="mt-[80px]">
          <h3>ООО &quot;ККС&quot; это:</h3>
          <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px] min-w-[7px]" />
          <ul className="text-(--color-text-dark) mt-[35px] inline-block list-disc mb-[90px] mr-[100px] max-[920px]:mr-0">
            <li>
              <div className="text-white text-[30px] font-bold">
                Доступная цена.
              </div>
               ООО &quot;ККС&quot; является производителем, а не торгующей
              компанией, вследствие чего отсутствует торговая наценка.
            </li>
            <li>
              <div className="text-white text-[30px] font-bold">
                Высокое качество продукции.
              </div>
              Мы осуществляем контроль на всех этапах производства, начиная с
              закупа сырья и заканчивая тщательной проверкой уже готовых
              изделий, что в купе с использованием современного оборудования
              обеспечивает высокое качество продукции.
            </li>
            <li>
              <div className="text-white text-[30px] font-bold">
                Индивидуальный подход к каждому заказчику.
              </div>
              ООО «ККС» всегда открыто для диалога с заказчиками  и готово
              ответить на все интересующие Вас вопросы. Возможно изготовление
              деталей по чертежам заказчика.
            </li>
            <li>
              <div className="text-white text-[30px] font-bold">
                Оперативность.
              </div>
              Наличие собственного склада запасных частей с полной
              номенклатурой, более 3000 наименований, гарантирует быструю
              комплектацию заявок и поставку в кратчайшие сроки всего объема
              заказа.
            </li>
            <li>
              <div className="text-white text-[30px] font-bold">
                Гарантия на запчасти и продукцию.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </OpacityChanger>
  </Page>
);

export default AboutPage;

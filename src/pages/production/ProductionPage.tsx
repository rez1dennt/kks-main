import CardLink from "@/shared/components/CardLink";
import Page from "@/shared/components/Page";

const ProductionPage = () => (
  <Page id="4" zIndex={11}>
    <section className="inline-block pt-[230px]">
      <div className="flex gap-[35px] max-[610px]:gap-[15px]">
        <div className="w-[7px] bg-(--color-blue)" />
        <div>
          <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
            Что мы выпускаем?
          </span>
          <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display) max-[475px]:text-[45px] break-all">
            Производство
          </h2>
        </div>
      </div>
      <p className="mt-[70px] ml-[45px] max-[600px]:ml-0 max-w-[715px] text-(--color-text-dark)">
        ООО «Краснодар компрессор сервис» выпускает широкий спектр
        компрессорного оборудования: азотные и воздушные станции, поршневые
        компрессоры, бустеры, винтовые компрессоры DENAIR и запасные части. Вся
        продукция разрабатывается с учетом отраслевых стандартов и требований
        заказчика. Производственные мощности позволяют изготавливать
        оборудование в различных исполнениях — от стационарных до мобильных.
        Используются современные технологии и качественные комплектующие, что
        обеспечивает надежную работу в любых условиях.
      </p>
    </section>
    <nav className="flex gap-[35px] max-[500px]:gap-[10px] justify-center flex-wrap mt-[150px] ml-[-160px] max-[920px]:ml-0">
      <CardLink
        href="/nitrogen-stations"
        iconUrl="images/bubble_chart.svg"
        text="Азотные компрессорные станции"
      />
      <CardLink
        href="/air-stations"
        iconUrl="images/filter_drama.svg"
        text="Воздушные компрессорные станции"
      />
      <CardLink
        href="/piston-compressors"
        iconUrl="images/tools.svg"
        text="Поршневые компрессоры"
      />
      <CardLink href="/boosters" iconUrl="images/wrench.svg" text="Бустеры" />
      <CardLink
        href="/denair"
        iconUrl="images/camera.svg"
        text="Винтовые DENAIR"
      />
      <CardLink
        href="/additional-parts"
        iconUrl="images/screwdriver.svg"
        text="Запасные части"
      />
    </nav>
  </Page>
);

export default ProductionPage;

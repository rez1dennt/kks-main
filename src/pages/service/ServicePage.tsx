import Page from "@/shared/components/Page";
import ServiceModule from "@/widgets/services/ServicesModule";

const ServicePage = () => (
  <Page id="5">
    <div className="pt-[165px] max-[1200px]:pt-[152px] max-[920px]:pt-[138px]">
      <div className="mb-[36px] flex gap-[35px] max-[610px]:gap-[15px] max-[920px]:mb-[28px]">
        <div className="min-w-[7px] bg-(--color-blue)" />
        <div>
          <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
            Что мы готовы сделать?
          </span>
          <h2 className="mt-[10px] text-[72px] leading-[0.92] font-(family-name:--font-sf-ui-display) max-[1200px]:text-[62px] max-[670px]:text-[48px] max-[475px]:text-[40px]">
            Услуги
          </h2>
        </div>
      </div>
      <ServiceModule />
    </div>
  </Page>
);

export default ServicePage;

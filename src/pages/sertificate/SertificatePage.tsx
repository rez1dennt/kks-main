import LicenseDocumentsGrid from "@/shared/components/LicenseDocumentsGrid";
import Page from "@/shared/components/Page";
import {
  parts,
  pistons,
  production,
  stations,
} from "@/shared/constants/licenses";

const SertificatePage = () => (
  <Page id="3">
    <div className="pt-[230px] pr-[100px] pb-[90px] max-[920px]:pr-0">
      <section>
        <div className="flex gap-[35px] max-[610px]:gap-[15px]">
          <div className="w-[7px] bg-(--color-blue)" />
          <div>
            <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
              Документы компании
            </span>
            <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
              Сертификаты и декларации
            </h2>
          </div>
        </div>
        <p className="mt-[35px] ml-[45px] max-[600px]:ml-0 max-w-[780px] text-(--color-text-dark)">
          Все документы собраны в одном месте. Каждый документ можно сразу
          открыть или скачать без дополнительной навигации по стрелкам и
          скрытым элементам интерфейса.
        </p>
      </section>
      <LicenseDocumentsGrid documents={[...parts, ...stations, ...pistons, ...production]} />
    </div>
  </Page>
);

export default SertificatePage;

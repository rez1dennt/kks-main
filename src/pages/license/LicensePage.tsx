import CompanyFooter from "@/shared/components/CompanyFooter";
import IconButton from "@/shared/components/IconButton";
import LicenseDocumentsGrid from "@/shared/components/LicenseDocumentsGrid";
import Page from "@/shared/components/Page";
import { ScrollTracker } from "@/shared/components/ScrollTracker";
import {
  parts,
  pistons,
  production,
  stations,
} from "@/shared/constants/licenses";
import Header from "@/widgets/header/Header";
import HeaderNavigation from "@/widgets/header/HeaderNavigation";
import Image from "next/image";

const LicensePage = () => (
  <ScrollTracker>
    <div className="fixed min-h-screen bg-[url('/images/license_background.png')] bg-fixed bg-cover -z-10 w-full">
      <div className="min-h-screen w-screen h-full bg-(--color-background) pt-[151px]"></div>
    </div>
    <Header>
      <HeaderNavigation
        elements={[
          "Запчасти",
          "Станции",
          "Производство",
          "Установки поршневые",
        ]}
      />
    </Header>
    <Page id="1">
      <div className="flex flex-col mr-[155px] max-[920px]:mr-0 pt-[230px]">
        <IconButton label="Вернуться назад" reversed>
          <Image src="images/back.svg" width={40} height={40} alt="" />
        </IconButton>

        <div className="w-full mt-[70px]">
          <div className="flex gap-[35px]  max-[610px]:gap-[15px]">
            <div className="w-[7px] bg-(--color-blue)" />
            <div>
              <span className="text-[25px] max-[500px]:text-[18px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                Вся продукция сертифицирована
              </span>
              <h2 className="text-(--font-sf-ui-display) leading-[1em]">
                Лицензии
              </h2>
            </div>
          </div>
          <p className="mt-[35px] ml-[45px] max-[600px]:ml-0 max-w-[760px] text-(--color-text-dark)">
            Документы доступны напрямую: каждый файл можно сразу открыть или
            скачать из карточки без дополнительной навигации по стрелкам.
          </p>
          <LicenseDocumentsGrid documents={parts} />
        </div>
      </div>
    </Page>
    <Page id="2">
      <div className="pt-[200px] mr-[155px] max-[920px]:mr-0">
        <div className="flex gap-[35px]  max-[610px]:gap-[15px] max-w-[620px]">
          <div className="min-w-[7px] bg-(--color-blue)" />
          <h3 className="text-(--font-sf-ui-display) leading-[1em]">
            Станции
          </h3>
        </div>
        <LicenseDocumentsGrid documents={stations} />
      </div>
    </Page>
    <Page id="3">
      <div className="pt-[200px] mr-[155px] max-[920px]:mr-0">
        <div className="flex gap-[35px]  max-[610px]:gap-[15px] max-w-[620px]">
          <div className="min-w-[7px] bg-(--color-blue)" />
          <h3 className="text-(--font-sf-ui-display) leading-[1em]">
            Производство
          </h3>
        </div>
        <LicenseDocumentsGrid documents={production} />
      </div>
    </Page>
    <Page id="4">
      <div className="pt-[200px] mr-[155px] max-[920px]:mr-0 pb-[90px]">
        <div className="flex gap-[35px]  max-[610px]:gap-[15px] max-w-[620px]">
          <div className="min-w-[7px] bg-(--color-blue)" />
          <h3 className="text-(--font-sf-ui-display) leading-[1em]">
            Установки поршневые
          </h3>
        </div>
        <LicenseDocumentsGrid documents={pistons} />
        <CompanyFooter className="mt-[90px]" />
      </div>
    </Page>
  </ScrollTracker>
);

export default LicensePage;

import CompanyFooter from "@/shared/components/CompanyFooter";
import Form from "@/shared/components/Form";
import Page from "@/shared/components/Page";
import MapIcon from "@/shared/icons/MapIcon";
import Image from "next/image";
import Link from "next/link";

const ContactsPage = () => (
  <>
    <Page id="7">
      <div className="relative pt-[230px] pb-[257px] mr-[-45px] h-full">
        <div className="flex gap-[35px] max-[610px]:gap-[15px]">
          <div className="w-[7px] bg-(--color-blue)" />
          <div>
            <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
              Как связаться с нами?
            </span>
            <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
              Контакты
            </h2>
          </div>
        </div>
        <div className="flex gap-[35px] mt-[91px] flex-wrap">
          <div>
            <div className="flex gap-[20px]">
              <MapIcon className="w-[28px] h-[28px] fill-white" />
              <span className="font-(family-name:--font-sf-ui-display) font-medium">
                Адрес
              </span>
            </div>
            <div className="max-w-[275px] text-(--color-text-dark) mt-[35px] min-[600px]:ml-[48px]">
              Краснодарский край, город Краснодар, Улица Уральская, д.100/Б,
              кабинет 1.
            </div>
          </div>
          <div>
            <div className="flex gap-[20px]">
              <Image src="/images/call.svg" alt="" width={28} height={28} />
              <span className="font-(family-name:--font-sf-ui-display) font-medium">
                Телефон
              </span>
            </div>
            <div className="max-w-[275px] text-(--color-text-dark) mt-[35px] min-[600px]:ml-[48px] flex flex-col">
              <Link href="tel:89182680770">8 (918) 268-07-70</Link>
              <Link href="tel: 89186964109"> 8 (918) 696-41-09</Link>
            </div>
          </div>
          <div>
            <div className="flex gap-[20px]">
              <Image src="/images/mail.svg" alt="" width={28} height={28} />
              <span className="font-(family-name:--font-sf-ui-display) font-medium">
                E-mail
              </span>
            </div>
            <div className="max-w-[275px] text-(--color-text-dark) mt-[35px] min-[600px]:ml-[48px] flex flex-col">
              welcome@kks23.ru
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Page>
    <Page id="8">
      <div className="pt-[270px] pb-[140px]">
        <div className="flex gap-[35px] max-[610px]:gap-[15px] mb-[140px]">
          <div className="w-[7px] bg-(--color-blue)" />
          <div>
            <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
              С кем мы сотрудничаем?
            </span>
            <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
              Партнёры
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-[130px] flex-wrap items-end px-[45px] ml-[-200px] mr-[-45px] max-[920px]:ml-[-45px]">
          <div className="flex flex-col items-center">
            <Image
              src="/images/partners/ugtehmash.png"
              alt=""
              width={464}
              height={146}
            />
            <div className="mt-[60px] font-(family-name:--font-sf-ui-display) font-medium">
              ООО “ЮГТЕХМАШ”
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/partners/smservice.png"
              alt=""
              width={398}
              height={114}
            />
            <div className="mt-[70px] font-(family-name:--font-sf-ui-display) font-medium">
              ООО “СМ-Сервис”
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/partners/kmz.png"
              alt=""
              width={401}
              height={96}
            />
            <div className="mt-[79px] font-(family-name:--font-sf-ui-display) font-medium">
              ООО “КМЗВ”
            </div>
          </div>
        </div>
        <CompanyFooter className="mt-[140px]" />
      </div>
    </Page>
  </>
);

export default ContactsPage;

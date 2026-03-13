import CompanyFooter from "@/shared/components/CompanyFooter";
import Form from "@/shared/components/Form";
import Page from "@/shared/components/Page";
import MapIcon from "@/shared/icons/MapIcon";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: 'ООО “ЮГТЕХМАШ”',
    src: "/images/partners/ugtehmash.png",
    width: 464,
    height: 146,
    logoClassName: "max-w-[320px]",
  },
  {
    name: 'ООО “СМ-Сервис”',
    src: "/images/partners/smservice.png",
    width: 398,
    height: 114,
    logoClassName: "max-w-[270px]",
  },
  {
    name: 'ООО “КМЗВ”',
    src: "/images/partners/kmz.png",
    width: 401,
    height: 96,
    logoClassName: "max-w-[300px]",
  },
] as const;

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
        <div className="flex flex-wrap justify-center gap-[35px] px-[45px] ml-[-200px] mr-[-45px] max-[920px]:mx-0 max-[920px]:px-0">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex w-full max-w-[420px] flex-col items-center"
            >
              <div className="w-full rounded-[28px] border border-[#2f2f2f] bg-[#060606]/65 p-[22px]">
                <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-[22px] border border-[#b6b6b6]/12 bg-[linear-gradient(135deg,rgba(223,223,223,0.9),rgba(156,156,156,0.72))] px-[34px] py-[28px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(58,50,217,0.04),transparent_36%)]" />
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={`relative z-10 h-auto w-full object-contain ${partner.logoClassName}`}
                  />
                </div>
              </div>
              <div className="mt-[28px] text-center font-(family-name:--font-sf-ui-display) font-medium">
                {partner.name}
              </div>
            </article>
          ))}
        </div>
        <CompanyFooter className="mt-[140px]" />
      </div>
    </Page>
  </>
);

export default ContactsPage;

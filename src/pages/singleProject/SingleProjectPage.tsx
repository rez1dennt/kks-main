import CompanyFooter from "@/shared/components/CompanyFooter";
import IconButton from "@/shared/components/IconButton";
import { projects } from "@/shared/constants/projects";
import MapIcon from "@/shared/icons/MapIcon";
import Carousel from "@/widgets/carousel/Carousel";
import Header from "@/widgets/header/Header";
import Image from "next/image";

const SingleProjectPage = ({ projectId }: { projectId: string }) => {
  if (!projectId || !projects[projectId as keyof typeof projects]) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[url('/images/third_slide_background.png')] bg-fixed bg-cover -z-10 w-full">
        <div className="min-h-screen w-screen h-full bg-(--color-background) pt-[151px] pb-[90px]">
          <div className="ml-[200px] max-[920px]:ml-[40px] mr-[200px] max-[920px]:mr-[40px] flex flex-col">
            <IconButton label="Вернуться назад" reversed>
              <Image src="/images/back.svg" width={40} height={40} alt="" />
            </IconButton>

            <div className="w-full mt-[70px] flex">
              <Carousel
                imageSize={{ width: 760, height: 760 }}
                data={projects[projectId as keyof typeof projects].data}
                extra={
                  <div className="flex gap-[20px] items-center mb-[20px]">
                    <MapIcon className="fill-[#fff] w-[28px] h-[28px]" />
                    <span className="text-(--color-text-dark) text-[20px]">
                      {projects[projectId as keyof typeof projects].extra}
                    </span>
                  </div>
                }
              >
                <section>
                  <div className="flex gap-[35px]  max-[610px]:gap-[15px]">
                    <div className="w-[7px] bg-(--color-blue)" />
                    <div>
                      <span className="text-[25px] max-[500px]:text-[18px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                        С кем мы работали?
                      </span>
                      <h2 className="text-(--font-sf-ui-display) leading-[1em]">
                        Проекты
                      </h2>
                    </div>
                  </div>
                </section>
              </Carousel>
            </div>
            <CompanyFooter className="mt-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;

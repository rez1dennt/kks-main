import CompanyFooter from "@/shared/components/CompanyFooter";
import IconButton from "@/shared/components/IconButton";
import Header from "@/widgets/header/Header";
import Image from "next/image";
import React, { FC } from "react";
import { productData } from "../../shared/constants/products";

interface ProductPageProps {
  productId: string;
}

const ProductPage: FC<ProductPageProps> = ({ productId }) => {
  if (!productId || !productData[productId as keyof typeof productData]) {
    return <div>Product not found</div>;
  }

  const product = productData[productId as keyof typeof productData];

  return (
    <>
      <Header />
      <div
        className={`min-h-screen ${product.backgroundUrl} bg-fixed bg-cover -z-10 w-full`}
      >
        <div className="min-h-screen w-screen h-full bg-(--color-background)">
          <div className="py-[150px] px-[200px] max-[1200px]:px-[45px]">
            <IconButton label="Вернуться назад" reversed>
              <Image src="/images/back.svg" width={40} height={40} alt="" />
            </IconButton>
            <div className="flex justify-between gap-[75px] max-[1600px]:flex-wrap mt-[70px]">
              <section
                className="max-w-[760px]"
                style={{
                  maxWidth:
                    product.subtitle || product.image || product.subtext
                      ? 760
                      : "unset",
                  minWidth:
                    product.subtitle || product.image || product.subtext
                      ? 700
                      : "unset",
                }}
              >
                <div className="flex gap-[35px] max-[610px]:gap-[15px]">
                  <div className="min-w-[10px] bg-(--color-blue)" />
                  <div>
                    <h1
                      className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)"
                      style={{ fontSize: 70 }}
                    >
                      {product.title}
                    </h1>
                  </div>
                </div>
                {product.text}
              </section>

              {
                <div className="gap-[15px]">
                  {product.subtitle && (
                    <>
                      <span className="font-(family-name:--font-sf-ui-display) font-medium text-[30px] leading-[0.9]">
                        {product.subtitle}
                      </span>
                      <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px] min-w-[7px]" />
                    </>
                  )}
                  {product.subtext}
                  {product.image && (
                    <div className="flex items-center justify-center w-full mb-[90px]">
                      <Image
                        width={605}
                        height={645}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                  )}
                  {product.download && (
                    <IconButton
                      label="Скачать опросный лист"
                      download
                      downloadData={product.download}
                    >
                      <Image
                        src="/images/board.svg"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </IconButton>
                  )}
                </div>
              }
            </div>
            <CompanyFooter className="mt-[90px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

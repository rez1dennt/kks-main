import type { LicenseDocument } from "@/shared/constants/licenses";
import Image from "next/image";

const LicenseDocumentsGrid = ({
  documents,
  className = "",
}: {
  documents: LicenseDocument[];
  className?: string;
}) => (
  <div
    className={`grid grid-cols-2 gap-[35px] mt-[70px] mr-[100px] max-[1320px]:grid-cols-1 max-[920px]:mr-0 ${className}`.trim()}
  >
    {documents.map((document) => (
      <article
        key={document.fileUrl}
        className="rounded-[20px] border border-[#323232] bg-[#090909]/70 p-[24px] flex flex-col"
      >
        <a
          href={document.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[14px] overflow-hidden border border-[#1a1a1a]"
        >
          <Image
            src={document.imageUrl}
            alt={document.alt}
            width={537}
            height={760}
            className="w-full h-auto transition duration-300 group-hover:scale-[1.01]"
          />
        </a>

        <div className="mt-[24px]">
          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-(family-name:--font-sf-ui-display) font-bold text-[30px] leading-[1.05] text-white hover:text-(--color-blue) transition-colors"
          >
            {document.title}
          </a>
          {document.subtitle && (
            <p className="mt-[14px] text-[22px] font-(family-name:--font-sf-ui-display) text-white">
              {document.subtitle}
            </p>
          )}
          <p className="mt-[18px] text-(--color-text-dark)">
            {document.description}
          </p>
        </div>

        <div className="mt-[24px] flex gap-[14px] flex-wrap">
          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-(--color-blue) px-[22px] py-[12px] text-white hover:bg-(--color-blue) transition-colors"
          >
            Открыть документ
          </a>
          <a
            href={document.fileUrl}
            download
            className="inline-flex items-center justify-center rounded-full border border-[#4a4a4a] px-[22px] py-[12px] text-(--color-text-dark) hover:text-white hover:border-white transition-colors"
          >
            Скачать файл
          </a>
        </div>
      </article>
    ))}
  </div>
);

export default LicenseDocumentsGrid;

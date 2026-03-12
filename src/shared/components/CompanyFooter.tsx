const CompanyFooter = ({ className = "" }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-[#323232] pt-[32px] text-[16px] leading-[1.6] text-(--color-text-dark) ${className}`.trim()}
    >
      <p className="font-(family-name:--font-sf-ui-display) font-medium text-white">
        © <span suppressHydrationWarning>{currentYear}</span> ККС
      </p>
      <p className="mt-[8px]">Юридическое лицо: ООО «Краснодар компрессор сервис»</p>
    </footer>
  );
};

export default CompanyFooter;

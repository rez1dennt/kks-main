const education = [
  "В 1986 году окончил Краснодарский политехнический институт по специальности «Технология машиностроения, металлорежущие станки и инструменты», присвоена квалификация инженера-механика.",
  "В 2002 году получил второе высшее образование в Кубанском государственном технологическом университете по специальности «Бухгалтерский учёт и аудит», присвоена квалификация «экономист».",
];

const careerTimeline = [
  "С 1986 по 2018 год работал на различных должностях Краснодарского компрессорного завода.",
  "В 1986 году, после окончания института свою трудовую деятельность начал на Краснодарском компрессорном заводе в должности мастера инструментального цеха.",
  "В 2003 году переведён на должность заместителя начальника экспериментального участка.",
  "В 2006 году переведен на должность начальника инструментально-экспериментального цеха.",
  "В 2009 году назначен на должность начальника производственного отдела ООО «Краснодарский Компрессорный Завод».",
  "С 2013 по 2018 год занимал должность заместителя генерального директора по производству ООО «Краснодарский Компрессорный Завод».",
  "В 2018 году назначен на должность советника генерального директора по производственным вопросам.",
  "С сентября 2018 года - генеральный директор Общества с ограниченной ответственностью «Краснодар компрессор сервис» (ООО «ККС»).",
];

const DirectorProfile = () => (
  <section className="mt-[120px] mr-[100px] max-[920px]:mr-0">
    <div className="flex gap-[35px] max-[610px]:gap-[15px]">
      <div className="w-[7px] bg-(--color-blue)" />
      <div>
        <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
          Кто руководит компанией?
        </span>
        <h3 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
          Генеральный директор
        </h3>
      </div>
    </div>

    <div className="mt-[70px] grid gap-[35px] min-[1180px]:grid-cols-[360px_minmax(0,1fr)]">
      <div className="rounded-[28px] border border-[#2f2f2f] bg-[#060606]/70 p-[35px]">
        <span className="text-(--color-text-dark)">ООО «Краснодар компрессор сервис»</span>
        <p className="mt-[18px] font-(family-name:--font-sf-ui-display) text-[48px] leading-[0.95] font-bold max-[1280px]:text-[48px] max-[720px]:text-[40px] break-words">
          Татарин Валерий Викторович
        </p>
        <p className="mt-[20px] text-[22px] font-(family-name:--font-sf-ui-display) font-medium text-white">
          Генеральный директор
        </p>

        <div className="mt-[35px] flex flex-col gap-[24px] text-(--color-text-dark)">
          <div>
            <div className="text-white font-(family-name:--font-sf-ui-display) font-medium">
              Дата и место рождения
            </div>
            <p className="mt-[10px]">1964 год, село Натырбово, Краснодарский край.</p>
          </div>
          <div>
            <div className="text-white font-(family-name:--font-sf-ui-display) font-medium">
              Награды
            </div>
            <p className="mt-[10px]">Присвоено звание «Почётный машиностроитель РФ».</p>
          </div>
          <div>
            <div className="text-white font-(family-name:--font-sf-ui-display) font-medium">
              Семейное положение
            </div>
            <p className="mt-[10px]">Женат, есть дочь.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[35px]">
        <div className="rounded-[28px] border border-[#2f2f2f] bg-[#060606]/55 p-[35px]">
          <div className="flex items-center gap-[18px]">
            <div className="h-[7px] w-[25px] bg-(--color-blue)" />
            <span className="font-(family-name:--font-sf-ui-display) text-[28px] font-bold text-white">
              Образование
            </span>
          </div>
          <ul className="mt-[30px] text-(--color-text-dark)">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-[#2f2f2f] bg-[#060606]/55 p-[35px]">
          <div className="flex items-center gap-[18px]">
            <div className="h-[7px] w-[25px] bg-(--color-blue)" />
            <span className="font-(family-name:--font-sf-ui-display) text-[28px] font-bold text-white">
              Профессиональный и карьерный рост
            </span>
          </div>
          <ul className="mt-[30px] text-(--color-text-dark)">
            {careerTimeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DirectorProfile;

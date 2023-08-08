import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../../../../data/paymentPlanData";
const Circle = ({ number, customStyle, text }) => {
  return (
    <div
      className={`absolute ${customStyle} -top-10 sm:-top-12 w-24 sm:w-28 flex flex-col justify-center items-center`}
    >
      <div
        className={`bg-primary/20 rounded-full w-20 h-20  sm:w-24 sm:h-24  flex justify-center items-center `}
      >
        <div className="bg-primary rounded-full w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center text-secondary font-semibold text-small ">
          {number}%
        </div>
      </div>
      <p className="text-center text-tiny sm:text-[14px] pt-3 font-semibold text-primary">
        {text}
      </p>
    </div>
  );
};

const PaymentPlanT1 = () => {
  const paymentPlanData = data.find((d) => d.template == 1);

  const { i18n, t } = useTranslation();
  return (
    <div
      dir={i18n.language == "en" ? "" : "rtl"}
      className="xl:grid xl:grid-cols-12 max-lg:space-y-2 max-lg:mt-24 max-lg:pt-16 mt-16 pt-12 border-t-2"
    >
      <div className="col-span-4 flex justify-center items-center font-bold text-huge xl:p-12 max-xl:px-4 text-primary">
        {t(paymentPlanData.title)}
      </div>
      <div className="col-span-4 ">
        <p className="text-small text-fourth pb-32 p-4">
          {t(paymentPlanData.type)}
        </p>
        <div className="relative flex flex-col w-full">
          <div className=" w-full h-[2px] bg-primary self-center " />
          {paymentPlanData.plans.map((item, index) => {
            return (
              <Circle
                key={index}
                number={item.number}
                customStyle={item.customStyle}
                text={t(item.text)}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-4 flex flex-col justify-center items-center max-xl:pt-36 xl:p-12 text-primary">
        <p className="text-big font-medium">{t("price")} </p>
        <p className="text-huge font-bold">AED1.2M</p>
      </div>
    </div>
  );
};

export default PaymentPlanT1;

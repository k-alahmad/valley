import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../../../../data/headerData";
const HeaderSlidingText = () => {
  const { t } = useTranslation();
  const headerData = data.find((d) => d.template == 1);
  let headerTitle = t(headerData.mainTitle).split(" ");

  return (
    <div className="text-9xl bg-transparent text-primary overflow-x-hidden py-4 -mt-[350px] max-md:hidden">
      <p className="animate-textCamera relative whitespace-nowrap">
        {headerTitle[0]}
        <span className="border-text text-transparent">
          {` ${headerTitle[1]} `}
        </span>
        {headerTitle[2]}
      </p>
    </div>
  );
};

export default HeaderSlidingText;

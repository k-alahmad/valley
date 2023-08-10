import React from "react";
import lines from "../../../../../assets/images/lines.svg";
const PaymentPlanCard = ({ title, subTitle, features }) => {
  return (
    <div className="flex justify-center items-center w-full cursor-pointer">
      <div
        // style={{
        //   backgroundImage: `url(${lines})`,
        //   backgroundPosition: "45%",
        // }}
        className={`bg-transparent transition-all duration-500 w-[60%]  text-primary flex flex-row justify-evenly items-center font-semibold text-center relative bg-no-repeat `}
      >
        {/* <div className="absolute h-[200px] w-[200px] -bottom-[100px] -left-[100px] rotate-45 bg-white" />
        <div className="absolute h-[200px] w-[200px] -top-[100px] -right-[100px] rotate-45 bg-white" /> */}
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="space-y-1">
            <p className="font-bold text-big text-secondary">{title} </p>
            <p className="font-semibold text-med text-fourth">{subTitle} </p>
          </div>
          <div
            className={`bg-primary shadow-lg w-[200px] h-[100px] flex flex-col justify-center items-center transition-all duration-500 rounded`}
          >
            <p className="font-bold text-white text-med drop-shadow-2xl">
              20 % / 80 %
            </p>
          </div>
        </div>
        <div className="w-[300px] flex flex-col justify-center items-center h-full space-y-4 self-end">
          {features?.map((item, index) => {
            return (
              <p className="font-semibold text-med" key={index}>
                {item?.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;

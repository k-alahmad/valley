import React from "react";
import PaymentPlanCard from "./PaymentPlanCard";
import { data } from "../../../../../data/paymentPlanData";
const PaymentPlanT3 = () => {
  const paymentPlanData = data.find((d) => d.template == 3);

  return (
    <div className="px-[5%] lg:px-[10%] mt-16 flex flex-row justify-center items-center">
      <PaymentPlanCard
        title={paymentPlanData.plan.title}
        subTitle={paymentPlanData.plan.subtitle}
        features={paymentPlanData.plan.feature}
      />
    </div>
  );
};

export default PaymentPlanT3;

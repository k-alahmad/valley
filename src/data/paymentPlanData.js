export const data = [
  {
    template: 1,
    title: "PaymentPlan",
    type: "PaymentPlanType",
    plans: [
      {
        number: 20,
        text: "BookingAmount",
        customStyle: "left-[4%] capitalize",
      },
      {
        number: 60,
        text: "installments",
        customStyle: "left-[40%] capitalize",
      },
      {
        number: 20,
        text: "finalInsallment",
        customStyle: "left-[75%] capitalize",
      },
    ],
  },
  {
    template: 2,
    title: "PaymentPlan",
    type: "PaymentPlanType",
    plans: [
      {
        title: "Cash Plan",
        subtitle: "Cash Payment Plan",
        feature: [{ text: "20% On Booking " }, { text: "80% On Completion " }],
      },
      {
        title: "Short Plan",
        subtitle: "1 Year Post-handover Plan",
        feature: [
          { text: "20% On Booking " },
          { text: "20% On Completion" },
          { text: "60% Installment for 1 Year Divided by 15% each 3 Months" },
        ],
      },
      {
        title: "Long Plan",
        subtitle: "2 Years Post-handover Plan",
        feature: [
          { text: "20% On Booking " },
          { text: "30% On Completion" },
          {
            text: "50% Installment for 2 Years Divided by 6.25% each 3 Months",
          },
        ],
      },
    ],
  },
  {
    template: 3,
    title: "HANDOVER",
    type: "2026",
    plan: {
      title: "HANDOVER",
      subtitle: "2026",
      feature: [
        { amount: "5%", text: "down payment" },
        { amount: "5 year ", text: "payment plan" },
        {
          amount: "45%",
          text: "during construction",
        },
        {
          amount: "50%",
          text: "2 years post completion",
        },
      ],
    },
  },
];

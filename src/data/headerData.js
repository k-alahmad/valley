import heroLeft from "../assets/images/heroLeft.webp";
import heroMiddle from "../assets/images/heroMiddle.webp";
import heroRight from "../assets/images/heroRight.webp";
import Riverside from "../assets/images/330Riverside.svg";
import HeroBottom1 from "../assets/images/heroBottom.webp";
import HeroBottom from "../assets/images/main.webp";
import headerWave from "../assets/images/headerCurve3.svg";
import handover from "../assets/icons/handover.svg";
import price from "../assets/icons/price.svg";
import paymentplan from "../assets/icons/book.svg";
export const data = [
	{
		template: 1,
		titleOne: "HeaderTitleOne",
		subTitleOne: "HeaderSubTitleOne",
		titleTwo: "HeaderTitleTwo",
		subTitleTwo: "HeaderSubTitleTwo",
		mainTitle: "HeaderMainTitle",
		heroLeft,
		heroMiddle,
		heroRight,
		Riverside,
		HeroBottom: HeroBottom1,
	},
	{
		template: 2,
		HeroBottom,
		textSlider: [
			{
				icon: price,
				title: "AED2M",
				subTitle: "Townhouse Less Than",
			},
			{
				icon: paymentplan,
				title: "10%",
				subTitle: "Down Payment",
			},
			// {
			// 	icon: handover,
			// 	title: "Q3 2026",
			// 	subTitle: "Handover",
			// },
		],
	},
	{
		template: 3,
		HeroBottom,
		textSlider: [
			{
				icon: price,

				title: [
					{ lng: "ar", value: "AED3.2M" },
					{ lng: "fa", value: "AED3.2M" },
					{ lng: "en", value: "AED3.2M" },
					{ lng: "ru", value: "3.2 млн дирхамов ОАЭ" },
				],
				subTitle: [
					{ lng: "ar", value: "Starting Price" },
					{ lng: "fa", value: "Starting Price" },
					{ lng: "en", value: "Starting Price" },
					{ lng: "ru", value: "Начальная цена" },
				],
			},
			{
				icon: paymentplan,
				title: [
					{ lng: "ar", value: "5 Years" },
					{ lng: "en", value: "5 Years" },
					{ lng: "fa", value: "5 Years" },
					{ lng: "ru", value: "5 лет" },
				],
				subTitle: [
					{ lng: "ar", value: "Payment Plans" },
					{ lng: "en", value: "Payment Plans" },
					{ lng: "fa", value: "Payment Plans" },
					{ lng: "ru", value: "Планы оплаты" },
				],
			},
			{
				icon: handover,
				title: [
					{ lng: "ar", value: "Q3 2026" },
					{ lng: "en", value: "Q3 2026" },
					{ lng: "fa", value: "Q3 2026" },
					{ lng: "ru", value: "3 квартал 2026 г" },
				],
				subTitle: [
					{ lng: "ar", value: "Handover" },
					{ lng: "en", value: "Handover" },
					{ lng: "fa", value: "Handover" },
					{ lng: "ru", value: "Сдавать" },
				],
			},
		],
	},
];

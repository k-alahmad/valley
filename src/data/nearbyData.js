import airportIcon from "../assets/icons/airplane.svg";
import PalmJumeirahIcon from "../assets/icons/palm.svg";
import beach from "../assets/icons/beach.svg";
import metro from "../assets/icons/metro.svg";
import global from "../assets/icons/global.svg";
import road from "../assets/icons/road.png";
import mall from "../assets/icons/mall.png";
import burjalarab from "../assets/icons/burjalarab.png";
import BurjKhalifa from "../assets/images/map/BurjKhalifa.webp";
import BusinessBay from "../assets/images/map/BusinessBay.webp";
import DubaiFrame from "../assets/images/map/DubaiFrame.webp";
import DubaiOpera from "../assets/images/map/DubaiOpera.webp";
import DXBAIRPORT from "../assets/images/map/DXBAIRPORT.webp";
import PalmJumeirah from "../assets/images/map/PalmJumeirah.webp";
import kalifaIcon from "../assets/icons/kalifa.svg";
import BusinessBayIcon from "../assets/icons/BusinessBayIcon.svg";
import dubaiFrameIcon from "../assets/icons/dubaiFrame.svg";
import dubaiMallIcon from "../assets/icons/dubaiMall.svg";
import dubaiOperaIcon from "../assets/icons/dubaiOpera.svg";
import MedydanIcon from "../assets/icons/horses.svg";
import SOBHAHARTLANDIcon from "../assets/icons/SOBHAHARTLAND.svg";
import DubaiMall from "../assets/images/map/DubaiMall.webp";
import Meydan from "../assets/images/map/Meydan.webp";
import SobhaHartland from "../assets/images/map/SobhaHartland.webp";

export const data = [
	{
		template: 1,
		title: "nearbyTitle",
		subTitle: "nearbySubTitle",
		locations: [
			{
				icon: PalmJumeirahIcon,
				name: "palm",
				duration: "25 ",
				img: PalmJumeirah,
			},
			{
				icon: airportIcon,
				name: "airport",
				duration: "12 ",
				img: DXBAIRPORT,
			},
			{
				icon: kalifaIcon,
				name: "khalifa",
				duration: "15 ",
				img: BurjKhalifa,
			},
			{
				icon: dubaiFrameIcon,
				name: "frame",
				duration: "15 ",
				img: DubaiFrame,
			},
			{
				icon: BusinessBayIcon,
				name: "businessBay",
				duration: "25 ",
				img: BusinessBay,
			},
			{
				icon: dubaiOperaIcon,
				name: "opera",
				duration: "25 ",
				img: DubaiOpera,
			},
			{
				icon: MedydanIcon,
				name: "meydan",
				duration: "10 ",
				img: Meydan,
			},
			{
				icon: dubaiMallIcon,
				name: "dubaiMall",
				duration: "15 ",
				img: DubaiMall,
			},
			{
				icon: SOBHAHARTLANDIcon,
				name: "heartland",
				duration: "10 ",
				img: SobhaHartland,
			},
		],
	},
	{
		template: 2,
		title: "nearbyTitle",
		subTitle: "nearbySubTitle",
		locations: [
			{
				icon: PalmJumeirahIcon,
				name: "palm",
				duration: "11 ",
			},
			{
				icon: airportIcon,
				name: "DXB Airport",
				duration: "25 ",
			},
			{
				icon: kalifaIcon,
				name: "Downtown",
				duration: "20 ",
			},
			{
				icon: beach,
				name: "JBR",
				duration: "10 ",
			},
			{
				icon: global,
				name: "Global Village",
				duration: "25 ",
			},
			{
				icon: metro,
				name: "Metro",
				duration: "3 ",
			},
		],
	},
	{
		template: 3,
		title: [
			{
				lng: "ar",
				value: "EASY ACCESS TO KEY LANDMARKS",
			},
			{
				lng: "en",
				value: "EASY ACCESS TO KEY LANDMARKS",
			},
			{
				lng: "fa",
				value: "EASY ACCESS TO KEY LANDMARKS",
			},
			{
				lng: "ru",
				value: "ЛЕГКИЙ ДОСТУП К КЛЮЧЕВЫМ ДОСТОПРИМЕЧАТЕЛЬНОСТЯМ",
			},
		],
		locations: [
			{
				icon: PalmJumeirahIcon,
				name: [
					{
						lng: "ar",
						value: "palm",
					},
					{
						lng: "en",
						value: "palm",
					},
					{
						lng: "fa",
						value: "palm",
					},
					{
						lng: "ru",
						value: "ладонь",
					},
				],
				duration: "20 ",
			},
			{
				icon: airportIcon,
				name: [
					{
						lng: "ar",
						value: "DXB Airport",
					},
					{
						lng: "en",
						value: "DXB Airport",
					},
					{
						lng: "fa",
						value: "DXB Airport",
					},
					{
						lng: "ru",
						value: "DXB аэропорт",
					},
				],
				duration: "25 ",
			},
			{
				icon: kalifaIcon,
				name: [
					{
						lng: "ar",
						value: "Downtown",
					},
					{
						lng: "en",
						value: "Downtown",
					},
					{
						lng: "fa",
						value: "Downtown",
					},
					{
						lng: "ru",
						value: "Центр города",
					},
				],
				duration: "25 ",
			},
			{
				icon: beach,
				name: [
					{
						lng: "ar",
						value: "JBR",
					},
					{
						lng: "en",
						value: "JBR",
					},
					{
						lng: "fa",
						value: "JBR",
					},
					{
						lng: "ru",
						value: "ЖБР",
					},
				],
				duration: "15 ",
			},
			{
				icon: mall,
				name: [
					{
						lng: "ar",
						value: "Outlet Mall",
					},
					{
						lng: "en",
						value: "Outlet Mall",
					},
					{
						lng: "fa",
						value: "Outlet Mall",
					},
					{
						lng: "ru",
						value: "Outlet Mall",
					},
				],
				duration: "8 ",
			},
		],
	},
];

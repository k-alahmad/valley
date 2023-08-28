import React from "react";
import Header from "./components/Header";
import PaymentPlan from "./components/PaymentPlan";
import FloorPlan from "./components/FloorPlan";
import Nearby from "./components/Nearby";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import Location from "./components/Location";
import Register from "../../components/UI/Register";
import { systemSettings } from "../../settings";
import Head from "../../components/Layout/Head";
const Home = () => {
	return (
		<>
			<Head
				title={"Townhouse"}
				desc={
					"Offering 3 & 4 bedroom townhouses from top developers. Starting price below AED 2 million. With large green spaces, a lively community, and the best-in-class family amenities."
				}
				keywords={
					"Modern Townhouses, Townhouse Investment, Spacious Living, Townhouse Community Living, Contemporary Design, Family-Friendly, Prime Location, 3 & 4 Bedrooms,	 Luxury Features, Open Green Spaces, Lifestyle Amenities, Townhouse for sale, The Valley by Emaar, Emaar Townhouse, Family-Friendly Townhomes, Gated Community, Townhouses, AVA REAL ESTATE, Townhouses in Dubai"
				}
			/>
			<Header />
			<PaymentPlan />
			<div
				className={`${
					systemSettings.backgroudLines &&
					"bg-primary bg-t3Pattern bg-no-repeat bg-cover bg-center"
				}`}
			>
				<AboutUs />
				<PhotoGallery />
				<FloorPlan />
				<Nearby />
			</div>
			<Location />
			<Register />
		</>
	);
};
export default Home;

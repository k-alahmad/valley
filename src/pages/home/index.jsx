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
				title={"Elitz"}
				desc={
					"With 0% interest, 1% payment plan, Fully-furnished apartment, and a guaranteed 6%-10% ROI; Elitz comes with Thrice the Action, Triple the Benefits. The project offers an array of options including Studios, 1, 2, and 3 BHK apartments. "
				}
				keywords={
					"longest payment plan, lowest installment, 1% installment, apartment jvc post, handover payment plan, easy payment plan, zero rate interest, dubai investment, affordable price, lowest price, best offplan project, best location, AVA REAL ESTATE, Danube, Dubai Real Estate, Post handover, lowest payment plan"
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

import React, { lazy } from "react";
import { systemSettings } from "../../settings";
import Header from "./components/Header";
import PaymentPlan from "./components/PaymentPlan";
import FloorPlan from "./components/FloorPlan";
import Nearby from "./components/Nearby";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import Location from "./components/Location";
import Register from "../../components/UI/Register";
const Home = () => {
  return (
    <>
      <Header />
      <PaymentPlan />
      <AboutUs />
      <div id="gallery" />
      <PhotoGallery />
      <FloorPlan />
      <Nearby />
      <Location />
      <Register />
    </>
  );
};
export default Home;

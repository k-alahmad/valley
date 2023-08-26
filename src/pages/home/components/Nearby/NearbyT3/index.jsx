import React, { useState } from "react";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
import Slider from "react-slick";
import { data } from "../../../../../data/nearbyData";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import NearbyCard from "./NearbyCard";
import { useLocation } from "react-router-dom";
import { systemSettings } from "../../../../../settings";
const NearbyT3 = () => {
  const nearbyData = data.find(
    (d) => d.template == systemSettings.nearby.dataTemplate
  );
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  return (
    <div
      style={{ width: width - (width - 10) / 100, maxWidth: "1920px" }}
      className="flex flex-col justify-center items-center py-24"
    >
      <div className="font-bold text-big md:text-huge uppercase text-center drop-shadow-2xl text-third pb-12">
        {systemSettings.availableLanguages.length > 1
          ? nearbyData.title.find(
              (x) => x.lng == location.pathname.substring(1)
            )?.value
          : nearbyData.title[0].value}
      </div>
      <Slider
        infinit
        autoplay
        speed={3000}
        autoplaySpeed={0}
        cssEase="linear"
        pauseOnHover
        arrows={false}
        dots
        slidesToScroll={1}
        className="w-full h-full flex justify-center items-center"
        responsive={[
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 4,
              centerPadding: "100px",
              centerMode: true,
            },
          },
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 3,
              centerPadding: "70px",
              centerMode: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              centerPadding: "20px",
              centerMode: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              centerPadding: "100px",
              centerMode: true,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              centerPadding: "50px",
              centerMode: true,
            },
          },
        ]}
        customPaging={(index) => {
          return index == currentSlide ? (
            <div key={index} className="text-third text-med pt-6">
              <FiberManualRecordIcon />
            </div>
          ) : (
            <div key={index} className="text-third text-med pt-6">
              <OutFiberManualRecordIcon />
            </div>
          );
        }}
        appendDots={(dots) => {
          return (
            <ul>
              {dots.map((item, index) => {
                return item;
              })}
            </ul>
          );
        }}
        beforeChange={(prev, next) => {
          setCurrentSlide(next);
        }}
      >
        {nearbyData.locations.map((item, index) => {
          return (
            <NearbyCard
              key={index}
              icon={item.icon}
              name={
                systemSettings.availableLanguages.length > 1
                  ? item.name.find(
                      (x) => x.lng == location.pathname.substring(1)
                    )?.value
                  : item.name[0].value
              }
              duration={item.duration}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default NearbyT3;

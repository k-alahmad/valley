import React, { useState } from "react";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
import Slider from "react-slick";
import { data } from "../../../../../data/nearbyData";
import { useTranslation } from "react-i18next";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import NearbyCard from "./NearbyCard";
const NearbyT3 = () => {
  const nearbyData = data.find((d) => d.template == 3);
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      style={{ width: width - (width - 1) / 100, maxWidth: "1920" }}
      className="flex flex-col justify-center items-center py-24"
    >
      <div className="font-bold text-huge uppercase text-center text-third pb-12">
        {t(nearbyData.title)}
      </div>
      <Slider
        infinit
        autoplay
        autoplaySpeed={3000}
        arrows={false}
        dots
        slidesToScroll={1}
        className="w-full h-full flex justify-center items-center"
        responsive={[
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 3,
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
              name={item.name}
              duration={item.duration}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default NearbyT3;

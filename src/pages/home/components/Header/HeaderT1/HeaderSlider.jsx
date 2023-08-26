import React, { useState } from "react";
import Slider from "react-slick";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
import { data } from "../../../../../data/headerData";
import { systemSettings } from "../../../../../settings";
const HeaderSlider = () => {
  const headerData = data.find(
    (d) => d.template == systemSettings.header.dataTemplate
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    touchMove: true,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    customPaging: (index) => {
      return index == currentSlide ? (
        <div key={index} className="text-primary text-med py-2">
          <FiberManualRecordIcon />
        </div>
      ) : (
        <div key={index} className="text-primary text-med py-2">
          <OutFiberManualRecordIcon />
        </div>
      );
    },
    appendDots: (dots) => {
      return (
        <ul>
          {dots.map((item, index) => {
            return item;
          })}
        </ul>
      );
    },
  };

  let imgs = [headerData.heroLeft, headerData.heroMiddle, headerData.heroRight];
  return (
    <div
      className=" flex justify-center max-w-screen overflow-hidden items-center md:hidden pb-8"
      style={{
        width: width,
      }}
    >
      <Slider
        {...settings}
        autoplay
        autoplaySpeed={4000}
        className={`h-full w-full z-20`}
      >
        {imgs.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={"Header" + index}
              className="h-[400px] w-full object-conatin rounded"
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default HeaderSlider;

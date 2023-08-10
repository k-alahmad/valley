import React from "react";
import Slider from "react-slick";
import { data } from "../../../../../data/photoGallery";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
const PhotoGalleryImagesSlider = ({ sliderRef }) => {
  const { width } = useWindowDimensions();

  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 right-[40%] bottom-[5%] rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos className="text-secondary text-[40px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 left-[40%] bottom-[5%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos className="text-secondary text-[40px]" />
      </div>
    );
  }
  return (
    <div
      style={{
        width: width - (width * 0.5) / 100,
        maxWidth: "1920px",
      }}
    >
      <Slider
        ref={sliderRef}
        vertical
        verticalSwiping={false}
        arrows={false}
        touchMove={false}
        className="h-full w-full"
        centerMode
        centerPadding="0px"
      >
        {data.navBtns.map((item, i) => {
          return (
            <Slider
              touchMove
              centerMode
              centerPadding="100px"
              arrows={true}
              infinite
              dots={false}
              slidesToShow={3}
              slidesToScroll={1}
              className="w-full h-full"
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
            >
              {item.imgs.map((item, idx) => {
                return (
                  <div className="relative outline-none max-w-[90%]">
                    <div className="absolute top-0 left-0 w-0 h-0 bg-transparent border-solid border-t-[100px] border-r-[100px] border-l-transparent border-r-transparent border-t-primary z-10" />
                    <img
                      key={i}
                      src={item}
                      className="h-[400px] sm:h-[500px] w-full object-fill "
                      alt={"Gallery " + i}
                    />
                  </div>
                );
              })}
            </Slider>
          );
        })}
      </Slider>
    </div>
  );
};

export default PhotoGalleryImagesSlider;

import React from "react";
import { data } from "../../../../../data/floorData";
const FloorPlanNavigator = ({
  selected,
  setSelected,
  sliderRef,
  sliderRef2,
  sliderRef3,
}) => {
  const floorData = data.find((d) => d.template == 3);
  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <div className="grid sm:max-lg:grid-cols-4 grid-cols-2 gap-4 w-full max-sm:max-w-[270px] sm:max-lg:max-w-[500px] lg:max-w-[270px] ">
        {floorData.floors.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                sliderRef2.current.slickGoTo(index);
                sliderRef3.current.slickGoTo(index);
                setSelected(index);
              }}
              className={`transition-all duration-500 p-3 border-2 border-secondary min-w-32 min-h-32 origin-bottom  flex flex-col justify-end items-center cursor-pointer relative ${
                selected == index ? "bg-secondary text-white" : ""
              } `}
            >
              <div className="h-6 w-6 bg-third absolute -top-[2px] -right-[2px] border-b-2 border-b-secondary border-l-2 border-l-secondary border-third" />
              <p className="text-bigger"> {item.btnTitle} </p>
              <p className="text-smaller"> {item.btnSubTitle} </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloorPlanNavigator;

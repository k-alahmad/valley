import React, { useState, useRef } from "react";
import PhotoGalleryNavigator from "./PhotoGalleryNavigator";
import PhotoGalleryImagesSlider from "./PhotoGalleryImagesSlider";
import { data } from "../../../../../data/photoGallery";
const PhotoGalleryT2 = () => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  return (
    <div className="flex flex-col justify-center items-center text-third text-small font-semibold space-y-8 pb-12">
      <div className="font-bold text-big md:text-huge uppercase text-center  drop-shadow-2xl">
        Photo Gallery
      </div>
      {data.navBtns.length > 1 && (
        <PhotoGalleryNavigator
          selected={selected}
          setSelected={setSelected}
          sliderRef={sliderRef}
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <PhotoGalleryImagesSlider sliderRef={sliderRef} />
      </div>
    </div>
  );
};

export default PhotoGalleryT2;

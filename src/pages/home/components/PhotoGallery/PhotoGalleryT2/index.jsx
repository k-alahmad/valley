import React, { useState, useRef } from "react";
import PhotoGalleryNavigator from "./PhotoGalleryNavigator";
import PhotoGalleryImagesSlider from "./PhotoGalleryImagesSlider";
const PhotoGalleryT2 = () => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  return (
    <div className="flex flex-col justify-center items-center text-white text-small font-semibold space-y-8 pb-12">
      <div className="font-bold text-huge uppercase">Photo Gallery</div>
      <PhotoGalleryNavigator
        selected={selected}
        setSelected={setSelected}
        sliderRef={sliderRef}
      />
      <PhotoGalleryImagesSlider sliderRef={sliderRef} />
    </div>
  );
};

export default PhotoGalleryT2;

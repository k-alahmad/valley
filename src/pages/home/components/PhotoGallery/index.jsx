import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const PhotoGalleryComponent =
  systemSettings.photoGallery.status && lazy(() => import("./PhotoGalleryT1"));
const PhotoGallery = () => {
  return (
    PhotoGalleryComponent && (
      <div id="">
        <PhotoGalleryComponent />
      </div>
    )
  );
};

export default PhotoGallery;

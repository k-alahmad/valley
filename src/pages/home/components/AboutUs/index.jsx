import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const AboutUsComponent =
  systemSettings.about.status && lazy(() => import("./AboutUsT1"));
const AboutUs = () => {
  return (
    AboutUsComponent && (
      <div id="about">
        <AboutUsComponent />
      </div>
    )
  );
};

export default AboutUs;

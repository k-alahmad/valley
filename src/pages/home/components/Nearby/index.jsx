import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const NearbyComponent =
  systemSettings.nearby.status &&
  (systemSettings.nearby.template == 1
    ? lazy(() => import("./NearbyT1"))
    : systemSettings.nearby.template == 2 && lazy(() => import("./NearbyT2")));
const Nearby = () => {
  return (
    NearbyComponent && (
      <div id="nearby">
        <NearbyComponent />
      </div>
    )
  );
};

export default Nearby;

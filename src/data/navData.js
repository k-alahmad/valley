import { systemSettings } from "../settings";
export const NavElement = [
  systemSettings.header.status && { name: "home", link: "home" },
  systemSettings.paymentPlan.status && { name: "Payment", link: "payment" },
  systemSettings.about.status && { name: "Why JLT", link: "about" },
  systemSettings.photoGallery.status && { name: "Gallery", link: "gallery" },
  systemSettings.floorPlan.status && { name: "Floor Plan", link: "floorPlan" },
  systemSettings.nearby.status && { name: "Nearby", link: "nearby" },
  systemSettings.siteLocation.status && { name: "Location", link: "location" },
  systemSettings.register.status && { name: "Contact Us", link: "contactus" },
];

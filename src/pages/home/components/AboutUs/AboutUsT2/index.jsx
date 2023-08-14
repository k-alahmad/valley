import React from "react";
import image from "../../../../../assets/images/External/1.webp";

const AboutUsT2 = () => {
  return (
    <div className="mt-20 text-third py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24  max-lg:space-y-12">
        <div className="col-span-7 px-[10%] flex flex-col lg:justify-center lg:items-start text-smaller md:text-small font-normal text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge  drop-shadow-2xl">
            Ultimate luxury living Townhouse & Mansions
          </p>
          <br />
          <p>
            Introducing an exceptional project focused on ultimate luxury living
            within a gated community. Discover opulent interiors boasting
            expansive living spaces and sophisticated bedrooms.
          </p>
          <br />
          <p>
            This distinctive villa community stands apart by offering: The most
            extensive payment plan, available Unmatched villa sizes, and The
            lowest down payment plan
          </p>
          <br />
          <p>
            Strategically positioned adjacent to the Expo city and Dubai's
            Economic Hub encompassing Maktoum Airport and Jebel Ali Port, this
            gated community with its 1km Lagoon Villas and Townhouses redefines
            luxury living.
          </p>
          <br />
          <p>
            Featuring the most generous layouts currently on the market,
            including 4 BR (3,600 sqft) and 5 BR (4,270 sq.ft) options, these
            homes are thoughtfully equipped with Bosch appliances in the kitchen
            and en-suite bathrooms in all bedrooms.
          </p>
        </div>
        <div className="col-span-5 flex justify-center items-center relative">
          <div className="absolute -top-[1px] -left-[1px] w-0 h-0 bg-transparent border-solid border-t-[150px] border-r-[150px] border-l-transparent border-r-transparent border-t-primary z-10" />
          <img
            src={image}
            alt="About us"
            className="object-cover w-full lg:h-full h-[600px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsT2;

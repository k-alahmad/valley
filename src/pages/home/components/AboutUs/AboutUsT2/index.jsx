import React from "react";
import image from "../../../../../assets/images/External/1.webp";

const AboutUsT2 = () => {
  return (
    <div className="mt-20 text-white py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24  max-lg:space-y-12">
        <div className="col-span-7 px-[10%] flex flex-col lg:justify-center lg:items-start text-smaller md:text-small font-semibold text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge  drop-shadow-2xl">
            Ready to Move Luxury Apartment
          </p>
          <br />
          <p>
            Introducing Studios, 1,2, and 3-bedroom apartments with panoramic
            views of the famous Dubai skyline and surrounding areas.it is
            located in Jumeirah Lakes Towers.
          </p>
          <br />
          <p>
            Modern Smart Living is Redefined. This project is Equipped with
            pandemic-ready touch-less automated doors, touchless elevators
            Touchless access to amenities, and use of common area toilets.
            Hassle-free secure entry through 3D face recognition technology, or
            via a mobile phone.
          </p>
          <br />
          <p>
            Entertain yourself with the ultimate golfing experience with our
            world-class golf simulator.
          </p>
          <br />
          <p>
            Residents can wake up to the serene views of the water every
            morning. With a flexible post-handover payment plan option
            available, owning your dream home.
          </p>
        </div>
        <div className="col-span-5 flex justify-center items-center relative">
          <div className="absolute top-0 left-0 w-0 h-0 bg-transparent border-solid border-t-[150px] border-r-[150px] border-l-transparent border-r-transparent border-t-primary z-10" />
          <img
            src={image}
            alt="About us"
            className="object-cover w-full lg:h-full h-[400px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsT2;

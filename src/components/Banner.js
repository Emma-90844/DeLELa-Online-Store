import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-tranparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        {/* add in the divs for the images */}
       

        <div>
          <img loading="lazy" className="rounded-3xl" src="https://links.papareact.com/6ff" alt="" />
        </div>

        <div>
          <img loading="lazy" className="rounded-3xl" src="https://links.papareact.com/7ma" />
        </div>
        <div>
          <img loading="lazy" className="rounded-3xl" src="https://links.papareact.com/gi1" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

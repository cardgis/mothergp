import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-delivery-retail-truck-association-logo-symbol-png-image_3570987.jpg"
            alt="bannera"
          />
        </div>
        <div>
          <img loading="lazy" src="" alt="" />
        </div>
        <div>
          <img loading="lazy" src="" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

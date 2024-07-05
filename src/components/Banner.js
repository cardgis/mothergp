import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Image from "next/image";

function Banner() {
  return (
    <div className="relative ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            // src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-delivery-retail-truck-association-logo-symbol-png-image_3570987.jpg"
            // alt="bannera"
          />
        </div>
        <div>
          <img loading="lazy" src="/scroll1.png" alt="bannera1" />
        </div>
        <div>
          <img loading="lazy" src="/scroll2.png" alt="bannera2" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

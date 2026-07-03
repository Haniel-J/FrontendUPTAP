import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { carouselData } from "./carousel.data";

export default function HeroCarousel() {
  return (
    <section className="w-full bg-white">


        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
  
          }}
        >

          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt="Carousel"
                className="
                w-full
                h-[50vh]
                md:h-[70vh]
                lg:h-[65vh]
                object-right
                scale-100
                transition-transform
                duration-8000ms
                "
                />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

    </section>
  );
}
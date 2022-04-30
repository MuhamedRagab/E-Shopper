// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import vendor1 from "../../assets/img/vendor-1.jpg";
import vendor2 from "../../assets/img/vendor-2.jpg";
import vendor3 from "../../assets/img/vendor-3.jpg";
import vendor4 from "../../assets/img/vendor-4.jpg";
import vendor5 from "../../assets/img/vendor-5.jpg";
import vendor6 from "../../assets/img/vendor-6.jpg";
import vendor7 from "../../assets/img/vendor-7.jpg";
import vendor8 from "../../assets/img/vendor-8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./vendor-swiper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function VendorSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img src={vendor1} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor2} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor3} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor4} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor5} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor6} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor7} alt="vendor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vendor8} alt="vendor" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

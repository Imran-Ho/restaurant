import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/pictures/slide1.jpg";
import slide2 from "../../assets/pictures/slide2.jpg";
import slide3 from "../../assets/pictures/slide3.jpg";
import slide4 from "../../assets/pictures/slide4.jpg";
import slide5 from "../../assets/pictures/slide5.jpg";

const Categories = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="mb-10">
        <img src={slide1} alt="" />
        <h2 className="text-3xl uppercase text-center -mt-16 text-white">
          Salad
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className="text-3xl uppercase text-center -mt-16 text-white">
          Pizza
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className="text-3xl uppercase text-center -mt-16 text-white">
          Soup
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className="text-3xl uppercase text-center -mt-16 text-white">
          dessert
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h2 className="text-3xl uppercase text-center -mt-16 text-white">
          Salad
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/pictures/slide1.jpg";
import slide2 from "../../assets/pictures/slide2.jpg";
import slide3 from "../../assets/pictures/slide3.jpg";
import slide4 from "../../assets/pictures/slide4.jpg";
import slide5 from "../../assets/pictures/slide5.jpg";
import SectionTitles from "../../components/SectionTitles/SectionTitles";

const Categories = () => {
  return (
    <section>
      <SectionTitles
        subHeading={"From 11am to 10pm."}
        heading={"Order Online"}
      ></SectionTitles>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="lg:text-3xl uppercase text-center -mt-28 text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="lg:text-3xl uppercase text-center -mt-28 text-white">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="lg:text-3xl uppercase text-center -mt-28 text-white">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="lg:text-3xl uppercase text-center -mt-28 text-white">
            dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="lg:text-3xl uppercase text-center -mt-28 text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;

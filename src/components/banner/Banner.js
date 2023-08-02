import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { NavLink } from "react-router-dom";
import { fetcher } from "config/config";
import useSWR from "swr";
const Banner = () => {
  const { data } = useSWR(
    `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`,
    fetcher
  );
  const movies = data?.items || [];
  return (
    <div className="container h-[650px] relative banner md:max-lg:max-w-[90%] md:max-lg:h-[400px] max-[767px]:max-w-[90%] max-[767px]:h-[300px]">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        navigation
        grabCursor={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        
        {movies.length > 0 &&
          movies.slice(0, 5).map((item) => (
          <SwiperSlide key={item._id}>
            <img
              src={`https://img.ophim8.cc/uploads/movies/${item.thumb_url}`}
              alt="banner"
              className="w-full h-full object-cover object-top"
            />
            <h1 className="text-white font-semibold absolute bottom-[100px] left-4 text-3xl max-[650px]:text-xl max-[650px]:bottom-20">
              {item.name}
            </h1>
            <button className="px-4 py-2 bg-primary font-bold text-white absolute bottom-10 left-4 max-[650px]:mt-3">
              <NavLink to={`/xem-phim/${item.slug}`}>Xem ngay</NavLink>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

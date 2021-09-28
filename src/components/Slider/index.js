import { memo } from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay]);

const Slider = ({ bannerList }) => {
  return bannerList.length ? <p></p> : null;
};

export default memo(Slider);

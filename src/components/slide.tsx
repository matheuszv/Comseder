
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';

  
export function Carousel(){
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide><img src="./assets/image.png" alt="asdasd" /></SwiperSlide>
        <SwiperSlide><img src="./assets/slide2.jpg" alt="sadsad" /></SwiperSlide>
      </Swiper>
    )
}
  
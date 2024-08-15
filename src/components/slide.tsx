
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/navigation'

  
export function Carousel(){
    return (
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><img src="./assets/image.png" alt="asdasd" /></SwiperSlide>
        <SwiperSlide><img src="./assets/slide2.jpg" alt="sadsad" /></SwiperSlide>
      </Swiper>
    )
}
  
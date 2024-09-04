import { Cards } from "../../components/cards"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function Carousel() {

    return (
      <div>
        <Swiper className="!flex !cursor-grab"
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
            <div className="!px-20">
                <SwiperSlide><Cards img="blabla.png">ANTIGO</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">EXECUTIVO I</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">EXECUTIVO II</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">ESPECIAL I</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">ESPECIAL II</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">REFERENCIA I</Cards></SwiperSlide>
                <SwiperSlide><Cards img="blabla.png">REFERENCIA II</Cards></SwiperSlide>
            </div>
        </Swiper>
      </div>
    );
  }
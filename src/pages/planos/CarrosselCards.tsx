import { Cards } from "../../components/cards"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function Carousel() {

    return (
      <div>
        <Swiper className="!flex !cursor-grab !rounded-xl !h-60"
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
                <SwiperSlide>
                    <Cards img="assets/icone-antigo.png">ANTIGO</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-executivo.png">EXECUTIVO I</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-executivo-I.png">EXECUTIVO II</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-estrela-cadente.png">ESPECIAL I</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-estrela.png">ESPECIAL II</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-distintivo.png">REFERENCIA I</Cards>
                </SwiperSlide>
                <SwiperSlide>
                    <Cards img="assets/icone-distintivo-I.png">REFERENCIA II</Cards>
                </SwiperSlide>
        </Swiper>
      </div>
    );
  }
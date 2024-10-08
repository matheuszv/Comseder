import { Cards } from "../../components/cards"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

interface Carousel{
  handleModal: () => void;
}

export function Carousel({handleModal}:Carousel) {
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
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-antigo.png">ANTIGO</Cards>
                </SwiperSlide >
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-executivo.png">EXECUTIVO I</Cards>
                </SwiperSlide >
                <SwiperSlide onClick={handleModal}>
                    <Cards  img="assets/icone-executivo-I.png">EXECUTIVO II</Cards>
                </SwiperSlide>
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-estrela-cadente.png">ESPECIAL I</Cards>
                </SwiperSlide>
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-estrela.png">ESPECIAL II</Cards>
                </SwiperSlide>
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-distintivo.png">REFERÊNCIA I</Cards>
                </SwiperSlide>
                <SwiperSlide onClick={handleModal}>
                    <Cards img="assets/icone-distintivo-I.png">REFERÊNCIA II</Cards>
                </SwiperSlide>
        </Swiper>
      </div>
    );
  }
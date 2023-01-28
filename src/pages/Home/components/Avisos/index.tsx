import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { pagination } from '../Swiper/swiper';
import '../Swiper/style.css';

export default function Avisos() {
  return (
    <section className="w-full mt-1 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="flex px-2 pb-7 "
        pagination={pagination}
        loop={true}
        spaceBetween={5}
        autoplay={{ delay: 3500, disableOnInteraction: false, waitForTransition: true }}
        speed={600}
        slidesPerView={1.075}
      >
        <SwiperSlide className="flex justify-center px-2 ">
          <img
            src="/images/painel-infos.png"
            alt="Painel de informação"
            className=" rounded-2xl w-full h-sull object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center px-2 ">
          <img
            src="/images/painel-infos.png"
            alt="Painel de informação"
            className=" rounded-2xl  w-full h-sull object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

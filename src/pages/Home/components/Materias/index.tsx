import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { pagination } from '../Swiper/swiper';
import '../Swiper/style.css';

export default function Materias() {
  return (
    <section className="bg-verde-insted-icon flex flex-col w-[calc(100vw-24px)] rounded-2xl m-2 shadow-md">
      <div className="ml-4 my-1">
        <h1 className="text-2xl text-verde-insted-texto font-bold">Matérias</h1>
      </div>
      <Swiper
        className="flex m-2 pt-2 pb-7 rounded-2xl bg-cor-de-fundo"
        modules={[Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        pagination={pagination}
        navigation={true}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide className="flex flex-row justify-start items-center px-6">
          <img src="./images\education.png " alt="Chapéu de formatura" className="w-1/5" />
          <p className="w-fit text-verde-texto m-auto ">Matemática aplicada</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-start text-center items-center px-6">
          <img src="./images\education.png " alt="Chapéu de formatura" className="w-1/5" />
          <p className="w-fit text-verde-texto m-auto">Algebra linear</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-start text-center items-center px-6">
          <img src="./images\education.png " alt="Chapéu de formatura" className="w-1/5" />
          <p className="w-fit text-verde-texto m-auto">Programação Orientada à objetos</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

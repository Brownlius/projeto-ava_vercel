import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { pagination } from '../Swiper/swiper';
import '../Swiper/style.css';

export default function Atividades() {
  return (
    <section className="bg-verde-insted-icon  w-[calc(100vw-24px)] my-2 h-5/12 flex flex-col rounded-2xl shadow-md ">
      <div className="ml-4 my-1">
        <h1 className="text-2xl font-semibold text-verde-texto ">Atividades</h1>
      </div>
      <Swiper
        className="flex m-0 pt-2 pb-6 px-2"
        direction={'horizontal'}
        modules={[Navigation, Pagination]}
        slidesPerView={1.075}
        spaceBetween={15}
        pagination={pagination}
        effect={'cards'}
      >
        <SwiperSlide className="bg-cor-de-fundo rounded-2xl flex flex-col h-fit">
          <div className="bg-verde-insted  -icon flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
            <h4 className="font-bold text-cor-de-fundo">Quinta-Feira, 18/08</h4>
            <p className="font-bold text-cor-de-fundo">23:59</p>
          </div>
          <div className="flex flex-row justify-center items-center p-2 ">
            <div className="text-center">
              <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
              <p className=" text-verde-texto">Programação Orientada à objetos</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-cor-de-fundo rounded-2xl flex flex-col h-fit">
          <div className="bg-verde-insted  -icon flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
            <h4 className="font-bold text-cor-de-fundo">Quinta-Feira, 18/08</h4>
            <p className="font-bold text-cor-de-fundo">23:59</p>
          </div>
          <div className="flex flex-row justify-center items-center p-2 ">
            <div className="text-center">
              <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
              <p className=" text-verde-texto">Programação Orientada à objetos</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { pagination } from './components/Swiper/swiper';
import './components/Swiper/style.css';
import Icons from './components/Icons';

const Home = () => {
  return (
    <>
      <main className="flex flex-col pt-2 pb-20 justify-start items-center h-screen w-screen overflow-y-auto bg-cor-de-fundo dark:bg-dark-cor-de-fundo">
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
                src="/images/painel-infos.jpg"
                alt="Painel de informação"
                className=" rounded-2xl w-full h-sull object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center px-2 ">
              <img
                src="/images/painel-infos.jpg"
                alt="Painel de informação"
                className=" rounded-2xl  w-full h-sull object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <Icons />

        <section className="bg-verde-insted-icon dark:bg-dark-verde-insted flex flex-col w-[calc(100vw-24px)] rounded-2xl m-2 shadow-md">
          <div className="ml-4 my-1">
            <h1 className="text-2xl text-verde-insted-texto dark:text-dark-verde-texto font-bold">
              Matérias
            </h1>
          </div>
          <Swiper
            className="flex m-2 pt-2 pb-7 rounded-2xl bg-white"
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
        <section className="bg-verde-insted-icon dark:bg-dark-verde-insted w-[calc(100vw-24px)] my-2 h-5/12 flex flex-col rounded-2xl shadow-md ">
          <div className="ml-4 my-1">
            <h1 className="text-2xl font-semibold text-verde-texto  dark:text-dark-verde-texto">
              Atividades
            </h1>
          </div>
          <Swiper
            className="flex m-0 pt-2 pb-6 px-2 "
            direction={'horizontal'}
            modules={[Navigation, Pagination]}
            slidesPerView={1.075}
            spaceBetween={15}
            pagination={pagination}
            effect={'cards'}
          >
            <SwiperSlide className="bg-white rounded-2xl flex flex-col h-fit">
              <div className="bg-verde-insted  dark:bg-dark-verde-insted-icon flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
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
            <SwiperSlide className="bg-white rounded-2xl flex flex-col h-fit">
              <div className="bg-verde-insted  dark:bg-dark-verde-insted-icon flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
                <h4 className="font-bold text-white">Quinta-Feira, 18/08</h4>
                <p className="font-bold text-white">23:59</p>
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
      </main>
    </>
  );
};

export default Home;

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { currentDay, daysOfWeek } from './components/daysOfWeek';
import SubjectPost from './components/subjectPost';

const Home = () => {
  return (
    <>
      <main className="flex flex-col pt-4 pb-16 justify-start items-center h-screen max-w-screen overflow-auto">
        <section className="flex my-2 w-full ">
          <nav className="flex overflow-auto">
            <ul className="flex  ">
              <li className="flex px-2 w-[calc(100vw-18px)]">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl "
                />
              </li>
              <li className=" flex px-2 w-[calc(100vw-18px)]">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>
        <nav className="grid grid-rows-2  my-2 w-[100vw] ">
          <ul className="grid grid-cols-4">
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\clock.png" className="p-2" />
              </div>
              <div className="  row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">Horário</h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\grade.png" className="p-2" />
              </div>
              <div className=" row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">Notas</h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\calendar.png" className="p-2" />
              </div>
              <div className=" row-span-1  col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">
                  Calendário
                </h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\notification.png" className="p-2" />
              </div>
              <div className=" row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold h-3/12 text-verde-texto ">
                  Avisos
                </h3>
              </div>
            </li>
          </ul>
          <ul className="grid grid-cols-4">
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\clock.png" className="p-2" />
              </div>
              <div className="  row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">Horário</h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\grade.png" className="p-2" />
              </div>
              <div className=" row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">Notas</h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\calendar.png" className="p-2" />
              </div>
              <div className=" row-span-1  col-span-6">
                <h3 className=" text-center text-sm font-semibold  text-verde-texto ">
                  Calendário
                </h3>
              </div>
            </li>
            <li className="grid grid-rows-3 grid-cols-5 m-2">
              <div className="row-span-2 col-span-6 bg-verde-insted-icon rounded-2xl">
                <img src="./images\notification.png" className="p-2" />
              </div>
              <div className=" row-span-1 col-span-6">
                <h3 className=" text-center text-sm font-semibold h-3/12 text-verde-texto ">
                  Avisos
                </h3>
              </div>
            </li>
          </ul>
        </nav>

        <section className="bg-verde-insted flex flex-col w-[calc(100vw-18px)] rounded-2xl m-2">
          <div className="ml-4 my-1">
            <h1 className="text-2xl text-white font-semibold">Matérias</h1>
          </div>
          <nav className="flex mb-3 overflow-auto">
            <ul className="flex ml-2">
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3 text-verde-texto">Programação Orientada à objetos</p>
              </li>
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3 text-verde-texto">Redes de computadores</p>
              </li>
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3">Projeto Integrador II</p>
              </li>
            </ul>
          </nav>
        </section>
        <div className="bg-verde-insted-icon w-[calc(100vw-18px)] my-2 h-auto flex flex-col rounded-2xl">
          <div className="ml-4 my-1">
            <h1 className="text-2xl text-verde-texto font-semibold">Atividades</h1>
          </div>
          <section className="overflow-auto">
            <nav className="flex mb-3 overflow-auto">
              <ul className=" flex ml-2 ">
                <li className="bg-white rounded-2xl flex flex-col mx-2 m-1 h-fit w-[calc(100vw-75px)]">
                  <div className="bg-verde-insted flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
                    <h4 className="font-bold text-white">Quinta-Feira, 18/08</h4>
                    <p className="font-bold text-white">23:59</p>
                  </div>
                  <div className="flex flex-row justify-center items-center p-2 ">
                    <div className="text-center">
                      <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
                      <p className=" text-verde-texto">Programação Orientada à objetos</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-2xl flex flex-col mx-2 m-1 h-fit w-[calc(100vw-75px)]">
                  <div className="bg-verde-insted flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
                    <h4 className="font-bold text-white">Quinta-Feira, 18/08</h4>
                    <p className="font-bold text-white">23:59</p>
                  </div>
                  <div className="flex flex-row justify-center items-center p-2 ">
                    <div className="text-center">
                      <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
                      <p className=" text-verde-texto">Programação Orientada à objetos</p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

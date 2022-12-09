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
        <section className=" grid grid-cols-4	my-2 w-[calc(100vw-18px)] h-[10vh] items-center">
          <div className="flex flex-col text-center mx-2">
            <div className=" flex justify-center h-[6vh] py-2 bg-verde-insted-icon rounded-2xl">
              <img src="./images\clock.png" className="w-1/2 " />
            </div>
            <h3 className="">Horário</h3>
          </div>
          <div className="flex flex-col text-center mx-2">
            <div className=" flex justify-center h-[6vh] py-2 bg-verde-insted-icon rounded-2xl">
              <img src="./images\grade.png" className="w-1/2 " />
            </div>
            <h3 className="">Notas</h3>
          </div>
          <div className="flex flex-col text-center mx-2">
            <div className=" flex justify-center h-[6vh] py-2 bg-verde-insted-icon rounded-2xl">
              <img src="./images\calendar.png" className="w-1/2 " />
            </div>
            <h3 className="">Calendário</h3>
          </div>
          <div className="flex flex-col text-center mx-2">
            <div className=" flex justify-center h-[6vh] py-2 bg-verde-insted-icon rounded-2xl">
              <img src="./images\notification.png" className="w-1/2" />
            </div>
            <h3 className="">Avisos</h3>
          </div>
        </section>

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
                <p className="w-2/3">Programação Orientada à objetos</p>
              </li>
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3">Redes de computadores</p>
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
        <div className="bg-verde-insted w-[calc(100vw-18px)] h-[25vh] flex flex-col rounded-2xl">
          <div className="ml-4 my-1">
            <h1 className="text-2xl text-white font-semibold">Atividades</h1>
          </div>
          <section className="overflow-auto px-1">
            <nav className="flex mb-3 overflow-auto">
              <ul className=" flex ml-2 ">
                <li className="bg-white flex flex-row mx-2 m-1 rounded-2xl  w-[calc(100vw-75px)]">
                  <div className="bg-verde-insted-icon text-center rounded-2xl flex font-semibold flex-col justify-center items-center p-3 ">
                    <h4>Quinta-Feira, 18/08</h4>
                    <p>23:59</p>
                    <button className="items-center bg-orange-300 font-semibold w-3/6 m-2 rounded-full p-2">
                      Enviar
                    </button>
                  </div>
                  <div className=" flex flex-col items-center p-1 text-center ">
                    <h4 className="font-semibold">Exercício de compreensão</h4>
                    <p>Programação Orientada à objetos</p>
                  </div>
                </li>
                <li className="bg-white rounded-2xl flex flex-col mx-1 my-2 w-[calc(100vw-75px)]">
                  <div className="bg-orange-300 flex rounded-2xl  font-semibold flex-row justify-between  p-3 ">
                    <h4>Quinta-Feira, 18/08</h4>
                    <p>23:59</p>
                  </div>
                  <div className="flex flex-col items-center p-1">
                    <h4 className="font-semibold">Exercício de compreensão</h4>
                    <p>Programação Orientada à objetos</p>
                    <button className="bg-orange-300 font-semibold  w-3/6 m-2 rounded-full p-2">
                      Enviar
                    </button>
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

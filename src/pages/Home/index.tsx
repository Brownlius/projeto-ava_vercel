import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { currentDay, daysOfWeek } from './components/daysOfWeek';
import SubjectPost from './components/subjectPost';

const Home = () => {
  return (
    <>
      <Header />

      <main className="flex flex-wrap justify-center items-center mt-16 pt-4 pb-16 px-1 h-screen overflow-auto">
        <section className="flex w-full h-[210px]   ">
          <nav className=" flex overflow-scroll ">
            <ul className="flex  ">
              <li className="flex justify-center items-center w-11/12 h-auto">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl "
                />
              </li>
              <li className="flex justify-center items-center w-11/12 h-auto ">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>
        <div className="bg-verde-insted w-full h-1/6 flex flex-col rounded-2xl mt-4 p-1">
          <div className="flex justify-between">
            <h1 className="text-xl text-white mx-3 my-1">Horários</h1>
            <h2 className="mx-3 my-1 text-white font-semibold">{daysOfWeek[currentDay]}</h2>
          </div>
          <section className="overflow-auto">
            <nav>
              <ul className="w-full">
                <SubjectPost
                  hour="19:00"
                  subject="Projeto Integrador II"
                  teacher="Ana Cláudia Pedro Ândreo"
                />
                <SubjectPost
                  hour="19:50"
                  subject="Projeto Integrador II"
                  teacher="Ana Cláudia Pedro Ândreo"
                />
                <div className="bg-white w-full h-1/4 flex-wrap rounded-md mx-1 grid grid-cols-3 my-1">
                  <div className="justify-center items-center flex col-span-1">
                    <img src="/images/relogio-icon-laranja.png" alt="" className="w-5 h-7 pt-2" />
                    <h1 className="pt-2 pl-1.5"> - 20:40</h1>
                  </div>
                  <div className="pl-2 border-l-2 my-2 border-slate-600 justify-center flex items-center col-span-2">
                    <div className="text-2xl">Intervalo</div>
                  </div>
                </div>
                <SubjectPost
                  hour="21:00"
                  subject="Projeto Integrador II"
                  teacher="Ana Cláudia Pedro Ândreo"
                />
              </ul>
            </nav>
          </section>
        </div>
        <div className="bg-verde-insted flex flex-col w-full rounded-2xl mt-4 ">
          <div>
            <h1 className="text-xl text-white ml-3 my-1">Matérias</h1>
          </div>
          <section className="flex px-1 ">
            <nav className="flex overflow-auto">
              <ul className="flex ">
                <li className="flex flex-col text-center mx-1 my-2 rounded-md items-center bg-white w-56">
                  <div className="bg-orange-300 flex flex-col items-center rounded-md w-full">
                    <img src="./images\materia.png " alt="..." className="w-16 m-1" />
                    <h4 className="p-1 font-semibold">TADS 2022-2</h4>
                  </div>
                  <p>Programação Orientada à objetos</p>
                </li>
                <li className="flex flex-col text-center mx-1 my-2 rounded-md items-center bg-white w-56">
                  <div className="bg-orange-300 flex flex-col items-center rounded-md w-full">
                    <img src="./images\materia.png " alt="..." className="w-16 m-1" />
                    <h4 className="p-1 font-semibold">TADS 2022-2</h4>
                  </div>
                  <p>Programação Orientada à objetos</p>
                </li>
                <li className="flex flex-col text-center mx-1 my-2 rounded-md items-center bg-white w-56">
                  <div className="bg-orange-300 flex flex-col items-center rounded-md w-full">
                    <img src="./images\materia.png " alt="..." className="w-16 m-1" />
                    <h4 className="p-1 font-semibold">TADS 2022-2</h4>
                  </div>
                  <p>Programação Orientada à objetos</p>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="bg-verde-insted w-full h-2/6 flex flex-col rounded-2xl mt-4 ">
          <div>
            <h1 className="text-xl text-white ml-3 my-1">Atividades</h1>
          </div>
          <section className="overflow-auto px-1">
            <nav>
              <ul className=" w-full">
                <li className="bg-white rounded-md flex flex-col mx-1 my-2 ">
                  <div className="bg-orange-300 rounded-md flex font-semibold flex-row justify-between  p-3 ">
                    <h4>Quinta-Feira, 18/08</h4>
                    <p>23:59</p>
                  </div>
                  <div className=" flex flex-col items-center p-1">
                    <h4 className="font-semibold">Exercício de compreensão</h4>
                    <p>Programação Orientada à objetos</p>
                    <button className="bg-orange-300 font-semibold w-3/6 m-2 rounded-full p-2">
                      Enviar
                    </button>
                  </div>
                </li>
                <li className="bg-white rounded-md flex flex-col mx-1 my-2">
                  <div className="bg-orange-300 flex rounded-md  font-semibold flex-row justify-between  p-3 ">
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

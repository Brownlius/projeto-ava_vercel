import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SubjectPost from './components/subjectPost';

const Home = () => {
  return (
    <>
      <Header />

      <main className="flex flex-wrap justify-center items-center mt-16 pt-4 pb-16 h-screen overflow-auto">
        <div className="bg-verde-insted w-screen mx-2 h-auto flex-wrap rounded-md">
          <div>
            <h1 className="text-xl text-white ml-3 my-1">Avisos</h1>
          </div>
          <img
            src="/images/painel-infos.jpg"
            alt="Painel de informação"
            className="w-full h-auto pb-4 px-1"
          />
        </div>

        <div className="bg-verde-insted w-screen mx-2 h-1/6 flex flex-col rounded-md mt-4">
          <div>
            <h1 className="text-xl text-white ml-3 my-1">Horários</h1>
          </div>
          <section className=" flex overflow-auto">
            <nav>
              <ul className="flex flex-wrap">
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
                <div className="bg-white w-full h-1/4 flex-wrap rounded-sm mx-1 grid grid-cols-3 my-1">
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
        <div className="bg-verde-insted w-screen mx-2 h-1/3 flex-wrap rounded-md mt-4"></div>
        <div className="bg-verde-insted w-screen mx-2 h-1/3 flex-wrap rounded-md mt-4"></div>
        <div className="bg-verde-insted w-screen mx-2 h-1/3 flex-wrap rounded-md mt-4"></div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

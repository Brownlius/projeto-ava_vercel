import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="container flex flex-wrap justify-center mt-24 h-screen">
        <div className="bg-verde-insted w-full h-auto flex-wrap rounded-sm mx-2 my-3">
          <h1 className="text-xl text-white ml-3 my-1">Avisos</h1>
          <img
            src="/images/painel-infos.jpg"
            alt="Painel de informação"
            className="w-full h-auto pb-4 px-1"
          />
        </div>
        <div className="container bg-verde-insted w-full mx-2 h-1/3 flex-wrap rounded-sm">
          <h1 className="text-xl text-white ml-3 my-1">Horários</h1>
          <div className="container flex flex-wrap justify-center">
            <div className="bg-white w-full mx-1 p-1 rounded-md">
              <div className="">
                <img src="/images/relogio-icon-laranja.png" alt="Relógio" className="w-6 h-6" />
                <h1> - 19:00</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-verde-insted w-11/12 h-1/3 flex-wrap rounded-md mt-4"></div>
        <div className="bg-verde-insted w-11/12 h-1/3 flex-wrap rounded-md mt-4"></div>
        <div className="bg-verde-insted w-11/12 h-1/3 flex-wrap rounded-md mt-4"></div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

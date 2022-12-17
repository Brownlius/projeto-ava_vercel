import Button from '../../components/Button/button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Profile = () => {
  return (
    <>
      <main className="flex flex-col pt-2 pb-20 justify-start items-center h-screen max-w-screen overflow-auto">
        <section className="my-2 bg-verde-insted-icon w-[calc(100vw-18px)]  rounded-2xl">
          <div className="pl-4 py-1 rounded-2xl">
            <h1 className="text-2xl font-bold ">Perfil</h1>
          </div>
          <div className=" flex flex-row items-center">
            <div className="flex w-3/6 p-2">
              <img src="/images/perfil-padrao.png" className="" />
            </div>
            <div className=" flex flex-col ">
              <div className="bg-white text-sm text-center text-verde-texto font-semibold p-2 mr-2 rounded-2xl w-1/2">
                RA - 1010001580
              </div>
              <h2 className=" text-2xl font-bold	">Pedro Henrique Souza de Almeida</h2>
            </div>
          </div>

          <div className="flex justify-center text-centerrounded-2xl items-center p-2 ">
            <img src="/images/mapa.png " className="w-7 px-1" />
            <p className="text-md">Campo Grande, MS</p>
          </div>
        </section>

        <section className="   w-[calc(100vw-18px)] rounded-2xl my-2 bg-verde-insted-icon">
          <div className="pl-4 py-1   rounded-2xl">
            <h1 className="text-2xl  font-bold text-verde-texto ">Curso</h1>
          </div>
          <div className="flex flex-col p-2 text-md rounded-2xl leading-7 py-3 w-full justify-center text-center">
            <div>
              <h3 className="text-xl font-semibold">
                Tec. em Análise e Desenvolvimento de Sistemas
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-around text-center ">
            <div className="bg-white text-verde-texto font-semibold  p-2 rounded-2xl m-2 w-1/3">
              2º Semestre
            </div>
            <div className="bg-white text-verde-texto font-semibold p-2 rounded-2xl m-2 w-1/3">
              2/2022
            </div>
            <div className="bg-white text-verde-texto font-semibold p-2 rounded-2xl m-2 w-1/3">
              Cursando
            </div>
          </div>
        </section>
        <section className=" bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl">
          <div className="pl-4 py-1 rounded-2xl">
            <h1 className="text-2xl  font-bold text-white ">Informações pessoais</h1>
          </div>
          <div>
            <img src="" />
          </div>
        </section>
        <section className="my-2 w-[calc(100vw-18px)] bg-verde-insted-icon rounded-2xl">
          <div className="mb-1 mt-1">
            <a href="/edit-profile">
              <Button
                className="bg-white font-semibold shadow-md text-verde-insted text-md px-2 rounded-3xl h-9 w-11/12 m-2"
                label="Editar senha"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <Button
                className="bg-white font-semibold shadow-md text-red-500 text-md px-2 rounded-3xl h-9 w-11/12 m-2"
                label="Desconectar"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Profile;

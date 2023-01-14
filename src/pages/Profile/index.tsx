import Footer from '../../components/Footer';

const Profile = () => {
  return (
    <>
      <main
        className="flex flex-col pt-2 pb-20 justify-start items-start h-screen max-w-screen overflow-auto
      bg-gradient-to-b from-verde-insted via-verde-insted-icon to-cor-de-fundo"
      >
        <a href="/home">
          <section className="flex flex-nowrap items-center mx-4">
            <img src="/images/seta.png" className="w-3 mr-2 rotate-180" alt="Seta de voltar" />
            <h1 className="text-xl font-bold text-cor-de-fundo ">Perfil</h1>
          </section>
        </a>
        <section className="flex flex-col justify-start items-center mx-auto">
          <section className="my-2 bg-cor-de-fundo w-[calc(100vw-18px)] py-2 rounded-2xl shadow-md">
            <div className=" flex flex-row justify-center ">
              <div className="relative aspect-square  w-6/12 px-2 mx-2 ">
                <img
                  src="/images/perfil-padrao1.png"
                  className="rounded-full  aspect-square object-cover shadow-md"
                />
                <img src="/images/botao-editar.png" className="absolute w-4/12 bottom-0 left-0" />
              </div>
              <div className=" flex flex-col justify-center">
                <div className="bg-verde-insted-icon text-sm text-center text-verde-texto p-2 rounded-2xl w-fit shadow-sm">
                  <p className="font-md">RA - 1010001580</p>
                </div>
                <h2 className=" text-2xl font-bold	pr-2">Pedro Henrique Souza de Almeida</h2>
              </div>
            </div>

            <div className="flex justify-center text-centerrounded-2xl items-center">
              <img src="/images/mapa.png " className="w-7 px-1" />
              <p className="text-md">Campo Grande, MS</p>
            </div>
          </section>

          <section className="w-[calc(100vw-18px)] rounded-2xl my-2 bg-cor-de-fundo shadow-md">
            <div className="px-2 py-1">
              <h1 className="text-2xl  font-bold text-verde-texto ">Curso</h1>
            </div>
            <div className="flex flex-col p-4 text-md rounded-2xl leading-7 py-2 w-full justify-center ">
              <div>
                <h3 className="text-xl px-1 font-semibold">
                  Tec. em Análise e Desenvolvimento de Sistemas
                </h3>
              </div>
            </div>
            <div className="flex flex-row mx-2 justify-around text-center gap-1 ">
              <div className="flex justify-center items-center shadow-sm text-verde-texto  p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
                2º Semestre
              </div>
              <div className="flex justify-center items-center shadow-sm text-verde-texto p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
                2/2022
              </div>
              <div className="flex justify-center items-center shadow-sm text-verde-texto p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
                Cursando
              </div>
            </div>
          </section>
          <section className=" bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md">
            <div className="px-2 py-1">
              <h1 className="text-2xl  font-bold text-white ">Informações pessoais</h1>
            </div>
            <div className="flex justify-center">
              <img src="/images/seta-baixo.png" className="w-10 p-2 " />
            </div>
          </section>
          <section className=" bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md">
            <div className="px-2 py-1">
              <h1
                className="text-2xl  font-bold text-white
             "
              >
                Alterar senha
              </h1>
            </div>
            <div className="flex justify-center">
              <img src="/images/seta-baixo.png" className="w-10 p-2 " />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;

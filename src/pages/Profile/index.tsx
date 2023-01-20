import { useState } from 'react';
import Footer from '../../components/Footer';

const Profile = () => {
  const [isToogle, setToogle] = useState(true);
  return (
    <main
      className="flex flex-col pt-2 pb-20 justify-start items-start h-screen max-w-screen overflow-auto
      bg-gradient-to-b from-verde-insted via-cor-de-fundo to-cor-de-fundo"
    >
      <a href="/home">
        <section className="flex flex-nowrap items-center mx-4">
          <img src="/images/seta.png" className="w-3 mr-2 rotate-180" alt="Seta de voltar" />
          <h1 className="text-xl font-bold text-cor-de-fundo ">Perfil</h1>
        </section>
      </a>
      <section className="flex flex-col justify-start items-center mx-auto">
        <section className="my-2 bg-cor-de-fundo w-[calc(100vw-18px)] py-2 rounded-2xl shadow-md">
          <div className=" flex justify-center flex-row ">
            <div className="relative aspect-square  w-4/12 m-2 ">
              <img
                src="/images/perfil-padrao1.png"
                className="rounded-full aspect-square object-cover shadow-md"
              />
              <img src="/images/botao-editar.png" className="absolute w-4/12 bottom-0 left-0" />
            </div>
            <div className=" flex flex-col justify-center">
              <div className="bg-verde-insted-icon text-sm text-center text-verde-texto p-2 rounded-2xl w-fit shadow-sm">
                <p className="font-md font-semibold">RA - 1010001580</p>
              </div>
              <h3 className=" text-2xl">Pedro Almeida</h3>
            </div>
          </div>

          <div className="flex justify-center text-centerrounded-2xl items-center">
            <img src="/images/mapa.png " className="w-7 px-1" />
            <p className="text-md font-semibold">Campo Grande - MS</p>
          </div>
        </section>

        <section className="w-[calc(100vw-18px)] rounded-2xl my-2 bg-cor-de-fundo shadow-md">
          <div className="px-2 py-1">
            <h1 className="text-2xl  font-bold text-verde-texto ">Curso</h1>
          </div>
          <div className="flex flex-col p-4 text-md rounded-2xl leading-7 py-2 w-full justify-center ">
            <div>
              <p className="text-xl px-1">Tec. em Análise e Desenvolvimento de Sistemas</p>
            </div>
          </div>
          <div className="flex flex-row mx-2 justify-around text-center gap-1 ">
            <div className="flex justify-center items-center shadow-sm font-semibold text-verde-texto  p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
              2º Semestre
            </div>
            <div className="flex justify-center items-center shadow-sm font-semibold text-verde-texto p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
              2/2022
            </div>
            <div className="flex justify-center items-center shadow-sm font-semibold text-verde-texto p-2 rounded-2xl my-2 w-1/3 bg-verde-insted-icon">
              Cursando
            </div>
          </div>
        </section>
        <section
          className={
            'animate-recolher' + isToogle
              ? 'w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md '
              : 'bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md animate-recolher'
          }
        >
          <div className="px-2 py-1">
            <h1
              className={
                isToogle
                  ? 'text-2xl  font-bold text-verde-texto'
                  : 'text-2xl  font-bold text-cor-de-fundo'
              }
            >
              Informações pessoais
            </h1>
          </div>
          {isToogle && (
            <div className="flex flex-col p-4 text-md rounded-2xl leading-7 py-2 w-full justify-center">
              <p className="text-xl px-1">Pedro Henrique Souza de Almeida</p>
              <p className="text-xl px-1">(67) 9.9322 - 6534</p>
              <p className="text-xl px-1">(67) 9.8939 - 2969</p>
              <p className="text-xl px-1">21/07/2001</p>
              <p className="text-xl px-1">p.almeida@live.com</p>
            </div>
          )}
          <button className="flex w-full justify-center" onClick={() => setToogle(!isToogle)}>
            <img src="/images/seta-baixo.png" className="w-10 p-2 " />
          </button>
        </section>

        <section className=" bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md">
          <div className="px-2 py-1">
            <h1 className="text-2xl  font-bold text-white">Alterar senha</h1>
          </div>
          <div className="flex justify-center">
            <img src="/images/seta-baixo.png" className="w-10 p-2 " />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Profile;

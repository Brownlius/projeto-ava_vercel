import { useState } from 'react';

export default function InfoPessoais() {
  const [isToogle, setToogle] = useState(false);
  return (
    <section
      className={
        isToogle
          ? 'bg-cor-de-fundo w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md animate-abrir '
          : 'bg-verde-insted w-[calc(100vw-18px)] my-2 rounded-2xl shadow-md '
      }
    >
      <div className="px-2 py-1">
        <h1
          className={
            isToogle
              ? 'text-verde-texto text-2xl  font-bold '
              : 'text-cor-de-fundo text-2xl  font-bold '
          }
        >
          Informações pessoais
        </h1>
      </div>
      {isToogle && (
        <div className="flex flex-col p-4 text-md rounded-2xl leading-7 py-2 w-full justify-center animate-aparecer">
          <div className="flex flex-col justify-start">
            <h3 className="text-xl px-1 ">Nome :</h3>
            <p className="flex justify-center items-center font-semibold text-verde-texto p-2 w-full rounded-2xl my-1  bg-verde-insted-icon">
              Pedro Henrique Souza de Almeida
            </p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <h3 className=" text-xl px-1 whitespace-nowrap">Data de nascimento :</h3>
            <p className="flex justify-center items-center font-semibold text-verde-texto p-2 w-full rounded-2xl my-1  bg-verde-insted-icon">
              21/07/01
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className=" text-xl px-1">Telefones :</h3>
            <div className="flex flex-row  justify-around text-center gap-1">
              <div className="flex justify-center items-center font-semibold text-verde-texto p-2 rounded-2xl my-1 w-full bg-verde-insted-icon">
                <p>(67) 9.9235 - 9356</p>
              </div>
              <div className="flex justify-center items-center font-semibold text-verde-texto p-2 rounded-2xl my-1 w-full bg-verde-insted-icon">
                <p>(67) 9.9235 - 9356</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <h3 className=" text-xl px-1 whitespace-nowrap">E-mail :</h3>
            <p className="flex justify-center items-center font-semibold text-verde-texto p-2 w-full rounded-2xl my-1 bg-verde-insted-icon">
              p.almeida@live.com
            </p>
          </div>
        </div>
      )}
      <button onClick={() => setToogle(!isToogle)} className="w-full flex justify-center">
        {isToogle ? (
          <img src="/images/seta-baixo-verde_escuro.png" className="w-10 p-2 " />
        ) : (
          <img src="/images/seta-baixo.png" className="w-10 p-2 " />
        )}
      </button>
    </section>
  );
}

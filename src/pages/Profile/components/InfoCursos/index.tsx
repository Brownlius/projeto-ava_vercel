export default function Cursos() {
  return (
    <section className="w-[calc(100vw-18px)] rounded-2xl my-2 bg-cor-de-fundo shadow-md">
      <div className="px-2 py-1">
        <h1 className="text-2xl  font-bold text-verde-texto ">Curso</h1>
      </div>
      <div className="flex flex-col p-4 text-md rounded-2xl leading-7 py-2 w-full justify-center ">
        <div>
          <h3 className="text-xl px-1">Tec. em Análise e Desenvolvimento de Sistemas</h3>
        </div>
      </div>
      <div className="flex flex-row mx-2 justify-around text-center gap-1 ">
        <div className="flex justify-center items-center font-semibold text-verde-texto  p-2 rounded-2xl my-2 w-full bg-verde-insted-icon">
          2º Semestre
        </div>
        <div className="flex justify-center items-center font-semibold text-verde-texto p-2 rounded-2xl my-2 w-full bg-verde-insted-icon">
          2/2022
        </div>
        <div className="flex justify-center items-center font-semibold text-verde-texto p-2 rounded-2xl my-2 w-full bg-verde-insted-icon">
          Cursando
        </div>
      </div>
    </section>
  );
}

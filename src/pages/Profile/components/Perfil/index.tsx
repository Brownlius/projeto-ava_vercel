export default function Perfil() {
  return (
    <section className="my-2 bg-cor-de-fundo w-[calc(100vw-18px)] py-2 rounded-2xl shadow-md">
      <div className=" flex flex-row justify-center ">
        <div className="relative aspect-square  w-4/12 m-2 ">
          <img
            src="/images/perfil-padrao1.png"
            className="rounded-[50%] aspect-square object-cover "
          />
          <img src="/images/botao-editar.png" className="absolute w-4/12 bottom-0 left-0" />
        </div>
        <div className=" flex flex-col justify-center">
          <div className="bg-verde-insted-icon text-sm text-center text-verde-texto p-2 rounded-2xl w-fit ">
            <p className="font-semibold">RA - 1010001580</p>
          </div>
          <h2 className=" text-2xl font-bold	pr-2">Pedro Almeida</h2>
        </div>
      </div>

      <div className="flex justify-center text-centerrounded-2xl items-center">
        <img src="/images/mapa.png " className="w-7 px-1" />
        <p className="text-md">Campo Grande, MS</p>
      </div>
    </section>
  );
}

import Button from '../../components/Button/button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Profile = () => {
  return (
    <>
      <Header />

      <main className="flex flex-wrap justify-center items-center mt-16 pt-4 pb-16 px-2 overflow-auto">
        <section className="w-full">
          <div className="flex flex-col ">
            <div className="flex justify-center my-2">
              <div className="relative">
                <img src="/images/perfil-padrao.png" className="w-[150px]" />
                <img src="/images/botao_editar.png" className="absolute bottom-0	right-0 w-[40px]" />
              </div>
            </div>
            <div className="bg-verde-insted py-3 rounded-md flex text-white justify-center text-center flex-col line leading-6">
              <h2 className="font-semibold">RA: 1010001580</h2>
              <h2 className="font-semibold text-xl	">Pedro Henrique Souza de Almeida</h2>
              <div className="flex justify-center items-center">
                <img src="/images/mapa.png" className="w-6 p-1" />
                <p>Campo Grande, MS</p>
              </div>
              <div>
                <p>Status: Cursando</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex leading-7 py-3 bg-white rounded-md w-full justify-center text-center mt-4 border border-slate-400">
          <div>
            <h2 className="font-semibold text-2xl">Curso</h2>
            <div>
              <h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
            </div>
            <div>
              <p>2º Semestre - 2/2022</p>
            </div>
          </div>
        </section>
        <section className="bg-verde-insted mt-4 text-white w-full rounded-md pl-2 py-2 text-center">
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

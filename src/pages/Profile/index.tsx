import Button from '../../components/Button/button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Input from '../Login/components/Input';

const Profile = () => {
  return (
    <>
      <Header />

      <main className=" flex flex-wrap justify-center items-center mt-16 pt-4 pb-16 px-2 overflow-auto">
        <section className="w-full">
          <div className="flex flex-col ">
            <div className="flex justify-center my-2">
              <div className="relative">
                <img src="/images/perfil-padrao.png" className="w-[150px]" />
                <img src="/images/botao_editar.png" className="absolute bottom-0	right-0 w-[40px]" />
              </div>
            </div>
            <div className="bg-verde-insted py-3 rounded-md flex justify-center text-center flex-col line leading-6">
              <h2 className="font-semibold">RA: 1010001580</h2>
              <h2 className="font-semibold text-xl	">Pedro Henrique Souza de Almeida</h2>
              <div className="flex justify-center items-center">
                <img src="/images/mapa.png" className="w-[24px] p-1" />
                <p>Campo Grande, MS</p>
              </div>
              <div>
                <p>Status: Cursando</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex leading-7 py-3 bg-white rounded-md w-full justify-center text-center mt-4 ">
          <div>
            <h2 className="font-semibold text-2xl	">Curso</h2>
            <div>
              <h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
            </div>
            <div>
              <p>2º Semestre - 2/2022</p>
            </div>
          </div>
        </section>
        <section className="bg-verde-insted mt-4 w-full rounded-md text-center">
          <div>
            <h2 className="font-semibold text-2xl">Alterar senha</h2>
            <form>
              <div className="w-full my-3 justify-center flex">
                <Input type={'text'} placeholder={'Informe senha atual'} />
              </div>
              <div className="w-full my-3 justify-center flex">
                <Input type={'text'} placeholder={'Informe nova atual'} />
              </div>
              <div>
                <Button
                  className="bg-white font-semibold shadow-md text-verde-insted text-xl rounded-3xl  h-12 w-40 m-2"
                  label="CONFIRMAR"
                />
              </div>
              <div className="text-center my-2">
                <input type="checkbox" className="mx-1" />
                <label className="text-xs text-slate-700 ml-0.5">Sair de todas sessões?</label>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Profile;

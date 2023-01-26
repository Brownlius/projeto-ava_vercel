import EditPassword from './components/editarSenha/editPassword';
import Cursos from './components/InfoCursos';
import InfoPessoais from './components/infoPessoais';
import Perfil from './components/Perfil';

export default function Profile() {
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
      <section className="mx-auto  ">
        <Perfil />
        <Cursos />
        <InfoPessoais />
        <EditPassword />
      </section>
    </main>
  );
}

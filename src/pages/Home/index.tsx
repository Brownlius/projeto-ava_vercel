import './components/Swiper/style.css';
import Icons from './components/Icones';
import Avisos from './components/Avisos';
import './components/Swiper/style.css';
import Materias from './components/Materias';
import Atividades from './components/Atividades';

export default function Home() {
  return (
    <main className="flex flex-col pt-2 pb-20 justify-start items-center h-screen w-screen overflow-y-auto bg-cor-de-fundo ">
      <Avisos />
      <Icons />
      <Materias />
      <Atividades />
    </main>
  );
}

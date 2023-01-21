import { useState } from 'react';
import icons from './icons.json';

export default function Icons() {
  const [lista, setLista] = useState(icons);

  function handleClick(id: number): void {
    switch (id) {
      case 1:
        console.log('HORÁRIO');
        break;
      case 2:
        console.log('NOTAS');
        break;
      case 3:
        break;
      case 4:
        console.log('BIBLIOTECA');
        break;
      case 5:
        console.log('NOTIFICAÇÃO');
        break;
      default:
        console.log('FORA');
    }
  }

  return (
    <nav className="flex">
      <ul className="flex flex-row justify-center flex-wrap gap-x-4 gap-y-1 my-1 mx-2">
        {lista.map((item) => (
          <li
            className="flex flex-col justify-center w-1/5 "
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className=" flex justify-center rounded-2xl h-full shadow-sm bg-verde-insted">
              <img src={item.img} alt={item.label} className="py-1 aspect-video object-contain" />
            </div>
            <div className=" text-center h-1/2">
              <h3 className=" text-sm  text-verde-texto">{item.label}</h3>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { useState } from 'react';
import Button from '../../../../components/Button/button';
import ErrorElement from '../../../Login/components/errorElement';
import Input from '../../../Login/components/Input';

export default function EditPassword() {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState<JSX.Element>();
  const [valid, setValid] = useState(true);
  const [isToogle, setToogle] = useState(false);

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (password === '' || password.length < 6) {
      e.preventDefault();
      setValid(false);
      setErrorPassword(<ErrorElement msg="Senha atual inválida" />);
    } else if (newPassword === '' || confirmPassword === '') {
      e.preventDefault();
      setValid(false);
      setErrorPassword(<ErrorElement msg="Campos não podem ser vazios" />);
    } else if (newPassword.length < 6) {
      e.preventDefault();
      setValid(false);
      setErrorPassword(<ErrorElement msg="Senha muito curta (mínimo 6 dígitos)" />);
    } else if (newPassword === password) {
      e.preventDefault();
      setValid(false);
      setErrorPassword(<ErrorElement msg="Digite uma senha diferente da antiga" />);
    } else if (newPassword != confirmPassword) {
      e.preventDefault();
      setValid(false);
      setErrorPassword(<ErrorElement msg="Confirmação de senha inválida" />);
    } else {
      setValid(true);
    }
  };

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
          Alterar senha
        </h1>
      </div>
      {isToogle && (
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type={'password'}
              placeholder={''}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
              name="floating_email"
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div>
            <div className="w-full my-2 justify-center flex">
              <input
                className="flex
        justify-center
        items-center
        mx-auto
        w-10/12
        p-1
        text-md
        text-verde-texto
        bg-inherit
        placeholder:text-verde-texto
        border-verde-texto
        hover:placeholder:opacity-0
        focus:outline-none
        border-solid
        border-b"
                type={'password'}
                placeholder={'Confirme a nova senha'}
                value={password}
                onChange={(v) => setPassword(v.target.value)}
              />
            </div>
            <p className="text-red-400">{!valid ? errorPassword : null}</p>
          </div>
          <div className="flex justify-center items-center text-center w-full ">
            <input
              type="checkbox"
              className=" bg-red-100 border-red-300 text-red-500 focus:text-red-500"
            />
            <label className="text-sm my-2 text-slate-700">Sair de todas sessões</label>
          </div>
          <div className="flex justify-center mb-1">
            <a href={valid ? '/profile' : ''}>
              <Button
                className="bg-white font-semibold shadow-md text-verde-insted text-xl rounded-3xl h-12 w-40 m-2"
                label="ALTERAR"
                onClick={(e) => handleClick(e)}
              />
            </a>
          </div>
        </form>
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

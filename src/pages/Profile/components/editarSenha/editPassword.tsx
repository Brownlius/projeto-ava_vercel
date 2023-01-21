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
          <div className="w-full my-4 justify-center flex">
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
              placeholder={'Informe a senha atual'}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>

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
              placeholder={'Informe a nova senha'}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
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
          <div className="text-center my-2">
            <label className="text-xs text-slate-700 ml-0.5">
              <input type="checkbox" className="mr-1" />
              Sair de todas sessões?
            </label>
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

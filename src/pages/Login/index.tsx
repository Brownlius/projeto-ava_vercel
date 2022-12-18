import { useState } from 'react';
import Button from '../../components/Button/button';
import ErrorElement from './components/errorElement';
import Input from './components/Input';

const Login = () => {
  const [ra, setRa] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [valid, setValid] = useState(true);
  const [error, setError] = useState<JSX.Element>();

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (ra === '' || password === '') {
      e.preventDefault();
      setValid(false);
      setError(<ErrorElement msg="Campos não podem estar vazios" />);
    } else if (ra.length !== 10 || ra.match(/^[a-zA-Z]+$/g)) {
      e.preventDefault();
      setValid(false);
      setError(<ErrorElement msg="RA inválido" />);
    } else if (password.length < 6) {
      e.preventDefault();
      setValid(false);
      setError(<ErrorElement msg="Senha inválida (mínimo 6 dígitos)" />);
    } else {
      setValid(true);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="bg-verde-insted flex flex-col rounded-2xl h-3/5 w-4/5">
        <div className="bg-logo-insted bg-contain bg-center bg-no-repeat h-1/6 m-2 "></div>
        <div className="flex flex-col justify-center h-3/6">
          <div className="">
            <Input
              type={'text'}
              placeholder={' Informe seu RA'}
              value={ra}
              onChange={(v) => setRa(v.target.value)}
            />
          </div>

          <div className="">
            <Input
              type={'password'}
              placeholder={' Informe sua senha'}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>

          <div>{!valid ? error : null}</div>

          <div className="flex justify-center m-2">
            <label className="flex flex-row text-center text-sm ">
              <input type="checkbox" className="mx-1" />
              <p className="text-white">Continuar conectado?</p>
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-2/6">
          <div className="bg-white shadow-md rounded-full w-1/2 text-center">
            <a href={valid ? '/home' : ''}>
              <Button
                className="text-xl font-bold text-verde-texto p-2"
                label="LOGIN"
                type="submit"
                onClick={(e) => handleClick(e)}
              />
            </a>
          </div>
          <div className=" text-white hover:underline text-xs m-2 ">
            <h4>Esqueceu sua senha?</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;

import { useState } from 'react';
import Button from '../../components/Button/button';
import ErrorElement from './components/errorElement';
import Input from './components/Input';

const Login = () => {
  const [ra, setRa] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [valid, setValid] = useState(true);
  const [validRa, setValidRa] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [errorRa, setErrorRa] = useState<JSX.Element>();
  const [errorPassword, setErrorPassword] = useState<JSX.Element>();

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (ra === '') {
      e.preventDefault();
      setValidRa(false);
      setErrorRa(<ErrorElement msg="Campo não pode estar vazio" />);
    } else if (ra.length !== 10 || ra.match(/^[a-zA-Z]+$/g)) {
      e.preventDefault();
      setValidRa(false);
      setErrorRa(<ErrorElement msg="RA inválido" />);
    } else {
      setValidRa(true);
    }

    if (password === '') {
      e.preventDefault();
      setValidPassword(false);
      setErrorPassword(<ErrorElement msg="Campo não pode estar vazio" />);
    } else if (password.length < 6) {
      e.preventDefault();
      setValidPassword(false);
      setErrorPassword(<ErrorElement msg="Senha inválida (mínimo 6 dígitos)" />);
    } else {
      setValidPassword(true);
    }

    if (validPassword && validRa) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-5 place-content-center rounded-xl h-3/5 w-4/5">
        <div className="bg-logo-insted bg-contain bg-center bg-no-repeat h-4/5 w-4/5 mx-auto mt-auto"></div>
        <div>
          <div className="w-full justify-center flex mt-20">
            <Input
              type={'text'}
              placeholder={' Informe seu RA'}
              value={ra}
              onChange={(v) => setRa(v.target.value)}
            />
          </div>
          <div>{!validRa ? errorRa : null}</div>
        </div>
        <div>
          <div className="w-full justify-center flex mt-10">
            <Input
              type={'password'}
              placeholder={' Informe sua senha'}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <div>{!validPassword ? errorPassword : null}</div>
        </div>

        <div className="flex justify-center w-full">
          <label className="text-xs  text-slate-700 ml-0.5">
            <input type="checkbox" className="mr-1" />
            Continuar conectado?
          </label>
          <h4 className="ml-3 text-slate-700 hover:underline text-xs">Esqueceu sua senha?</h4>
        </div>
        <div className="w-full flex justify-center items-center mt-8 h-8">
          <a href={!valid ? '/home' : ''}>
            <Button
              className="bg-white shadow-md font-semibold text-verde-insted text-xl h-12 w-40 rounded-3xl"
              label="LOGIN"
              type="submit"
              onClick={(e) => handleClick(e)}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

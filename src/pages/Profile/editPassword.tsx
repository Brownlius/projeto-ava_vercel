import { useState } from 'react';
import Button from '../../components/Button/button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ErrorElement from '../Login/components/errorElement';
import Input from '../Login/components/Input';

const EditPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState<JSX.Element>();
  const [valid, setValid] = useState(true);

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
    <>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <section className="bg-verde-insted justify-center items-center text-white w-4/5 rounded-md text-center">
          <div>
            <h2 className="font-semibold text-2xl pt-2">Alterar senha</h2>
            <form>
              <div>
                <div className="w-full my-3 justify-center flex">
                  <Input
                    type={'password'}
                    placeholder={'Informe a senha atual'}
                    value={password}
                    onChange={(v) => setPassword(v.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="w-full my-3 mt-10 justify-center flex">
                  <Input
                    type={'password'}
                    placeholder={'Informe a nova senha'}
                    value={newPassword}
                    onChange={(v) => setNewPassword(v.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="w-full my-3 justify-center flex">
                  <Input
                    type={'password'}
                    placeholder={'Confirme a nova senha'}
                    value={confirmPassword}
                    onChange={(v) => setConfirmPassword(v.target.value)}
                  />
                </div>
                <div>{!valid ? errorPassword : null}</div>
              </div>
              <div className="text-center my-2">
                <label className="text-xs text-slate-700 ml-0.5">
                  <input type="checkbox" className="mr-1" />
                  Sair de todas sessões?
                </label>
              </div>
              <div className="mb-1">
                <a href={valid ? '/profile' : ''}>
                  <Button
                    className="bg-white font-semibold shadow-md text-verde-insted text-xl rounded-3xl h-12 w-40 m-2"
                    label="CONFIRMAR"
                    onClick={(e) => handleClick(e)}
                  />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EditPassword;

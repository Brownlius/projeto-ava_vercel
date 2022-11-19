import { Input } from './components/Input';

const Login = () => {
  return (
    <div className="md:container flex justify-center items-center h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-5 place-content-center rounded-xl h-3/5 mx-auto w-4/5">
        <div className="bg-logo-insted bg-contain bg-no-repeat content-center h-4/5 w-4/5 mx-auto mt-auto"></div>
        <div className="w-full justify-center flex mt-20">
          <input
            type="text"
            placeholder=" Informe seu RA"
            className="flex
              justify-center
              items-center
              w-64
              h-8
              text-md
              text-white
              bg-verde-insted
              placeholder:text-white
              border-white
              hover:placeholder:opacity-0
              focus:outline-none
              focus:
              border-solid
              border-b"
          />
        </div>
        <div className="w-full justify-center flex mt-10">
          <input
            type="password"
            placeholder=" Informe sua senha"
            className="flex
              justify-center
              items-center
              w-64
              h-8
              text-md
              text-white
              bg-verde-insted
              placeholder:text-white
              border-white
              hover:placeholder:opacity-0
              focus:outline-none
              focus:
              border-solid
              border-b"
          />
        </div>
        <div className="w-full flex justify-center mt-8 h-8">
          <button className="bg-white shadow-md text-verde-insted text-xl h-12 w-48 rounded-3xl">
            LOGIN
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <input type="checkbox" className="mx-1" />
          <label className="text-xs text-slate-700 ml-0.5">Continuar conectado?</label>
          <h4 className="ml-3 text-slate-700 hover:underline text-xs">Esqueci minha senha</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;

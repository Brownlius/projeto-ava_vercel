const Login = () => {
  return (
    <div className="md:container justify-center flex fixed mt-40 mb-40 h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-6 justify-center rounded-xl h-3/5 ml-12 w-80">
        <div className="bg-logo-insted bg-contain bg-no-repeat h-16 w-full mt-5 ml-14"></div>
        <div className="h-10 pt-10 p-14 mt-4 w-full justify-center flex items-center text-3xl text-white border-t-2">
          <h1>LOGIN</h1>
        </div>
        <div className="w-full justify-center flex mt-7">
          <input
            type="text"
            placeholder=" Informe seu RA"
            className="flex
              justify-center
              items-center
              w-64
              h-8
              text-white
              bg-verde-insted
              placeholder:text-white
              border-white
              focus:outline-none
              border-solid
              border-b"
          />
        </div>
        <div className="w-full justify-center flex mt-2">
          <input
            type="password"
            placeholder=" Informe sua senha"
            className="flex
              justify-center
              items-center
              w-64
              h-8
              text-white
              bg-verde-insted
              placeholder:text-white
              border-white
              focus:outline-none
              focus:
              border-solid
              border-b"
          />
        </div>
        <div className="w-full flex justify-center mt-2 h-8">
          <button className="bg-white shadow-md text-verde-insted text-xl h-12 w-48 rounded-3xl">
            ENTRAR
          </button>
        </div>
        <div className="flex justify-center w-full mt-10">
          <input type="checkbox" className="mr-1 mb-8" />
          <label className="text-xs text-slate-700 mt-0.5">Continuar conectado?</label>
          <h4 className="ml-5 mt-0.5 text-slate-700 hover:underline text-xs">
            Esqueci minha senha
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;

const Footer = () => {
  return (
    <div className="flex justify-between w-full fixed bottom-0 border-t-[0.5px] border-verde-insted-icon bg-cor-de-fundo z-10 ">
      <div className="flex flex-col justify-around items-center text-center w-1/4 ">
        <img
          src="/images/menu-button3.png"
          alt="Calendar button"
          className=" pt-1 w-1/6 object-contain
        "
        />
        <h3 className="text-sm text-verde-texto ">Menu</h3>
      </div>
      <a href="/home" className="flex justify-center w-1/4">
        <button className="flex flex-col relative bottom-4 items-center justify-around text-center">
          <div className="flex justify-center bg-verde-insted border-cor-de-fundo border-2 rounded-2xl ">
            <img
              src="/images/botao-inicio.png"
              alt="Botão para menu inicial"
              className=" py-1 w-1/4 object-contain
        "
            />
          </div>
          <h3 className="text-sm  text-verde-texto ">Início</h3>
        </button>
      </a>
      <a href="/profile" className="w-1/4 flex justify-center">
        <button className="flex flex-col justify-around items-center text-center">
          <img
            src="/images/perfil-padrao.png"
            alt="Calendar button"
            className="w-1/6  pt-1 object-contain
        "
          />
          <h3 className="text-sm text-verde-texto ">Perfil</h3>
        </button>
      </a>
    </div>
  );
};

export default Footer;

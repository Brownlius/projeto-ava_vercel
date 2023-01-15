const Footer = () => {
  return (
    <div className="flex justify-between w-full fixed bottom-0 border-t-[0.5px] border-verde-insted-icon dark:border-dark-verde-texto bg-cor-de-fundo dark:bg-dark-verde-insted z-10 ">
      <div className="flex flex-col justify-around items-center text-center w-1/4 ">
        <img
          src="/images/menu-button3.png"
          alt="Calendar button"
          className=" pt-1 w-1/6 object-contain
        "
        />
        <h3 className="text-sm text-verde-texto dark:text-dark-verde-texto ">Menu</h3>
      </div>
      <a href="/home" className="flex justify-center w-1/4 ">
        <button className="flex flex-col relative bottom-4 items-center justify-around text-center">
          <div className="flex justify-center bg-verde-insted dark:bg-dark-verde-insted-icon border-cor-de-fundo dark:border-dark-verde-texto border-2 rounded-2xl  py-0.5">
            <img
              src="/images/botao-inicio.png"
              alt="Botão para menu inicial"
              className=" py-1 w-1/4 object-contain
        "
            />
          </div>
          <h3 className="text-sm  text-verde-texto dark:text-dark-verde-texto">Início</h3>
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
          <h3 className="text-sm text-verde-texto dark:text-dark-verde-texto">Perfil</h3>
        </button>
      </a>
    </div>
  );
};

export default Footer;

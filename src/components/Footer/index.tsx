const Footer = () => {
  return (
    <div className="flex justify-between fixed bottom-0 border-t-[0.5px] border-verde-insted-icon bg-cor-de-fundo z-10 ">
      <div className="flex flex-col justify-around items-center text-center w-1/3 ">
        <img
          src="/images/menu-button3.png"
          alt="Calendar button"
          className=" w-1/5 object-contain
        "
        />
        <h3 className="text-sm text-verde-texto ">Menu</h3>
      </div>
      <div className="flex flex-col relative bottom-5 justify-around items-center text-center w-1/3  ">
        <div className="flex justify-center bg-verde-insted border-cor-de-fundo border-2 rounded-2xl ">
          <a href="/home">
            <img
              src="/images/botao-inicio.png"
              alt="Botão para menu inicial"
              className=" py-1 w-1/4 object-contain
        "
            />
          </a>
        </div>
        <h3 className="text-sm  text-verde-texto ">Início</h3>
      </div>
      <div className="flex flex-col justify-around items-center text-center w-1/3">
        <img
          src="/images/perfil-padrao.png"
          alt="Calendar button"
          className="w-1/5 object-contain
        "
        />
        <h3 className="text-sm text-verde-texto ">Perfil</h3>
      </div>
    </div>
  );
};

export default Footer;

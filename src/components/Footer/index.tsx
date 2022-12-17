const Footer = () => {
  return (
    <div className="flex justify-between h-[54px] fixed inset-x-0 bottom-0 border-t-[0.5px] border-verde-insted-icon bg-white ">
      <div className="flex flex-col justify-center text-center w-1/4 ">
        <div className="flex justify-center ">
          <img src="/images/menu-button3.png" alt="Calendar button" className="w-[30px]" />
        </div>
        <div>
          <h3 className="text-sm  text-verde-texto ">Menu</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center w-1/4 relative bottom-4">
        <div className=" flex justify-center bg-verde-insted border-[3px] border-white  rounded-2xl">
          <a href="/home">
            <img
              className="w-[35px] py-1"
              src="/images/house-icon.png"
              alt="Botão página inicial"
            />
          </a>
        </div>
        <div className="">
          <h3 className="text-sm  text-verde-texto ">Início</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center w-1/4 ">
        <a href="/profile">
          <div className="flex justify-center ">
            <img src="/images/perfil-padrao.png" alt="Clock button" className="w-[30px]" />
          </div>
          <div>
            <h3 className="text-sm  text-verde-texto ">Perfil</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <div className="flex justify-between h-[56px] fixed inset-x-0 bottom-0 border-t-[0.5px] border-verde-insted-icon bg-white ">
      <div className="flex justify-center m-2 ">
        <img src="/images/menu-button3.png" alt="Calendar button" className="w-[40px]" />
      </div>
      <div className="flex flex-col text-center w-1/4 relative bottom-6">
        <div className=" flex justify-center py-1 items-center  bg-verde-insted border-[3px] border-white  rounded-2xl">
          <a href="/home">
            <img className="w-[40px]" src="/images/house-icon.png" alt="Botão página inicial" />
          </a>
        </div>
        <div>
          <h3 className="text-sm">Início</h3>
        </div>
      </div>
      <div className="flex justify-center m-2 ">
        <img src="/images/perfil-padrao.png" alt="Clock button" className="w-[40px]" />
      </div>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed inset-x-0 bottom-0 bg-verde-insted ">
      <div className="m-2 justify-center items-center flex">
        <img src="/images/menu-button3.png" alt="Calendar button" width={30} />
      </div>
      <div className=" m-2 justify-center items-center flex">
        <a href="/home">
          <img src="/images/house-icon.png" alt="Home button" width={30} />
        </a>
      </div>
      <div className=" m-2 justify-center items-center flex">
        <img src="/images/perfil-padrao.png" alt="Clock button" width={30} />
      </div>
    </div>
  );
};

export default Footer;

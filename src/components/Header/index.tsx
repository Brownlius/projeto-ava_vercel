const Header = () => {
  return (
    <div className="justify-center items-center flex fixed inset-x-0 top-0 bg-verde-insted h-20 border-b border-black">
      <div className="absolute top-3 right-5">
        <img src="/images/perfil-padrao.png" alt="Foto de Perfil" width={40} height={40} />
        <a className="text-xs ml-2.5" href="/">
          Sair
        </a>
      </div>
      <div className="absolute top-6 left-5">
        <img src="/images/menu-button3.png" alt="Botão do menu" width={40} height={30} />
      </div>
    </div>
  );
};

export default Header;

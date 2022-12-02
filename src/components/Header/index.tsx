const Header = () => {
  return (
    <div className="flex justify-between items-center fixed inset-x-0 top-0 bg-verde-insted py-1 h-auto border-b border-black">
      <div className="flex mx-3">
        <img src="/images/menu-button3.png" alt="Botão do menu" width={47} height={30} />
      </div>
      <div className="flex flex-col text-center mx-3">
        <a href="/profile">
          <img src="/images/perfil-padrao.png" alt="Foto de Perfil" width={40} height={40} />
        </a>
        <a className="text-xs" href="/">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Header;

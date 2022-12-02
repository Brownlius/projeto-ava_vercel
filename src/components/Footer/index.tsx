const Footer = () => {
  return (
    <div className="grid gap-0 grid-cols-4 grid-rows-1 py-1 justify-center items-center fixed inset-x-0 bottom-0 bg-verde-insted ">
      <div className="justify-center items-center flex">
        <img src="/images/house-icon.png" alt="Home button" width={30} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/calendar-icon.png" alt="Calendar button" width={30} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/relogio-icon.png" alt="Clock button" width={30} height={30} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/stats-icon.png" alt="Stats button" width={30} />
      </div>
    </div>
  );
};

export default Footer;

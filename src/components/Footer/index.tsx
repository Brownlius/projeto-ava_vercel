const Footer = () => {
  return (
    <div className="grid gap-0 grid-cols-4 grid-rows-1 justify-center items-center fixed inset-x-0 bottom-0 bg-verde-insted h-20 border-t border-black">
      <div className="justify-center items-center flex">
        <img src="/images/house-icon.png" alt="Home button" width={40} height={40} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/calendar-icon.png" alt="Calendar button" width={40} height={40} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/clock-icon.png" alt="Clock button" width={40} height={40} />
      </div>
      <div className="justify-center items-center flex">
        <img src="/images/stats-icon.png" alt="Stats button" width={37} height={37} />
      </div>
    </div>
  );
};

export default Footer;

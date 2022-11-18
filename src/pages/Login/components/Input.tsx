import P from 'prop-types';

export const Input = (type: string, placeholder: string): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex
    justify-center
    items-center
    w-64
    h-8
    text-white
    bg-verde-insted
    placeholder:text-white
    border-white
    hover:placeholder:opacity-0
    focus:outline-none
    border-solid
    border-b"
    />
  );
};

Input.propTypes = {
  type: P.string.isRequired,
  placeholder: P.string.isRequired
};

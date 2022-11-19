interface Props {
  placeholder?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex
        justify-center
        items-center
        mx-auto
        w-4/5
        h-8
        text-md
        text-white
        bg-verde-insted
        placeholder:text-white
        border-white
        hover:placeholder:opacity-0
        focus:outline-none
        focus:
        border-solid
        border-b"
    />
  );
};

export default Input;

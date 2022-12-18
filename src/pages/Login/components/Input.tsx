interface Props {
  placeholder?: string;
  type: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input = ({ type, placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex
        justify-center
        items-center
        mx-auto
        w-4/5
        h-10
        text-md
        text-white
        bg-inherit
        placeholder:text-texto-input
        border-white
        hover:placeholder:opacity-0
        focus:outline-none
        border-solid
        border-b"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

interface Props {
  className: string;
  type?: 'button' | 'reset' | 'submit';
  value?: string | number | readonly string[];
  label: string;
}

type ButtonProps = JSX.IntrinsicElements['button'] & Props;

const Button = ({ className, type, value, label, ...rest }: ButtonProps) => {
  return (
    <button className={className} type={type} value={value} {...rest}>
      {label}
    </button>
  );
};

export default Button;

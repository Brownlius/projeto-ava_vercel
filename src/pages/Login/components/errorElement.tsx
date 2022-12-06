interface Props {
  msg: string;
}

const ErrorElement = ({ msg }: Props) => {
  return (
    <div className="text-red-600 text-xs flex justify-center items-center mt-1">
      <p>{msg}</p>
    </div>
  );
};

export default ErrorElement;

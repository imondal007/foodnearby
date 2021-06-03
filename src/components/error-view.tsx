type Props = {
  title: string;
  btnText: string;
  onClick: Function;
};

const ErrorView = ({ title, btnText, onClick }: Props) => {
  const handleClick = () => onClick();

  return (
    <div className="flex flex-col max-h-screen h-auto flex-1 bg-gray-50 justify-center items-center">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <button onClick={handleClick} className="text-blue-500">
        {btnText}
      </button>
    </div>
  );
};

export default ErrorView;

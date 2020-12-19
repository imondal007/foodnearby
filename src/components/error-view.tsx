import Link from "next/link";

type Props = {
  title: string;
  retryText: string;
  retryLink: string;
};

const ErrorView = ({ title, retryText, retryLink }: Props) => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-50 justify-center items-center">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <Link href={retryLink}>
        <a className="text-blue-500">{retryText}</a>
      </Link>
    </div>
  );
};

export default ErrorView;

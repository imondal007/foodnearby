type Props = {
  status: string;
  isOpen: boolean;
};

const OpeningStatus = ({ status, isOpen }: Props) => (
  <p className="text-sm font-normal text-gray-800">
    {status === "CLOSED_PERMANENTLY" ? (
      <>
        <span className="text-red-600">● </span>Closed Permanently
      </>
    ) : isOpen ? (
      <>
        <span className="text-green-500">● </span>Open Now
      </>
    ) : (
      <>
        <span className="text-red-600">● </span>Close
      </>
    )}
  </p>
);

export default OpeningStatus;

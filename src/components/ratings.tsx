type Props = {
  rating: number;
  count: number;
};

const Ratings: React.FC<Props> = ({ rating, count }: Props) => (
  <p className="text-sm font-normal text-gray-500">
    <span className="text-red-500 pr-1">★</span>
    {`${rating}(${count})`}
  </p>
);

export default Ratings;

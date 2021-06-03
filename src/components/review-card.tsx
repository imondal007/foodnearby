import { ReviewsType } from "src/types";
import Rating from "./rating";

type Props = {
  review: ReviewsType;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white mb-2 p-4 rounded-md">
      <div className="flex flex-1 justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {review.author_name}
          </h3>

          <p className="text-sm font-normal text-gray-600 mb-2">
            {review.relative_time_description}
          </p>
        </div>
        <Rating rating={review.rating} />
      </div>
      <p className="text-sm font-normal text-gray-700">{review.text}</p>
    </div>
  );
};

export default ReviewCard;

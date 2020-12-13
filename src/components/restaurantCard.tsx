import getImgUrl from "src/helpers/getImgUrl";
import { RestaurantType } from "src/types";
import Rating from "./rating";

type Props = {
  restaurant: RestaurantType;
};

const RestaurantCard: React.FC<Props> = ({ restaurant }: Props) => {
  const {
    photos,
    rating,
    user_ratings_total,
    opening_hours,
    name,
    vicinity,
  } = restaurant;
  return (
    <div className="xl:w-1/3 md:w-1/3 w-96 p-4">
      <img
        src={getImgUrl(photos[0].photo_reference, 320)}
        className="w-full h-52 object-cover rounded-lg"
      />
      <div className="pt-3">
        <div className="flex flex-row justify-between">
          <Rating rating={rating} count={user_ratings_total} />
          <p className="text-sm font-normal text-gray-800">
            {opening_hours.open_now ? (
              <>
                <span className="text-green-500">● </span>Open Now
              </>
            ) : (
              <>
                <span className="text-red-600">● </span>Close
              </>
            )}
          </p>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm font-normal text-gray-600">{vicinity}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

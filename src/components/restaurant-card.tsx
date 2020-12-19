import Link from "next/link";

import getImgUrl from "src/helpers/img-url";
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
    business_status,
    place_id,
  } = restaurant;
  return (
    <Link href={`/restaurant/${place_id}`}>
      <a className="xl:w-1/3 md:w-1/3 w-96 p-4">
        <div className="bg-white rounded-lg">
          <img
            src={photos && getImgUrl(photos[0].photo_reference, 320)}
            className="w-full h-52 object-cover rounded-lg"
          />
        </div>
        <div className="pt-3">
          <div className="flex flex-row justify-between">
            <Rating rating={rating} count={user_ratings_total} />
            <p className="text-sm font-normal text-gray-800">
              {business_status === "CLOSED_PERMANENTLY" ? (
                <>
                  <span className="text-red-600">● </span>Closed Permanently
                </>
              ) : opening_hours?.open_now ? (
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
      </a>
    </Link>
  );
};

export default RestaurantCard;

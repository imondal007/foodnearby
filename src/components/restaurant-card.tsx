import Link from "next/link";
import Image from "next/image";

import { RestaurantType } from "src/types";
import getImgUrl from "src/helpers/img-url";

import Rating from "./rating";
import OpeningStatus from "./opening-status";

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
        <div className="bg-white rounded-lg h-52 overflow-hidden">
          {photos && (
            <Image
              src={photos ? getImgUrl(photos[0].photo_reference, 320) : ""}
              className="w-full h-52 object-cover rounded-lg"
              alt={name}
              width={360}
              height={270}
            />
          )}
        </div>
        <div className="pt-3">
          <div className="flex flex-row justify-between">
            <Rating rating={rating} count={user_ratings_total} />
            <OpeningStatus
              isOpen={opening_hours?.open_now}
              status={business_status}
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm font-normal text-gray-600">{vicinity}</p>
        </div>
      </a>
    </Link>
  );
};

export default RestaurantCard;

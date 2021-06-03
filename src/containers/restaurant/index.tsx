import { useRouter } from "next/router";

import Head from "src/components/head";
import Header from "src/components/header";
import Rating from "src/components/rating";
import RestaurantMap from "src/restaurant-map";
import ErrorView from "src/components/error-view";
import ReviewCard from "src/components/review-card";
import OpeningStatus from "src/components/opening-status";
import ConditionalView from "src/components/conditional-view";

import { RestaurantType } from "src/types";
import getImgUrl from "src/helpers/img-url";

type Props = {
  details: RestaurantType;
};

const RestaurantDetails: React.FC<Props> = ({ details }: Props) => {
  const {
    photos,
    rating,
    user_ratings_total,
    opening_hours,
    name,
    vicinity,
    business_status,
    reviews,
    place_id,
  } = details;

  const router = useRouter();

  const notFound = !Object.keys(details).length;

  if (notFound) {
    return (
      <div className="flex  min-h-screen">
        <Header backButton />
        <ErrorView
          title="Restaurant Not Found"
          btnText="Search again"
          onClick={() => router.push("/")}
        />
      </div>
    );
  }

  return (
    <>
      <Head title={name} />
      <div className="bg-gray-50 min-h-screen relative">
        <Header backButton />
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row p-4 pt-24 md:pt-28 lg:pt-32 md:space-x-5">
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg mb-4 h-80 overflow-hidden">
                <img
                  src={photos && getImgUrl(photos[0].photo_reference, 500)}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              <OpeningStatus
                isOpen={opening_hours?.open_now}
                status={business_status}
              />

              <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
              <p className="text-base font-normal text-gray-800 mb-2">
                {vicinity}
              </p>

              <RestaurantMap place_id={place_id} />
            </div>
            <div className="pt-3 md:pt-0 flex-1">
              <ConditionalView condition={user_ratings_total > 0}>
                <div className="flex flex-row items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Reviews
                  </h2>
                  <Rating rating={rating} count={user_ratings_total} />
                </div>

                {reviews &&
                  reviews.map((item) => (
                    <ReviewCard review={item} key={item.time} />
                  ))}
              </ConditionalView>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;

import Link from "next/link";

import Head from "src/components/head";
import Header from "src/components/header";
import Rating from "src/components/rating";
import ConditionalView from "src/components/conditional-view";
import LoadingIndicator from "src/components/loading-indicator";

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
  } = details;

  const notFound = !Object.keys(details).length;

  if (notFound) {
    return (
      <>
        <Header backButton />
        <div className="flex flex-col h-screen w-screen bg-gray-50 justify-center items-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Restaurant Not Found
          </h3>
          <Link href="/">
            <a className="text-blue-500">Search again</a>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head title={name} />
      <div className="bg-gray-50 min-h-screen relative">
        <Header backButton />
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row p-4 pt-24 md:pt-24 lg:pt-28 md:space-x-5">
            <div>
              <div className="bg-white rounded-lg mb-auto h-80 overflow-hidden">
                <img
                  src={photos && getImgUrl(photos[0].photo_reference, 500)}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <p className="text-sm font-normal text-gray-800 mt-4">
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

              <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
              <p className="text-base font-normal text-gray-800 mb-2">
                {vicinity}
              </p>
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
                    <div className="bg-white mb-2 p-4 rounded-md">
                      <div className="flex flex-1 justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.author_name}
                          </h3>

                          <p className="text-sm font-normal text-gray-600 mb-2">
                            {item.relative_time_description}
                          </p>
                        </div>
                        <Rating rating={item.rating} />
                      </div>
                      <p className="text-sm font-normal text-gray-700">
                        {item.text}
                      </p>
                    </div>
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

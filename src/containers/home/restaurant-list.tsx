import { useRouter } from "next/router";

import ErrorView from "src/components/error-view";
import RestaurantCard from "src/components/restaurant-card";
import ShimmerRC from "src/components/shimmer/shimmer-rc";
import { RestaurantType } from "src/types";

type Props = {
  restaurants: Array<RestaurantType>;
  isLoading: boolean;
};

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  const router = useRouter();

  const isEmpty = !Object.keys(restaurants).length;

  if (isLoading) {
    return <ShimmerRC />;
  }

  if (isEmpty) {
    return (
      <ErrorView
        title="No Restaurant Found"
        btnText="Try again"
        onClick={() => router.reload()}
      />
    );
  }

  return (
    <>
      {restaurants &&
        restaurants.map((item) => (
          <RestaurantCard key={item.place_id} restaurant={item} />
        ))}
    </>
  );
};

export default RestaurantList;

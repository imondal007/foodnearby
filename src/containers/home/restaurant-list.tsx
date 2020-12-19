import RestaurantCard from "src/components/restaurant-card";
import ShimmerRC from "src/components/shimmer/shimmer-rc";
import { RestaurantType } from "src/types";

type Props = {
  restaurants: Array<RestaurantType>;
  isLoading: boolean;
};

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <ShimmerRC />;
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

import { GetServerSideProps, NextPage } from "next";

import { RestaurantType } from "src/types";

import RestaurantDetails from "src/containers/restaurant";
import { getRestaurant } from "src/pages/api/restaurantdetails";

type Props = {
  restaurant: RestaurantType;
};

const RestaurantDetailsPage: NextPage<Props> = ({ restaurant }: Props) => {
  return <RestaurantDetails details={restaurant} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await getRestaurant({
    query: {
      place_id: id,
    },
  });

  const restaurant = JSON.parse(res)?.result || {};

  return { props: { restaurant } };
};

export default RestaurantDetailsPage;

import { NextPage, GetServerSideProps } from "next";

import Home from "src/containers/home";

import { LOCATION, RADIUS } from "src/constants";
import { getRestaurants } from "src/pages/api/getrestaurants";
import { RestaurantsType } from "src/types";

type Props = {
  props: RestaurantsType;
};

const HomePage: NextPage<RestaurantsType> = ({
  restaurants,
}: RestaurantsType) => {
  return <Home restaurants={restaurants} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<Props> => {
  const { q } = context.query;

  const res = await getRestaurants({
    query: {
      location: LOCATION,
      radius: RADIUS,
      keyword: q,
    },
  });

  const restaurants = JSON.parse(res)?.results || [];

  return { props: { restaurants } };
};

export default HomePage;

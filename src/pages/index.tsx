import { NextPage, GetStaticProps } from "next";

import Home from "src/containers/home";

import { LOCATION, RADIUS } from "src/constants";
import { getRestaurants } from "src/pages/api/getrestaurants";
import { RestaurantsType } from "src/types";

type Props = {
  props: RestaurantsType;
  revalidate: number;
};

const HomePage: NextPage<RestaurantsType> = ({
  restaurants,
}: RestaurantsType) => {
  return <Home restaurants={restaurants} />;
};

export const getStaticProps: GetStaticProps = async (): Promise<Props> => {
  const res = await getRestaurants({
    query: {
      location: LOCATION,
      radius: RADIUS,
    },
  });

  const restaurants = JSON.parse(res)?.results || [];

  return { props: { restaurants }, revalidate: 1800 };
};

export default HomePage;

import { NextPage, GetStaticProps } from "next";

import Home from "src/screens/home";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/endPoint";
import { RestaurantsType, RestaurantType } from "src/types";

type Props = {
  props: RestaurantsType;
};

const HomePage: NextPage<RestaurantsType> = ({
  restaurants,
}: RestaurantsType) => {
  return <Home restaurants={restaurants} />;
};

export const getStaticProps: GetStaticProps = async (): Promise<Props> => {
  const { SITE_URL } = process.env;

  const URL = `${SITE_URL}${GET_RESTAURANTS}?location=${LOCATION}&radius=${RADIUS}`;

  const restaurants: Array<RestaurantType> = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res.results || []);

  return { props: { restaurants } };
};

export default HomePage;

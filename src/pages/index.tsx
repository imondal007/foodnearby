import { NextPage, GetStaticProps } from "next";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/externalAPI";
import { RestaurantsType, RestaurantType } from "src/types";

import Home from "src/screens/home";

type Props = {
  props: RestaurantsType;
};

const HomePage: NextPage<RestaurantsType> = ({
  restaurants,
}: RestaurantsType) => {
  return <Home restaurants={restaurants} />;
};

export const getStaticProps: GetStaticProps = async (): Promise<Props> => {
  const { NEXT_PUBLIC_GCP_API_KEY } = process.env;
  const URL = `${GET_RESTAURANTS}&key=${NEXT_PUBLIC_GCP_API_KEY}&location=${LOCATION}&radius=${RADIUS}`;

  const restaurants: Array<RestaurantType> = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res.results);

  return { props: { restaurants } };
};

export default HomePage;

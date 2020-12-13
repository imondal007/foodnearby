import { NextPage } from "next";
import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/externalAPI";

import Home from "src/screens/home";
import { RestaurantsType, RestaurantType } from "src/types";

const HomePage: NextPage<RestaurantsType> = ({
  restaurants,
}: RestaurantsType) => <Home restaurants={restaurants} />;

HomePage.getInitialProps = async () => {
  const { GCP_API_KEY } = process.env;
  const URL = `${GET_RESTAURANTS}&key=${GCP_API_KEY}&location=${LOCATION}&radius=${RADIUS}`;

  const restaurants: Array<RestaurantType> = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res.results);

  return { restaurants };
};

export default HomePage;

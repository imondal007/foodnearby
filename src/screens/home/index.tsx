import { useEffect, useState } from "react";
import Head from "src/components/head";
import Header from "src/components/header";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/endPoint";
import { RestaurantsType } from "src/types";

import RestaurantList from "./restaurantList";

const Home: React.FC<RestaurantsType> = ({ restaurants }: RestaurantsType) => {
  const [state, setState] = useState({ list: restaurants, isLoading: false });
  const { list, isLoading } = state;

  const getRestaurants = async (q = "") => {
    const URL = `${GET_RESTAURANTS}?location=${LOCATION}&radius=${RADIUS}&keyword=${q}`;

    if (q) {
      setState((prevState) => ({ ...prevState, isLoading: true }));
    }

    await fetch(URL)
      .then((res) => res.json())
      .then((res) => setState({ list: res.results || [], isLoading: false }))
      .catch(() => setState({ list: [], isLoading: false }));
  };

  const handleSearch = (q) => getRestaurants(q);

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Head title="Food Nearby" />
      <div className="bg-gray-50 min-h-screen">
        <Header onSearch={handleSearch} />
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap md:-m-4 md:pt-10 p-4 justify-center md:justify-start">
            <RestaurantList restaurants={list} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

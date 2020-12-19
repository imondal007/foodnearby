import { useEffect, useState } from "react";
import Head from "src/components/head";
import Header from "src/components/header";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/end-point";
import { RestaurantsType } from "src/types";

import RestaurantList from "./restaurant-list";

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
      <Head title="Food Nearby" description="Find nearby restaurant list" />
      <div className="bg-gray-50 min-h-screen relative">
        <Header onSearch={handleSearch} />
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center md:justify-start p-4 pt-20 md:pt-24 lg:pt-28">
            <RestaurantList restaurants={list} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

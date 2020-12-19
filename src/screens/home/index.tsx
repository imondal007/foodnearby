import { useEffect, useState } from "react";
import Head from "src/components/head";
import Header from "src/components/header";
import RestaurantCard from "src/components/restaurantCard";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/endPoint";

import { RestaurantsType } from "src/types";

const Home: React.FC<RestaurantsType> = ({ restaurants }: RestaurantsType) => {
  const [state, setState] = useState({ list: restaurants, isLoading: false });
  const { list, isLoading } = state;

  const getRestaurants = async (q = "") => {
    const URL = `${GET_RESTAURANTS}?location=${LOCATION}&radius=${RADIUS}&keyword=${q}`;

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
            {list &&
              list.map((item) => (
                <RestaurantCard key={item.place_id} restaurant={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

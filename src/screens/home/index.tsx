import { useEffect, useState } from "react";

import Head from "src/components/head";
import Header from "src/components/header";
import RestaurantCard from "src/components/restaurantCard";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/externalAPI";

import { RestaurantsType } from "src/types";

const Home: React.FC<RestaurantsType> = ({ restaurants }: RestaurantsType) => {
  const [list, setList] = useState(restaurants);

  const getRestaurants = async () => {
    const { NEXT_PUBLIC_GCP_API_KEY } = process.env;
    const URL = `${GET_RESTAURANTS}&key=${NEXT_PUBLIC_GCP_API_KEY}&location=${LOCATION}&radius=${RADIUS}`;

    await fetch(URL)
      .then((res) => res.json())
      .then((res) => setList(res.results));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Head title="Home" />
      <div className="bg-gray-50 min-h-screen">
        <Header />
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

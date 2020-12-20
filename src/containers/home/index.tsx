import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "src/components/head";
import Header from "src/components/header";

import { LOCATION, RADIUS } from "src/constants";
import { GET_RESTAURANTS } from "src/constants/end-point";
import { RestaurantsType } from "src/types";

import RestaurantList from "./restaurant-list";

const Home: React.FC<RestaurantsType> = ({ restaurants }: RestaurantsType) => {
  const router = useRouter();
  const { q } = router.query; // search queary from url

  const [state, setState] = useState({ list: restaurants, isLoading: false });
  const { list, isLoading } = state;

  const getRestaurants = async () => {
    const URL = `${GET_RESTAURANTS}?location=${LOCATION}&radius=${RADIUS}&keyword=${q}`;

    if (q) {
      setState((prevState) => ({ ...prevState, isLoading: true }));
    }

    await fetch(URL)
      .then((res) => res.json())
      .then((res) => setState({ list: res.results || [], isLoading: false, q }))
      .catch(() => setState({ list: [], isLoading: false }));
  };

  const handleSearch = (q: string) =>
    router.push({
      pathname: "/",
      query: { q },
    });

  useEffect(() => {
    getRestaurants();
  }, [q]);

  return (
    <>
      <Head title="Food Nearby" description="Find nearby restaurant list" />
      <div className="bg-gray-50 min-h-screen relative flex">
        <Header onSearch={handleSearch} q={q} />
        <div className="container flex mx-auto max-w-5xl flex-1">
          <div className="flex flex-wrap justify-center md:justify-start p-4 pt-20 md:pt-24 lg:pt-28 flex-1">
            <RestaurantList restaurants={list} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "src/components/head";
import Header from "src/components/header";

import { RestaurantsType } from "src/types";

import RestaurantList from "./restaurant-list";

const Home: React.FC<RestaurantsType> = ({ restaurants }: RestaurantsType) => {
  const router = useRouter();
  const { q } = router.query; // search queary from url

  const [state, setState] = useState({ list: [], isLoading: true });
  const { list, isLoading } = state;

  const handleSearch = (q: string) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));

    router.push({
      pathname: "/",
      query: { q },
    });
  };

  useEffect(() => {
    setState({ list: restaurants, isLoading: false });
  }, [restaurants]);

  return (
    <>
      <Head title="Food Nearby" description="Find nearby restaurant list" />
      <div className="bg-gray-50 min-h-screen relative flex">
        <Header onSearch={handleSearch} q={q} />
        <div className="container flex mx-auto max-w-5xl flex-1">
          <div className="flex flex-wrap justify-center md:justify-start pt-20 md:pt-24 lg:pt-28 flex-1">
            <RestaurantList restaurants={list} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

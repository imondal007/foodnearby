import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import { RestaurantType } from "src/types";
import { RESTAURANT_DETAILS } from "src/constants/end-point";

import RestaurantDetails from "src/containers/restaurant";
import { getRestaurant } from "src/pages/api/restaurantdetails";

type Props = {
  restaurant: RestaurantType;
  loading: boolean;
};

const RestaurantDetailsPage: NextPage<Props> = ({
  restaurant,
  loading,
}: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const [details, setDetails] = useState<RestaurantType>(restaurant);
  const [isLoading, setLoading] = useState(loading);

  const getRestaurant = async () => {
    const URL = `${RESTAURANT_DETAILS}?place_id=${id}`;
    setLoading(true);

    await fetch(URL)
      .then((res) => res.json())
      .then((res) => setDetails(res.result))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (id) {
      getRestaurant();
    }
  }, [id]);

  return <RestaurantDetails details={details} isLoading={isLoading} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await getRestaurant({
    query: {
      place_id: id,
    },
  });

  const restaurant = JSON.parse(res)?.result || {};

  return { props: { restaurant, loading: false } };
};

export default RestaurantDetailsPage;

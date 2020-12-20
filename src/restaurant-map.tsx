import React from "react";

type Props = {
  place_id: string;
};

const RestaurantMap = ({ place_id }: Props) => {
  const { NEXT_PUBLIC_GCP_API_KEY } = process.env;
  return (
    <iframe
      style={{ border: 0, width: "100%", height: 300 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${NEXT_PUBLIC_GCP_API_KEY}
      &q=place_id:${place_id}`}
    ></iframe>
  );
};

export default RestaurantMap;

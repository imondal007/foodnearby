import { GOOGLE_PLACES } from "src/constants/externalAPI";

export async function getRestaurants(req) {
  const { query } = req;

  const qs = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");

  const { NEXT_PUBLIC_GCP_API_KEY } = process.env;
  const URL = `${GOOGLE_PLACES}?type=restaurant&&key=${NEXT_PUBLIC_GCP_API_KEY}&${qs}`;

  const result = await fetch(URL)
    .then((resp) => resp.json())
    .catch((e) => e);

  return JSON.stringify(result);
}

export default async (req, res) => {
  const result = await getRestaurants(req);
  res.end(result);
};

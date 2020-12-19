const getImgUrl = (ref: string, width: number): string => {
  const { NEXT_PUBLIC_GCP_API_KEY } = process.env;
  const URL = "https://maps.googleapis.com/maps/api/place/photo?";
  return `${URL}maxwidth=${width}&photoreference=${ref}&key=${NEXT_PUBLIC_GCP_API_KEY}`;
};

export default getImgUrl;

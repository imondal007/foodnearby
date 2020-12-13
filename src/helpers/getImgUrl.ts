const getImgUrl = (ref: string, width: number) => {
  const { GCP_API_KEY } = process.env;
  const URL = "https://maps.googleapis.com/maps/api/place/photo?";
  return `${URL}maxwidth=${width}&photoreference=${ref}&key=${GCP_API_KEY}`;
};

export default getImgUrl;

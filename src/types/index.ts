export interface RestaurantType {
  name: string;
  place_id: string;
  photos: Array<{
    photo_reference: string;
  }>;
  vicinity: string;
  opening_hours: {
    open_now: boolean;
  };
  rating: number;
  user_ratings_total: number;
}

export interface RestaurantsType {
  restaurants?: Array<RestaurantType>;
}

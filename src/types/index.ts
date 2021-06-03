export interface ReviewsType {
  author_name: string;
  relative_time_description: string;
  rating: number;
  text: string;
  time: number;
}

export interface RestaurantType {
  name?: string;
  place_id?: string;
  photos?: Array<{
    photo_reference: string;
  }>;
  vicinity?: string;
  opening_hours?: {
    open_now: boolean;
  };
  rating?: number;
  user_ratings_total?: number;
  business_status?: string;
  reviews?: Array<ReviewsType>;
}

export interface RestaurantsType {
  restaurants?: Array<RestaurantType>;
}

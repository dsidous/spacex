export interface Rocket {
  id: string;
  rocket_name: string;
  description: string;
  flickr_images: string[];
  wikipedia: string;
}

export interface RocketsReducer {
  items?: Rocket[] | string | null;
  isFetching: boolean;
}

export interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  wikipedia: string;
}

export interface RocketsReducer {
  items?: Rocket[] | string;
  isFetching: boolean;
}

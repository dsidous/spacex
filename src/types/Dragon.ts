export interface Dragon {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  wikipedia: string;
}

export interface DragonsReducer {
  items?: Dragon[] | string | null;
  isFetching: boolean;
}

export interface Artworks {
  pagination: Pagination;
  data: Artwork[];
  info: Info;
  config: Config;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Artwork {
  id: number;
  title: string;
  date_display: string;
  artist_display: string;
  provenance_text: string;
  image_id: string;
  place_of_origin: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

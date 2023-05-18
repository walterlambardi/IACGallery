export interface Artworks {
  data: Artwork[];
  config: Config;
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

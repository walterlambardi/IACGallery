import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';
import { EndPoints } from '../enums/endPoints';
import { Artwork, Artworks } from '../types/ArtWorkTypes';
import { artWorkFields } from '../utils/artWorkUtils';

const { artworks } = EndPoints;

type ArtworksData = {
  artworks: Artwork[];
  iiif_url: string;
};

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: builder => ({
    getGalleryArtWorks: builder.query<ArtworksData, number | void>({
      query: (page = 1) =>
        `${artworks}?fields=${artWorkFields}&page=${page}&limit=100`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: Artworks) => ({
        artworks: response?.data,
        iiif_url: response.config.iiif_url,
      }),
      merge: (currentCache, responseData) => {
        currentCache.artworks.push(...responseData.artworks);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetGalleryArtWorksQuery } = galleryApi;

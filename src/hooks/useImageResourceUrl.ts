import { useCallback } from 'react';
import { useAppSelector } from '../store';

export const useGetImageUrl = (resourceUrl: string) =>
  useCallback(
    (image: string, isFullSize: boolean = false) =>
      `${resourceUrl}/${image}/full/${
        isFullSize ? '843' : '200'
      },/0/default.jpg`,
    [resourceUrl],
  );

export const useResourceImageUrl = () =>
  useAppSelector(state => state.favorites.resourceImageUrl);

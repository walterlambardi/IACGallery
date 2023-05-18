import { useAppSelector } from '../store';

export const useFavorites = () =>
  useAppSelector(state => state.favorites.favorites);

export const useIsFavorite = (id: number) =>
  useAppSelector(state =>
    state.favorites.favorites.some(
      (artwork: { id: number }) => artwork.id === id,
    ),
  );

export const useFavoritesLength = () =>
  useAppSelector(state => state.favorites.favorites.length);

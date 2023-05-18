import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Artwork } from '../../types/ArtWorkTypes';

interface FavoritesState {
  favorites: Artwork[];
  resourceImageUrl: string;
}

const initialState: FavoritesState = {
  favorites: [],
  resourceImageUrl: '',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleIsFavorite: (state, action: PayloadAction<Artwork>) => {
      const isFavorite = state.favorites.some(
        artwork => artwork.id === action.payload.id,
      );
      if (isFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(
            artwork => artwork.id !== action.payload.id,
          ),
        };
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    },
    setImageResourceUrl: (state, action: PayloadAction<string>) => {
      return { ...state, resourceImageUrl: action.payload };
    },
  },
});

export const { toggleIsFavorite, setImageResourceUrl } = favoritesSlice.actions;

export default favoritesSlice.reducer;

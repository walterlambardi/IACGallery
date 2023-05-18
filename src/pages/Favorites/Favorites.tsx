import React from 'react';
import { useFavorites } from '../../hooks/useFavoritesHooks';
import ArtWorkList from '../../components/ArtWorkList';
import { Text, View } from 'react-native';
import styles from './favorites.style';

const NotResults = () => (
  <View style={styles.noResultsContainer}>
    <Text style={styles.noResultsText}>
      Oops! Looks like you haven't saved any favorites yet.
    </Text>
  </View>
);

const Favorites = () => {
  const favorites = useFavorites();
  return favorites.length > 0 ? (
    <ArtWorkList data={favorites} />
  ) : (
    <NotResults />
  );
};

export default Favorites;

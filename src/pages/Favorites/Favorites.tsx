import React from 'react';
import { useFavorites } from '../../hooks/useFavoritesHooks';
import ArtWorkList from '../../components/ArtWorkList';
import { StatusBar, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
        hidden={false}
      />
      <ArtWorkList data={favorites} />
    </View>
  ) : (
    <NotResults />
  );
};

export default Favorites;

import React from 'react';
import { useFavorites } from '../../hooks/useFavoritesHooks';
import ArtWorkList from '../../components/ArtWorkList';
import { StatusBar, View } from 'react-native';
import styles from './favorites.style';
import { Pages } from '../../enums/Pages';

const Favorites = ({ navigation }: any) => {
  const favorites = useFavorites();

  if (favorites.length === 0) {
    return navigation.navigate(Pages.GALLERY);
  }

  if (favorites.length > 0) {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent={true}
          hidden={false}
        />
        <ArtWorkList data={favorites} />
      </View>
    );
  }
};

export default Favorites;

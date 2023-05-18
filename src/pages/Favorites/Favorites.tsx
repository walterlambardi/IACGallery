import React, { useEffect } from 'react';
import { useFavorites } from '../../hooks/useFavoritesHooks';
import ArtWorkList from '../../components/ArtWorkList';
import { StatusBar, View } from 'react-native';
import styles from './favorites.style';
import { Pages } from '../../enums/Pages';

const Favorites = ({ navigation }: any) => {
  const favorites = useFavorites();

  useEffect(() => {
    if (favorites.length === 0) {
      navigation.navigate(Pages.GALLERY);
    }
  }, [favorites, navigation]);

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
};

export default Favorites;

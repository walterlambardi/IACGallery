import { Button, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './favorites.style';
import { useFavorites } from '../../hooks/useFavoritesHooks';
import ArtWorkList from '../../components/ArtWorkList';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.FAVORITES
>;

const Favorites = ({ navigation }: CreateAccountProps) => {
  const favorites = useFavorites();
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={navigation.goBack} />
      <ArtWorkList data={favorites || []} />
    </View>
  );
};

export default Favorites;

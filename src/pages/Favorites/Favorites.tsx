import { Button, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './favorites.style';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.FAVORITES
>;

const Favorites = ({ navigation }: CreateAccountProps) => {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={navigation.goBack} />
    </View>
  );
};

export default Favorites;

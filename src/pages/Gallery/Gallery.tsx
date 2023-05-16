import { Button, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './gallery.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.GALLERY
>;

const Gallery = ({ navigation }: CreateAccountProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(Pages.ARTWORK_DETAILS)}
      />
      <MaterialCommunityIcons name="home" color={'red'} size={50} />
      <Button
        title="Go to favorites"
        onPress={() => navigation.navigate(Pages.FAVORITES)}
      />
    </View>
  );
};

export default Gallery;

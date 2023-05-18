import { Image, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './artWorkDetails.style';
import {
  useGetImageUrl,
  useResourceImageUrl,
} from '../../hooks/useImageResourceUrl';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.ARTWORK_DETAILS
>;

const ArtWorkDetails = ({ route }: CreateAccountProps) => {
  const { artWork } = route.params;
  const {
    title,
    image_id,
    artist_display,
    date_display,
    provenance_text,
    place_of_origin,
  } = artWork;
  const resourceImgUrl = useResourceImageUrl();
  const getImageUrl = useGetImageUrl(resourceImgUrl);
  const ArtWorkImage = getImageUrl(image_id, true);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
        hidden={true}
      />
      <Image
        source={{
          uri: ArtWorkImage,
        }}
        style={styles.image}
      />
      <Text>title: {title}</Text>
      <Text>artist_display: {artist_display}</Text>
      <Text>date_display: {date_display}</Text>
      <Text>provenance_text: {provenance_text}</Text>
      <Text>place_of_origin: {place_of_origin}</Text>
    </View>
  );
};

export default ArtWorkDetails;

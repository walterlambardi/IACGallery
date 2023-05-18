import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './artWorkCard.style';
import { toggleIsFavorite } from '../../store/favorites';
import { useDispatch } from 'react-redux';
import { useIsFavorite } from '../../hooks/useFavoritesHooks';
import { Artwork } from '../../types/ArtWorkTypes';

interface IArtWorkProps {
  artWork: Artwork;
  artWorkImage: string;
  goToDetails: () => void;
}

const ArtWorkCard = ({ artWork, artWorkImage, goToDetails }: IArtWorkProps) => {
  const dispatch = useDispatch();
  const isFav = useIsFavorite(artWork?.id);

  return (
    <TouchableWithoutFeedback onPress={goToDetails}>
      <View style={styles.container}>
        <Text>id: {artWork?.id}</Text>
        <Text>title: {artWork?.title}</Text>
        <Text>image_id: {artWork?.image_id}</Text>
        <Text>artist_display: {artWork?.artist_display}</Text>
        <Text>date_display: {artWork?.date_display}</Text>
        <Image
          source={{
            uri: artWorkImage,
          }}
          style={styles.artWorkImage}
        />
        <TouchableWithoutFeedback
          onPress={() => dispatch(toggleIsFavorite(artWork))}>
          <Text>
            {'Set to Favorite'} {isFav && 'IS FAVORITE!'}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArtWorkCard;

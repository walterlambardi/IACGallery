import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ViewStyle,
  ImageBackground,
} from 'react-native';
import styles from './artWorkCard.style';
import { useIsFavorite } from '../../hooks/useFavoritesHooks';
import { Artwork } from '../../types/ArtWorkTypes';
import FavIcon from '../FavIcon';

interface IArtWorkProps {
  artWork: Artwork;
  artWorkImage: string;
  goToDetails: () => void;
  style?: ViewStyle;
}

const ArtWorkCard = ({
  artWork,
  artWorkImage,
  goToDetails,
  style,
}: IArtWorkProps) => {
  const { id, title, artist_display } = artWork;
  const isFav = useIsFavorite(id);
  const [imgError, setImgError] = useState(false);

  return !imgError ? (
    <TouchableWithoutFeedback onPress={goToDetails}>
      <View style={[styles.container, style]}>
        <ImageBackground
          source={{
            uri: artWorkImage,
          }}
          imageStyle={styles.artWorkImageStyle}
          style={styles.artWorkImage}
          resizeMode="cover"
          onError={() => setImgError(true)}>
          <View style={styles.content}>
            <Text style={styles.artWorktTitle} numberOfLines={3}>
              {title}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {artist_display}
            </Text>
          </View>
        </ImageBackground>
        <FavIcon
          artWork={artWork}
          isFav={isFav}
          style={styles.favContainer}
          iconStyle={styles.favIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

export default ArtWorkCard;

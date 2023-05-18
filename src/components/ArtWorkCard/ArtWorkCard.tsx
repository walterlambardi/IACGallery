import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ViewStyle,
  ImageBackground,
} from 'react-native';
import styles from './artWorkCard.style';
import { toggleIsFavorite } from '../../store/favorites';
import { useDispatch } from 'react-redux';
import { useIsFavorite } from '../../hooks/useFavoritesHooks';
import { Artwork } from '../../types/ArtWorkTypes';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, metrics } from '../../themes';

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
  const dispatch = useDispatch();
  const { id, title, artist_display } = artWork;
  const isFav = useIsFavorite(id);

  const favIcon = isFav ? 'ios-heart' : 'ios-heart-outline';
  return (
    <TouchableWithoutFeedback onPress={goToDetails}>
      <View style={[styles.container, style]}>
        <ImageBackground
          source={{
            uri: artWorkImage,
          }}
          imageStyle={styles.artWorkImageStyle}
          style={styles.artWorkImage}
          resizeMode="cover">
          <View style={styles.content}>
            <Text style={styles.artWorktTitle} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {artist_display}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.favContainer}>
          <TouchableWithoutFeedback
            onPress={() => dispatch(toggleIsFavorite(artWork))}>
            <View style={styles.favContent}>
              <Icon
                name={favIcon}
                size={20 * metrics.scaleCoefficient}
                color={colors.brand}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArtWorkCard;

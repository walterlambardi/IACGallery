import React from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './favIcon.style';
import { toggleIsFavorite } from '../../store/favorites';
import { Artwork } from '../../types/ArtWorkTypes';
import { colors } from '../../themes';
import { useDispatch } from 'react-redux';
import { BlurView } from '@react-native-community/blur';
import { isiOS } from '../../utils/platformUtils';

interface Props {
  artWork: Artwork;
  isFav: boolean;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
}

const FavIcon = ({ artWork, isFav, style, iconStyle }: Props) => {
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(toggleIsFavorite(artWork))}>
      <View style={[styles.rightIconContainer, style]}>
        <>
          {isiOS && (
            <BlurView
              blurAmount={5}
              blurType={'regular'}
              style={styles.blurView}
            />
          )}
          {!isiOS && <View style={styles.androidBlurView} />}
          <Icon
            name={isFav ? 'heart' : 'heart-outline'}
            style={[styles.rightIcon, iconStyle]}
            color={isFav ? colors.brand : colors.white}
          />
        </>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavIcon;

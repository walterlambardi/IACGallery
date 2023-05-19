import React, { useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './favoritesBadge.style';
import { useFavoritesLength } from '../../hooks/useFavoritesHooks';
import { useNavigation } from '@react-navigation/native';
import { Pages } from '../../enums/Pages';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { colors, metrics } from '../../themes';

type NavProps = NativeStackNavigationProp<RootStackParams, Pages.GALLERY>;

const FavoritesBadge = () => {
  const favLength = useFavoritesLength();
  const navigation = useNavigation<NavProps>();

  const handleNavToFavorites = useCallback(
    () => navigation.navigate(Pages.FAVORITES),
    [navigation],
  );

  if (!favLength) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavToFavorites}>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{favLength}</Text>
        </View>
        <Icon
          name="ios-heart-outline"
          size={28 * metrics.scaleCoefficient}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoritesBadge;

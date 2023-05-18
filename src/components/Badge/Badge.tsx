import React, { useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './badge.style';
import { useFavoritesLength } from '../../hooks/useFavoritesHooks';
import { useNavigation } from '@react-navigation/native';
import { Pages } from '../../enums/Pages';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';

type NavProps = NativeStackNavigationProp<RootStackParams, Pages.GALLERY>;

const Badge = () => {
  const favLength = useFavoritesLength();
  const navigation = useNavigation<NavProps>();

  const handleNavToFavorites = useCallback(
    () => navigation.navigate(Pages.FAVORITES),
    [navigation],
  );

  return (
    <TouchableWithoutFeedback onPress={handleNavToFavorites}>
      <View style={styles.container}>
        {favLength > 0 && (
          <View style={styles.countContainer}>
            <Text style={styles.count}>{favLength}</Text>
          </View>
        )}
        <Icon name="ios-heart-outline" size={28} color={'white'} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Badge;

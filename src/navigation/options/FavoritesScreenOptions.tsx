import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';
import HeaderBackButton from '../../components/HeaderBackButton';

export const FavoritesScreenOptions = () => {
  return {
    title: 'My Favorites',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerLeft: () => <HeaderBackButton />,
    headerTitleAlign: 'center',
  };
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.brand,
  },
  headerTitleStyle: {
    color: colors.white,
  },
});

import React from 'react';
import Badge from '../../components/Badge';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.brand,
  },
  headerTitleStyle: {
    color: colors.white,
  },
});

export const GalleryScreenOptions = () => {
  return {
    title: 'AIC Gallery',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: () => <Badge />,
    headerTitleAlign: 'center',
  };
};

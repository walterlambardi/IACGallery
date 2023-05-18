import React from 'react';
import Badge from '../../components/Badge';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.brand,
  },
  headerTitleStyle: {
    color: 'white',
  },
});

export const GalleryScreenOptions = () => {
  return {
    title: 'Art Institute of Chicago Gallery',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: () => <Badge />,
  };
};

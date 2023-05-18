import React from 'react';
import Badge from '../../components/Badge';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#B00836',
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

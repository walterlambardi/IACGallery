import React from 'react';
import FavoritesBadge from '../../components/FavoritesBadge';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';
import { RootStackParams } from '..';
import { RouteProp } from '@react-navigation/native';
import { Pages } from '../../enums/Pages';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type GalleryScreenOptionsProps = (props: {
  route: RouteProp<RootStackParams, Pages.GALLERY>;
  navigation: NativeStackNavigationProp<RootStackParams, Pages.GALLERY>;
}) => NativeStackNavigationOptions;

export const GalleryScreenOptions: GalleryScreenOptionsProps = () => {
  return {
    title: 'AIC Gallery',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: () => <FavoritesBadge />,
    headerTitleAlign: 'center',
    headerShadowVisible: true,
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

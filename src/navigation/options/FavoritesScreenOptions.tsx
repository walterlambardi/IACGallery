import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';
import HeaderBackButton from '../../components/HeaderBackButton';
import { Pages } from '../../enums/Pages';
import { RootStackParams } from '..';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type FavoritesScreenOptionsProps = (props: {
  route: RouteProp<RootStackParams, Pages.FAVORITES>;
  navigation: NativeStackNavigationProp<RootStackParams, Pages.FAVORITES>;
}) => NativeStackNavigationOptions;

export const FavoritesScreenOptions: FavoritesScreenOptionsProps = () => {
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

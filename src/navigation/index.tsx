import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pages } from '../enums/Pages';
import routes from './routes';
import { FavoritesScreenOptions } from './options/FavoritesScreenOptions';
import { GalleryScreenOptions } from './options/GalleryScreenOptions';
import { Artwork } from '../types/ArtWorkTypes';

export type RootStackParams = {
  [Pages.GALLERY]: undefined;
  [Pages.ARTWORK_DETAILS]: {
    artWork: Artwork;
  };
  [Pages.FAVORITES]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={Pages.GALLERY}
      component={routes[Pages.GALLERY]}
      options={GalleryScreenOptions}
    />
    <RootStack.Screen
      name={Pages.ARTWORK_DETAILS}
      component={routes[Pages.ARTWORK_DETAILS]}
    />
    <RootStack.Screen
      name={Pages.FAVORITES}
      component={routes[Pages.FAVORITES]}
      options={FavoritesScreenOptions}
    />
  </RootStack.Navigator>
);

export default MainNavigation;

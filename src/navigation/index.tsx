import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pages } from '../enums/Pages';
import routes from './routes';

export type RootStackParams = {
  [Pages.GALLERY]: undefined;
  [Pages.ARTWORK_DETAILS]: undefined;
  [Pages.FAVORITES]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Pages.GALLERY}
        component={routes[Pages.GALLERY]}
      />
      <RootStack.Screen
        name={Pages.ARTWORK_DETAILS}
        component={routes[Pages.ARTWORK_DETAILS]}
      />
      <RootStack.Screen
        name={Pages.FAVORITES}
        component={routes[Pages.FAVORITES]}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;

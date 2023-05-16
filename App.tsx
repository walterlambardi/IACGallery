import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';

const App = () => (
  <NavigationContainer
    onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
    <MainNavigation />
  </NavigationContainer>
);

export default App;

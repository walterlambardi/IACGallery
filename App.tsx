import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';
import { ErrorBoundary } from 'react-error-boundary';
import CustomFallback from './src/components/CustomFallback';

const App = () => (
  <ErrorBoundary FallbackComponent={CustomFallback}>
    <NavigationContainer
      onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
      <MainNavigation />
    </NavigationContainer>
  </ErrorBoundary>
);

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import CustomFallback from './src/components/CustomFallback';
import { store, persistor } from './src/store';
import MainNavigation from './src/navigation';

const App = () => (
  <ErrorBoundary FallbackComponent={CustomFallback}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default App;

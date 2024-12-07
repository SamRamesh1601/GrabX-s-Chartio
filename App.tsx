import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Style} from './src/Util/Style';
import { AuthProvider } from './src/Context/appContext';
import Routes from './src/Routes';

export default function App() {
  return (
    <GestureHandlerRootView style={Style.WrapperContainer}>
      <SafeAreaView style={Style.Container}>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

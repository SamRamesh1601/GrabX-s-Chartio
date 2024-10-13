import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/routes';
import {styles} from './src/utils/CommonStyles';
import {AuthProvider} from './src/context/appContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <RouteNavigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

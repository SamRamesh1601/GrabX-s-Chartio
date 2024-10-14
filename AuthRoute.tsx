import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Modules/Auth/Login';
import Signup from '../Modules/Auth/Signup';
import Verification from '../Modules/Auth/Verification';
import WelcomeUser from '../Modules/Auth/WelcomeScreen';
import WalkThrough from '../Modules/Auth/WalkThrough';
import {AuthRouteParamList} from './types';

export default function AuthRoute() {
  const Stack = createNativeStackNavigator<AuthRouteParamList>();
  return (
    <Stack.Navigator
      initialRouteName="WelcomeUser"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="WalkThrough" component={WalkThrough} />
    </Stack.Navigator>
  );
}

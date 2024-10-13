import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../modules/auth/welcomescreen';
import RegisterScreen from '../modules/auth/RegisterScreen';
import LoginScreen from '../modules/auth/LoginScreen';
import ForgetPassword from '../modules/auth/forgetPassword';
import IntroScreen from '../modules/auth/IntroScreen';
import {AuthRouteParamList} from './types';

const Stack = createNativeStackNavigator<AuthRouteParamList>();

export default function AuthRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forgot" component={ForgetPassword} />
    </Stack.Navigator>
  );
}

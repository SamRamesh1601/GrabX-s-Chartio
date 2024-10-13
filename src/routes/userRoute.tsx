import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../modules/common/Dashboard';
import {UserRouteParamList} from './types';

const Stack = createNativeStackNavigator<UserRouteParamList>();

export default function UserRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

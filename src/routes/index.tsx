import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoute from './authRoute';
import NotificationScreen from '../modules/common/notificationHome';
import UserRoute from './userRoute';
import {RootStackParamList} from './types';
import {useAppContext} from '../context/appContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RouteNavigation() {
  const {authenticated} = useAppContext();

  console.log(authenticated);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!authenticated ? (
        <Stack.Screen name="Auth" component={AuthRoute} />
      ) : (
        <Stack.Screen name="UserHome" component={UserRoute} />
      )}
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

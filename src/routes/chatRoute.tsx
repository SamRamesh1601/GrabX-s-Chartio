import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatRouteParamList} from './types';
import {useAppContext} from '../context/appContext';
import ChatScreen from '../modules/chat';

const Stack = createNativeStackNavigator<ChatRouteParamList>();

export default function ChatRoute() {
  const {authenticated} = useAppContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatHome" component={ChatScreen} />
    </Stack.Navigator>
  );
}

import React from 'react';

import Home from '../Modules/Coach/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CoachRouteParamList, RootStackParamList} from './types';
import SearchPlayer, {
  CoachSearchScreenProps,
} from '../Modules/Coach/SearchPlayer';
import SavedPlayers from '../Modules/Coach/SavedPlayers';
import Contact from '../Modules/Common/Contact';
import MyTabBar from '../Components/MyTabBar';
import MyProgram from '../Modules/Coach/MyProgram';
import {AppIconName} from '../Components/AppIcon/types';
import useProfile from '../Hooks/Common/useProfile';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useToast from '../Hooks/Utilities/useToast';
import {PlayerSearchContextWrapper} from '../Contexts/PlayerSearchContext';
import AppLoader from '../Components/AppLoader';

export type CoachRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'CoachRoute'
>;
export default function CoachRoute({navigation}: CoachRouteProps) {
  const Tab = createBottomTabNavigator<CoachRouteParamList>();
  const ShowToast = useToast();
  const {loading, deactivate} = useProfile({
    needInitialization: true,
  });

  const ContextWrappedPlayerSearch = React.useCallback(
    (props: CoachSearchScreenProps) => {
      return (
        <PlayerSearchContextWrapper>
          <SearchPlayer {...props} />
        </PlayerSearchContextWrapper>
      );
    },
    [],
  );

  const moreOptions = [
    {
      name: 'Message Board',
      route: 'MessageBoard',
      icon: 'envelope-square',
      bg: '#C5F442',
    },
    {
      name: 'Dashboard',
      route: 'CoachDashboard',
      icon: 'dashboard',
      bg: '#C5F442',
    },
    {
      name: 'My Account',
      route: 'MyAccount',
      icon: 'user-circle',
      bg: '#C5F442',
    },
    {
      name: 'Logout',
      route: 'Logout',
      icon: 'sign-out',
      bg: '#C5F442',
    },
  ];

  const iconList: AppIconName[] = [
    'Home',
    'MyProgram',
    'Search',
    'Saved',
    'Message',
  ];

  React.useEffect(() => {
    if (deactivate && deactivate != '0') {
      ShowToast('Account is deactivated!');
      navigation.replace('MyAccount');
    }
  }, [deactivate]);

  if (loading) {
    return <AppLoader loadingLabel="Please Wait, Fetching College Data" />;
  }

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, lazy: true}}
      initialRouteName="Home"
      tabBar={props => (
        <MyTabBar {...props} moreOptions={moreOptions} iconList={iconList} />
      )}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="MyProgram"
        component={MyProgram}
        options={{
          tabBarLabel: 'My Program',
        }}
      />
      <Tab.Screen
        name="SearchPlayer"
        component={ContextWrappedPlayerSearch}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="SavedPlayer"
        component={SavedPlayers}
        options={{
          tabBarLabel: 'Saved',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Messages',
        }}
      />
    </Tab.Navigator>
  );
}

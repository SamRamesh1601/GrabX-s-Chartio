import React from 'react';

import Home from '../Modules/Player/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchCollege from '../Modules/Player/SearchCollege';
import SavedColleges from '../Modules/Player/SavedColleges';

import MyTabBar from '../Components/MyTabBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BasicInfo from '../Modules/Player/MyProfile/BasicInfo';
import AcademicProfile from '../Modules/Player/MyProfile/AcademicProfile';
import TennisProfile from '../Modules/Player/MyProfile/TennisProfile';
import ECActivities from '../Modules/Player/MyProfile/ECActivities';
import CollegeChoices from '../Modules/Player/MyProfile/CollegeChoices';
import MyProfileHeader from '../Modules/Player/MyProfile/MyProfileHeader';
import useProfile from '../Hooks/Common/useProfile';
import Contact from '../Modules/Common/Contact';
import {CollegeSearchContextWrapper} from '../Contexts/CollegeSearchContext';
import {
  PlayerProfileTopTabParamList,
  PlayerRouteParamList,
  PlayerSearchScreenProps,
  RootStackParamList,
} from './types';
import {AppIconName} from '../Components/AppIcon/types';
import {IsValidData} from '../Utilities/Validator';
import useToast from '../Hooks/Utilities/useToast';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppLoader from '../Components/AppLoader';

function MyProfileTopTab() {
  const MaterialTopTab =
    createMaterialTopTabNavigator<PlayerProfileTopTabParamList>();
  return (
    <MaterialTopTab.Navigator
      tabBar={props => <MyProfileHeader {...props} />}
      initialRouteName="BasicInfo">
      <MaterialTopTab.Screen name="BasicInfo" component={BasicInfo} />
      <MaterialTopTab.Screen
        name="AcademicProfile"
        component={AcademicProfile}
      />
      <MaterialTopTab.Screen name="TennisProfile" component={TennisProfile} />
      <MaterialTopTab.Screen name="ECActivities" component={ECActivities} />
      <MaterialTopTab.Screen name="CollegeChoices" component={CollegeChoices} />
    </MaterialTopTab.Navigator>
  );
}

export type PlayerRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'PlayerRoute'
>;
export default function PlayerRoute({navigation}: PlayerRouteProps) {
  const ShowToast = useToast();
  const Tab = createBottomTabNavigator<PlayerRouteParamList>();
  const {percentage, basic_class, loading, deactivate} = useProfile({
    needInitialization: true,
  });
  const haveEnoughDetailsOfPlayer =
    IsValidData(percentage) && parseInt(percentage ?? '0') > 30;

  const ContextWrappedCollegeSearch = React.useCallback(
    (props: PlayerSearchScreenProps) => {
      return (
        <CollegeSearchContextWrapper>
          <SearchCollege {...props} />
        </CollegeSearchContextWrapper>
      );
    },
    [],
  );

  const defaultMoreOption = [
    {
      name: 'My Public Profile',
      route: 'MyPublicProfile',
      icon: 'share-alt-square',
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

  const moreOptionForProfileCompletionPlayer = [
    {
      name: 'Message Board',
      route: 'MessageBoard',
      icon: 'envelope-square',
      bg: '#C5F442',
    },
    {
      name: 'Dashboard',
      route: 'PlayerDashboard',
      icon: 'dashboard',
      bg: '#C5F442',
    },
  ];

  const moreOptions = haveEnoughDetailsOfPlayer
    ? [...moreOptionForProfileCompletionPlayer, ...defaultMoreOption]
    : defaultMoreOption;

  const iconList: AppIconName[] = [
    'Home',
    'MyProfile',
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
    return <AppLoader loadingLabel="Please Wait, Fetching Profile Data" />;
  }

  return (
    <Tab.Navigator
      initialRouteName={haveEnoughDetailsOfPlayer ? 'Home' : 'MyProfile'}
      screenOptions={{headerShown: false, lazy: true}}
      screenListeners={{
        tabPress: event => {
          if (!haveEnoughDetailsOfPlayer) {
            event.preventDefault();
            ShowToast(
              'Profile information is incomplete. Please complete as much profile information as you can to activate your profile',
            );
          } else if (!IsValidData(basic_class)) {
            event.preventDefault();
            ShowToast(
              'Profile information is incomplete. Please select Class Of(Availability)',
            );
          }
        },
      }}
      tabBar={props => (
        <MyTabBar moreOptions={moreOptions} iconList={iconList} {...props} />
      )}>
      <Tab.Screen
        listeners={{
          tabPress: event => {},
        }}
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileTopTab}
        options={{
          tabBarLabel: 'My Profile',
        }}
      />
      <Tab.Screen
        name="SearchCollege"
        component={ContextWrappedCollegeSearch}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="SavedCollege"
        component={SavedColleges}
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

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthRoute from './AuthRoute';
import CoachRoute, {CoachRouteProps} from './CoachRoute';
import PlayerRoute, {PlayerRouteProps} from './PlayerRoute';

import Logout from '../Modules/Auth/Logout';
import MyPost from '../Modules/Common/MyPost';
import ChatScreen from '../Modules/Common/Chat';
import ThankYou from '../Modules/Player/ThankYou';
import CoachBio from '../Modules/Player/CoachBio';
import MyAccount from '../Modules/Common/MyAccount';
import AuthLoader from '../Modules/Auth/AuthLoader';
import CoachNotes from '../Modules/Coach/CoachNotes';
import UploadImage from '../Modules/Common/UploadImage';
import UploadVideo from '../Modules/Common/UploadVideo';
import VideoPlayer from '../Modules/Common/VideoPlayer';
import CoachDashboard from '../Modules/Coach/Dashboard';
import PlayerDashboard from '../Modules/Player/Dashboard';
import MessageBoard from '../Modules/Common/MessageBoard';
import Subscription from '../Modules/Player/Subscription';
import PlayerDetailInfo from '../Modules/Coach/PlayerDetailInfo';
import CollegeDetailInfo from '../Modules/Player/CollegeDetailInfo';
import MyPublicProfile from '../Modules/Player/MyPublicProfile';
import UploadProfilePic from '../Modules/Common/UploadProfilePic';
import UploadYoutubeVideo from '../Modules/Common/UploadYoutubeVideo';
import CollegeConferenceList from '../Modules/Player/CollegeConferenceList';
import UploadPublicProfileCardImage from '../Modules/Player/MyPublicProfile/UploadPublicProfileCardImage';

import {AuthContextWrapper} from '../Contexts/AuthContext';
import {CoachContextWrapper} from '../Contexts/CoachContext';
import {PlayerContextWrapper} from '../Contexts/PlayerContext';
import {MessageBoardContextWrapper} from '../Contexts/MessageBoardContext';
import {PlayerDetailInfoContextWrapper} from '../Contexts/PlayerDetailInfoContext';
import {CollegeDetailInfoContextWrapper} from '../Contexts/CollegeDetailInfoContext';

import useAuthenticator from '../Hooks/Auth/useAuthenticator';

import Theme from '../Utilities/Theme';
import {PlayerDetailInfoScreenProps, RootStackParamList} from './types';

import type {CollegeDetailInfoScreenProps} from '../Types/Player/Screens';
import {IsValidData} from '../Utilities/Validator';
import {useAppContext} from '../Contexts/AppContext';

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {loading, isPlayer} = useAuthenticator({
    needInitialization: true,
  });
  const {user} = useAppContext();

  const ContextWrappedAuthRoute = React.useCallback(
    (props: React.JSX.IntrinsicAttributes) => {
      return (
        <AuthContextWrapper>
          <SafeAreaView style={{flex: 1, backgroundColor: Theme.Colors.white}}>
            <AuthRoute {...props} />
          </SafeAreaView>
        </AuthContextWrapper>
      );
    },
    [],
  );

  const ContextWrappedPlayerRoute = React.useCallback(
    (props: PlayerRouteProps) => {
      return (
        <PlayerContextWrapper>
          <SafeAreaView
            style={{flex: 1, backgroundColor: Theme.Colors.primary}}>
            <StatusBar backgroundColor={Theme.Colors.primary} />
            <PlayerRoute {...props} />
          </SafeAreaView>
        </PlayerContextWrapper>
      );
    },
    [],
  );

  const ContextWrappedMessageBoard = React.useCallback(
    (props: React.JSX.IntrinsicAttributes) => {
      return (
        <MessageBoardContextWrapper>
          <MessageBoard {...props} />
        </MessageBoardContextWrapper>
      );
    },
    [],
  );

  const ContextWrappedCoachRoute = React.useCallback(
    (props: CoachRouteProps) => {
      return (
        <CoachContextWrapper>
          <SafeAreaView
            style={{flex: 1, backgroundColor: Theme.Colors.primary}}>
            <CoachRoute {...props} />
          </SafeAreaView>
        </CoachContextWrapper>
      );
    },
    [],
  );

  const ContextWrappedPlayerDetailInfo = React.useCallback(
    (props: PlayerDetailInfoScreenProps) => {
      return (
        <PlayerDetailInfoContextWrapper>
          <PlayerDetailInfo {...props} />
        </PlayerDetailInfoContextWrapper>
      );
    },
    [],
  );

  const ContextWrappedCollegeDetailInfo = React.useCallback(
    (props: CollegeDetailInfoScreenProps) => {
      return (
        <CollegeDetailInfoContextWrapper>
          <CollegeDetailInfo {...props} />
        </CollegeDetailInfoContextWrapper>
      );
    },
    [],
  );

  if (loading) {
    return <AuthLoader />;
  }

  const isAuthenticated = IsValidData(user) && user?.user_status != '0';

  if (!isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthRoute" component={ContextWrappedAuthRoute} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isPlayer ? (
        <Stack.Screen
          name="PlayerRoute"
          component={ContextWrappedPlayerRoute}
        />
      ) : (
        <Stack.Screen name="CoachRoute" component={ContextWrappedCoachRoute} />
      )}
      <Stack.Screen name="PlayerDashboard" component={PlayerDashboard} />
      <Stack.Screen
        name="PlayerDetailInfo"
        component={ContextWrappedPlayerDetailInfo}
      />
      <Stack.Screen
        name="CollegeDetailInfo"
        component={ContextWrappedCollegeDetailInfo}
      />
      <Stack.Screen name="CoachDashboard" component={CoachDashboard} />
      <Stack.Screen
        name="MessageBoard"
        component={ContextWrappedMessageBoard}
      />
      <Stack.Screen name="MyPublicProfile" component={MyPublicProfile} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="MyPost" component={MyPost} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="UploadVideo" component={UploadVideo} />
      <Stack.Screen name="UploadYoutubeVideo" component={UploadYoutubeVideo} />
      <Stack.Screen name="UploadProfilePic" component={UploadProfilePic} />
      <Stack.Screen
        name="UploadPublicProfileCardImage"
        component={UploadPublicProfileCardImage}
      />
      <Stack.Screen name="CoachNotes" component={CoachNotes} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="ThankYou" component={ThankYou} />
      <Stack.Screen name="CoachBio" component={CoachBio} />
      <Stack.Screen
        name="CollegeConferenceList"
        component={CollegeConferenceList}
      />
    </Stack.Navigator>
  );
}

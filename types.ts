import {
  CompositeScreenProps,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {UserTypes} from '../Utilities/types';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface AppRouteStackParamList extends ParamListBase {
  AuthRoute: undefined;
  CoachRoute: undefined;
  PlayerRoute: undefined;
  CoachDashboard: undefined;
  PlayerDashboard: undefined;
  PlayerDetailInfo: {
    playerId: string;
    playerGender: string;
    favouriteId: string;
  };
  CollegeDetailInfo: {
    collegeId: string;
    playerGender: string;
    favouriteId: string;
  };
  MyPublicProfile: undefined;
  MyAccount: undefined;
  UploadImage: {
    documentId?: string;
    title?: string;
    thumbnailImage?: string;
    profileCardEdit?: boolean;
    requestFrom: string;
  };
  VideoPlayer: {
    uri?: string;
    thumbnail?: string;
    title?: string;
  };
  SearchFilterPlayer: undefined;
  MessageBoard: undefined;
  Logout: undefined;
  UploadVideo: {
    documentId?: string;
    thumbnailImage?: string;
    title?: string;
  };
  UploadYoutubeVideo: {
    documentId?: string;
    url?: string;
  };
  UploadProfilePic: {
    documentId?: string;
    thumbnail?: string;
  };
  CoachNotes: {
    playerId?: string;
    playerName?: string;
    playerClass?: string;
    playerAcademy?: string;
  };
  MyPost: undefined;
  CollegeConferenceList: undefined;
}

export interface AuthRouteParamList extends ParamListBase {
  Login: {
    userType: UserTypes;
  };
  Signup: {
    userType: UserTypes;
  };
  WelcomeUser: undefined;
  Verification: undefined;
  WalkThrough: undefined;
}

export interface PlayerRouteParamList extends ParamListBase {
  Home: undefined;
  MyProfile: undefined;
  SearchCollege: undefined;
  SavedCollege: undefined;
  Contact: undefined;
}

export interface CoachRouteParamList extends ParamListBase {
  Home: undefined;
  MyProfile: undefined;
  SearchPlayer: undefined;
  SavedPlayer: undefined;
  Contact: undefined;
}

export type PlayerProfileTopTabParamList = {
  BasicInfo: undefined;
  AcademicProfile: undefined;
  TennisProfile: undefined;
  ECActivities: undefined;
  CollegeChoices: undefined;
};

export type AuthStackParamList = {
  Login: {
    userType: UserTypes;
  };
  Signup: {
    userType: UserTypes;
  };
  WelcomeUser: undefined;
  Verification: {
    userId: string;
    userType: UserTypes;
    email: string;
  };
  WalkThrough: undefined;
};

export type PlayerTabParamList = {
  Home: undefined;
  MyProfile: NavigationProp<PlayerProfileTopTabParamList>;
  SearchCollege: undefined;
  SavedCollege: undefined;
  Contact: undefined;
};

export type CoachTabParamList = {
  Home: undefined;
  MyProgram: undefined;
  SearchPlayer: undefined;
  SavedPlayer: undefined;
  Contact: undefined;
};

export type RootStackParamList = {
  AuthRoute: NavigationProp<AuthStackParamList>;
  CoachRoute: undefined;
  PlayerRoute: undefined;
  MessageBoard: undefined;
  CoachDashboard: undefined;
  PlayerDashboard: undefined;
  SearchFilterPlayer: undefined;
  MyPublicProfile: undefined;
  MyAccount: undefined;
  MyPost: undefined;
  Logout: undefined;
  CoachBio: {
    coachId: string;
    coachName: string;
    coachRole: string;
    coachBio: string;
    coachImage: string;
  };
  ChatScreen: undefined;
  PlayerDetailInfo: {
    playerId: string;
    playerGender: string;
    favouriteId: string;
  };
  CollegeDetailInfo: {
    collegeId: string;
    playerGender: string;
    favouriteId: string;
  };
  UploadImage: {
    documentId?: string;
    title?: string;
    thumbnailImage?: string;
    profileCardEdit?: boolean;
    requestFrom: string;
  };
  VideoPlayer: {
    uri?: string;
    thumbnail?: string;
    title?: string;
  };
  UploadVideo: {
    documentId?: string;
    thumbnailImage?: string;
    title?: string;
  };
  UploadYoutubeVideo: {
    documentId?: string;
    url?: string;
  };
  UploadProfilePic: {
    documentId?: string;
    thumbnail?: string;
  };
  CoachNotes: {
    playerId?: string;
    playerName?: string;
    playerClass?: string;
    playerAcademy?: string;
  };
  UploadPublicProfileCardImage: {
    documentId: string;
    title: string;
    thumbnailImage: string;
  };
  Subscription: {};
  ThankYou: undefined;
  CollegeConferenceList: {
    conferenceId: string;
    conferenceName: string;
    conferenceImage: string;
  };
};

// Screens
export type PlayerHomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PlayerTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PlayerSavedCollegeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PlayerTabParamList, 'SavedCollege'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type SubscriptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Subscription'
>;

export type ThankYouScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ThankYou'
>;

export type PlayerSearchScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PlayerTabParamList, 'SearchCollege'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PlayerDetailInfoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PlayerDetailInfo'
>;

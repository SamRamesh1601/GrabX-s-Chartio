import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AuthRouteParamList,
  RootStackParamList,
  UserRouteParamList,
} from '../routes/types';

export default function useNavScreen() {
  const authNavigation = useNavigation<NavigationProp<AuthRouteParamList>>();
  const commonNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userNavigation = useNavigation<NavigationProp<UserRouteParamList>>();

  const HandleAuthNavigate = (name: keyof AuthRouteParamList) => {
    authNavigation.navigate(name);
  };

  const HandleCommonNavigate = (name: keyof RootStackParamList) => {
    commonNavigation.navigate(name);
  };
  const HandleUserNavigate = (name: keyof UserRouteParamList) => {
    userNavigation.navigate(name);
  };

  return {
    authNavigation,
    commonNavigation,
    userNavigation,
    HandleAuthNavigate,
    HandleCommonNavigate,
    HandleUserNavigate,
  };
}

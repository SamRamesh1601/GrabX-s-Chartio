import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRouteParamList} from './types';
import IntroScreen from '../Modules/auth/IntroScreen';
import WelcomeScreen from '../Modules/auth/welcomescreen';
import LoginScreen from '../Modules/auth/LoginScreen';
import RegisterScreen from '../Modules/auth/RegisterScreen';
import ForgetPassword from '../Modules/auth/forgetPassword';

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

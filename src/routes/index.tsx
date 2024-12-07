import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {useAppContext} from '../Context/appContext';
import ChatRoute from './ChatRoute';
import UserRoute from './UserRoute';
import NotificationScreen from '../Modules/common/notificationHome';
import AuthRoute from './AuthRoute';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  const {isAuthenticated} = useAppContext();
  console.log(isAuthenticated);

  if (isAuthenticated) {
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthRoute} />;
    </Stack.Navigator>;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chats" component={ChatRoute} />
      <Stack.Screen name="User" component={UserRoute} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

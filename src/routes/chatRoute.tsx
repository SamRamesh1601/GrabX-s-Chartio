import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatRouteParamList} from './types';
import {useAppContext} from '../Context/appContext';
import ChatScreen from '../Modules/chat';

const Stack = createNativeStackNavigator<ChatRouteParamList>();

export default function ChatRoute() {
  const {isAuthenticated} = useAppContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatHome" component={ChatScreen} />
    </Stack.Navigator>
  );
}

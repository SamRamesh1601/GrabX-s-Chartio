import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserRouteParamList} from './types';
import Dashboard from '../Modules/common/Dashboard';

const Stack = createNativeStackNavigator<UserRouteParamList>();

export default function UserRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

import {Permission, PermissionsAndroid} from 'react-native';
import {AndroidToast} from '../components/AppToast';

export default function useMobilePermissionRequest(
  permissionName: Permission,
  permissionSuccessToast: any,
) {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(permissionName, {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        AndroidToast(
          `Please give the Access the Of ${permissionSuccessToast} `,
        );
        return true;
      }
    } catch (error) {
      console.error('Error : ');
    }
  };
}

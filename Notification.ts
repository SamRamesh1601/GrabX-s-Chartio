import {LogLevel, OneSignal} from 'react-native-onesignal';
import Constant from './Constant';

/**
 * Initialize the OneSignal on this device
 */
export function OneSignalInitialization(platform: string) {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(Constant.ONESIGNAL_ID);
  platform === 'android' && OneSignal.Notifications.requestPermission(true);
  OneSignal.setConsentRequired(true);
  OneSignal.setConsentGiven(true);
  OneSignal.User.pushSubscription.optIn();
}

/**
 * Used to get the OneSignal info about this device
 * @returns An object contains pushToken, pushId, isSubscribed, isPushDisabled properties
 */
export async function GetDeviceState() {
  return {
    pushId: await OneSignal.User.pushSubscription.getIdAsync(),
    pushToken: await OneSignal.User.pushSubscription.getTokenAsync(),
    isSubscribed: await OneSignal.User.pushSubscription.getOptedInAsync(),
    isPushDisabled: !(await OneSignal.User.pushSubscription.getOptedInAsync()),
  };
}

/**
 * Used the get the boolean that indicates wheather the app has access to send the notifications
 * @returns Boolean
 */
export async function HasNotificationPermission() {
  return OneSignal.Notifications.getPermissionAsync();
}

/**
 * Clear all the notification
 */
export function ClearAllNotification() {
  OneSignal.Notifications.clearAll();
}

/**
 * Subscribe for receiving notification from OneSignal.
 *
 * The user can receive push notification only if the app has notification permission and the user is subscribed to the onesignal
 */
export function OneSignalSubscribeNotification() {
  OneSignal.User.pushSubscription.optIn();
}

/**
 * Unsubscribe from receiving push notification from OneSignal
 */
export function OneSignalUnsubscribeNotification() {
  OneSignal.User.pushSubscription.optOut();
}

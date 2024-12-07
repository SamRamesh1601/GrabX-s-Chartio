import React from 'react';
import {Linking} from 'react-native';
import {DefaultPhoneNumber} from './constants';

export const HandlePickImage = () => {
  // launchImageLibrary({mediaType: 'photo'}, response => {
  //   if (response.assets) {
  //     const image = response.assets[0];
  //     setChatMessages([...chatMessages, {image: image.uri, isSent: true}]);
  //   }
  // });
};

export const HandlePickVideo = () => {
  // launchImageLibrary({mediaType: 'video'}, response => {
  //   if (response.assets) {
  //     const video = response.assets[0];
  //     setChatMessages([...chatMessages, {video: video.uri, isSent: true}]);
  //   }
  // });
};

export const HandleCall = (number: string) => {
  try {
    const telUrl = `tel:${number || DefaultPhoneNumber}`;

    Linking.openURL(telUrl).catch(error => {
      // ToastMessaage('Incorrect Phone Number');
    });
  } catch (error) {
    console.log(error);
    // ToastMessaage('Error Calling Functionality');
  }
};

export const HandleMessage = (number: string) => {
  try {
    const smsUrl = `sms:${number || DefaultPhoneNumber}`;
    Linking.openURL(smsUrl).catch((error: any) => {
      // AppToast('Incorrect Phone Number');
      console.error(`Error sending SMS to ${smsUrl}: ${error}`);
    });
  } catch (error) {
    console.log(error);
    // ToastMessaage('Error Messaging Functionality ');
  }
};

const isEmptyString = (value: any) =>
  typeof value === 'string' && value.trim() === '';
const isEmptyArray = (value: any) => Array.isArray(value) && value.length === 0;
const isEmptyObject = (value: any) =>
  (typeof value === 'object' &&
    value !== null &&
    Object.keys(value).length === 0) ||
  Object.keys(Headers).length === 0;

export const useCheckData = (data: any) => {
  return React.useMemo(() => {
    if (data === null || data === undefined) {
      return false;
    }
    if (isEmptyString(data)) {
      return false;
    }
    if (isEmptyArray(data)) {
      return false;
    }
    if (isEmptyObject(data)) {
      return false;
    }
    return true;
  }, [data]);
};

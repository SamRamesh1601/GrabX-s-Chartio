import React from 'react';

import {
  getBrand,
  getModel,
  getUniqueId,
  getSystemVersion,
} from 'react-native-device-info';
import {useNetInfo} from '@react-native-community/netinfo';

import Theme from '../Utilities/Theme';
import {IsValidData} from '../Utilities/Validator';
import {GetCountry, GetTimeZone} from '../Utilities/Function';

import Toast from '../Components/Toast';

import {AppContextState, AppContextValue, ToastStateTypes} from './types';

export const AppContext = React.createContext<AppContextValue>({
  isInternetConnected: false,
  isAccountDeactivated: false,
  token: '',
  user: null,
  profile: null,
  defaultCoachProgram: 'male',
  setState: () => {},
  percentage: '',
  deviceInfo: {
    brand: '',
    model: '',
    uniqueId: '',
    timeZone: '',
    country: '',
    deviceVersion: '',
  },
  toast: [],
  setToast: () => {},
  matchedPlayers: [],
  matchedColleges: [],
  profileSaves: null,
  profileVisits: null,
});

export function AppContextWrapper({children}: {children: React.ReactNode}) {
  const [state, setState] = React.useState<AppContextState>({
    isInternetConnected: false,
    isAccountDeactivated: false,
    user: null,
    token: '',
    profile: null,
    percentage: '0%',
    defaultCoachProgram: 'male',
    deviceInfo: {
      brand: '',
      model: '',
      uniqueId: '',
      timeZone: '',
      country: '',
      deviceVersion: '',
    },
    matchedPlayers: [],
    matchedColleges: [],
    profileSaves: null,
    profileVisits: null,
  });

  const netInfo = useNetInfo();

  React.useEffect(() => {
    const deviceModel = getModel();
    const deviceBrand = getBrand();
    const deviceVersion = getSystemVersion();
    const country = GetCountry();
    const timeZone = GetTimeZone();

    getUniqueId().then(id =>
      setState(prev => ({
        ...prev,
        deviceInfo: {
          ...prev.deviceInfo,
          uniqueId: id,
          model: deviceModel,
          brand: deviceBrand,
          timeZone: timeZone,
          country: country,
          deviceVersion: deviceVersion,
        },
      })),
    );
  }, []);

  React.useEffect(() => {
    IsValidData(netInfo?.isConnected) &&
      setState(prev => ({
        ...prev,
        isInternetConnected: netInfo.isConnected ?? false,
      }));
  }, [netInfo?.isConnected]);

  const [toast, setToast] = React.useState<ToastStateTypes[]>([]);

  const contextValue = {...state, setState, toast, setToast};
  return (
    <AppContext.Provider value={contextValue}>
      {children}
      <Toast
        toast={toast}
        textColor={Theme.Colors.light}
        backgroundColor={Theme.Colors.black}
      />
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const contextValue = React.useContext(AppContext);
  return contextValue;
}

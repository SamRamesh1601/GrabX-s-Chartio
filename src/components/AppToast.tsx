import {Pressable, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {Fonts, Theme, SCREEN_WIDTH} from '../Util/Theme';
import React from 'react';
import AppIcon from './AppIcon';
import {AppToastProps} from './types';

export const AndroidToast = (message: string) => {
  ToastAndroid.show(message, ToastAndroid.BOTTOM);
};

export const useToast = () => {
  const [toastToggle, setToastToggle] = React.useState(false);

  const OnToastClose = () => {
    setToastToggle(false);
  };
  const OnToastOpen = () => {
    setToastToggle(true);
  };

  return {
    toastToggle,
    setToastToggle,
    OnToastClose,
    OnToastOpen,
  };
};

export default function AppToast({
  visible,
  message,
  toastType = 'Success',
  OnClose,
}: AppToastProps) {
  const toastColor =
    toastType === 'Error'
      ? '#FF232188'
      : toastType === 'Success'
      ? '#00CC0088'
      : '#00CCCC88';

  React.useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      OnClose();
    }, 15000);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={OnClose}
        style={[styles.toastContainer, {backgroundColor: toastColor}]}>
        {toastType === 'Info' && (
          <AppIcon
            group={'Ant'}
            name={'aliwangwang-o1'}
            style={styles.iconStyles}
          />
        )}
        {toastType === 'Error' && (
          <AppIcon
            group={'Feat'}
            name={'thumbs-down'}
            style={styles.iconStyles}
          />
        )}
        {toastType === 'Success' && (
          <AppIcon
            group={'Feat'}
            name={'check-circle'}
            style={styles.iconStyles}
          />
        )}
        <Text style={styles.textStyles}>{message}</Text>
        <AppIcon
          group={'Ioni'}
          name={'close'}
          style={{...styles.iconStyles, ...styles.closeIcon}}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '5%',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastContainer: {
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: Fonts.ScaleFonts(10),
    color: Theme.colors.white,
    width: '55%',
  },
  iconStyles: {
    fontSize: Fonts.ScaleFonts(16),
    color: Theme.colors.white,
  },
  closeIcon: {
    fontSize: Fonts.ScaleFonts(20),
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import AppText from './AppText';
import AppImage from './AppImage';
import {AppEmptyContainerProps} from './types';
import {Fonts, SCREEN_HEIGHT} from '../Util/Theme';

export const EmptyContentImg = `https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png`;

export default function AppEmptyContainer({
  path = '',
  imageType = 'online',
  title = '',
  description = '',
  titleStyle = {},
  descriptionStyle = {},
  wrapperstyle = {},
}: AppEmptyContainerProps) {
  return (
    <View style={Style.Container}>
      <AppImage
        path={path || EmptyContentImg}
        imageType={imageType}
        wrapperstyle={wrapperstyle || Style.Image}
      />
      <AppText style={Style.PrimaryTxt} text={'No Messages'} />
      <AppText
        style={Style.SecondaryTxt}
        text={'Chat with Mentor or Friends'}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  Container: {
    width: '100%',
    height: SCREEN_HEIGHT / 1.2,
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: '60%',
    objectFit: 'contain',
  },
  PrimaryTxt: {
    color: '#EEE',
    fontFamily: Fonts.Bold.secondary,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 600,
  },
  SecondaryTxt: {
    color: '#888',
    fontFamily: Fonts.Bold.monoText,
    fontSize: Fonts.ScaleFonts(15),
    fontWeight: 600,
  },
});

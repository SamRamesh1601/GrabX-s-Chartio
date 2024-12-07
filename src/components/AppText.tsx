import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts, Theme} from '../Util/Theme';
import {AppTextProps} from './types';

export default function AppText({
  text,
  children,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children ? children : text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Regular.primary,
    fontSize: Fonts.ScaleFonts(16),
    color: Theme.colors.black,
  },
});

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  Pressable,
} from 'react-native';
import React from 'react';
import {Fonts, Theme} from '../utils/Theme';
import {AppButtonOpacityProps, AppButtonProps} from './types';

export default function AppButton({
  title,
  textStyle = {},
  ...props
}: AppButtonProps) {
  return (
    <Pressable {...props}>
      <Text
        style={[
          {
            color: Theme.colors.white,
            fontFamily: Fonts.Bold.monoText,
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
}

export const AppButtonOpacity = ({
  title,
  textStyle = {},
  ...props
}: AppButtonOpacityProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={[
          {
            color: Theme.colors.white,
            fontFamily: Fonts.Bold.monoText,
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

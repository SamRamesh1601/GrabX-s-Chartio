import {Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {Fonts, Theme} from '../Util/Theme';
import {AppButtonOpacityProps, AppButtonProps} from './types';

export default function AppButton({
  title = '',
  textStyle = {},
  children,
  key = 0,
  ...props
}: AppButtonProps) {
  return (
    <Pressable key={key} {...props}>
      {!title && children ? (
        children
      ) : (
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
      )}
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

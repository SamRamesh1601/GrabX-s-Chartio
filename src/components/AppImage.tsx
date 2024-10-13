import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AppImageProps} from './types';

export default function AppImage({
  path,
  imageType,
  wrapperstyle,
  ...ImageProps
}: AppImageProps) {
  const isOnline = imageType === 'online';
  return (
    <View style={[styles.wrapper, wrapperstyle]}>
      <Image
        source={isOnline ? {uri: path} : path}
        style={[styles.image]}
        resizeMode="contain"
        {...ImageProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

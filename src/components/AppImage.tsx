import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AppImageProps} from './types';
import {DefaultUserImage} from '../Util/constants';

export default function AppImage({
  path,
  imageType,
  wrapperstyle,
  ...ImageProps
}: AppImageProps) {
  const isOnline = imageType === 'online';
  const [imageSource, setImageSource] = React.useState(
    isOnline ? {uri: path} : path,
  );

  const HandleImageError = () => {
    setImageSource(DefaultUserImage);
  };

  return (
    <View style={[styles.wrapper, wrapperstyle]}>
      <Image
        source={imageSource || DefaultUserImage}
        style={[styles.image]}
        resizeMode="contain"
        onError={HandleImageError}
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

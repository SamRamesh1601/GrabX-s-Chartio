import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppIcon from '../../Components/AppIcon';
import {Fonts, Theme} from '../../Util/Theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>The World is Full Of Lies</Text>
      <AppIcon style={styles.iconStyles} name={'dingding'} group={'Ant'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyles: {
    fontSize: Fonts.ScaleFonts(50),
    color: Theme.colors.darken,
  },
  textStyles: {
    color: Theme.colors.magic,
    fontFamily: Fonts.Regular.primary,
    fontSize: Fonts.ScaleFonts(50),
    marginBottom: 50,
  },
});

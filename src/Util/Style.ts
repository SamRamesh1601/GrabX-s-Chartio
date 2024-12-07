import {StyleSheet} from 'react-native';
import {Theme} from './Theme';

export const Style = StyleSheet.create({
  WrapperContainer: {
    flex: 1,
  },
  Container: {
    flex: 1,
    backgroundColor: Theme.colors.darken,
  },
});

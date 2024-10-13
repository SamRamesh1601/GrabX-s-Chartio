import React from 'react';
import {StyleSheet} from 'react-native';
import Iconions from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../utils/Theme';
import {AppIconProps} from './types';

export default function AppIcon({name, style, group = 'Ioni'}: AppIconProps) {
  let IconComponent;

  switch (group) {
    case 'FontAwesV1':
      IconComponent = FontAwesome;
      break;
    case 'FontAwesV5':
      IconComponent = FontAwesome5Icon;
      break;
    case 'FontAwesV6':
      IconComponent = FontAwesome6Icon;
      break;
    case 'MatIcon':
      IconComponent = MaterialIcons;
      break;
    case 'Ant':
      IconComponent = AntDesignIcon;
      break;
    case 'Fonti':
      IconComponent = Fontisto;
      break;
    case 'SimLine':
      IconComponent = SimpleLineIcons;
      break;
    case 'Feat':
      IconComponent = Feather;
      break;
    case 'MatCom':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'Octi':
      IconComponent = Octicons;
      break;
    case 'Ent':
      IconComponent = Entypo;
      break;
    default:
      IconComponent = Iconions;
      break;
  }

  return (
    <IconComponent
      name={name}
      style={[style ? style : defaultStyles.iconStyles]}
    />
  );
}

const defaultStyles = StyleSheet.create({
  iconStyles: {
    fontSize: Fonts.ScaleFonts(16),
  },
});

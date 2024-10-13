import {
  TouchableOpacityProps,
  TextStyle,
  PressableProps,
  ViewStyle,
  ImageProps,
  TextProps,
} from 'react-native';

export interface AppButtonProps extends PressableProps {
  title: string;
  textStyle: TextStyle;
}

export interface AppButtonOpacityProps extends TouchableOpacityProps {
  title: string;
  textStyle: TextStyle;
}

export interface AppIconProps {
  name: string;
  style?: ViewStyle | TextStyle;
  group?:
    | 'FontAwesV1'
    | 'FontAwesV5'
    | 'FontAwesV6'
    | 'MatIcon'
    | 'Ioni'
    | 'Octi'
    | 'Ant'
    | 'Fonti'
    | 'MatCom'
    | 'Feat'
    | 'SimLine'
    | 'Ent';
}

export interface AppImageProps extends ImageProps {
  path: any;
  imageType: 'online' | 'path';
  wrapperstyle: ViewStyle;
}

export interface AppTextProps extends TextProps {
  text: string;
  style: TextStyle;
}

export interface AppToastProps {
  visible: boolean;
  message: string;
  OnClose: () => void;
  toastType?: 'Error' | 'Success' | 'Info';
}

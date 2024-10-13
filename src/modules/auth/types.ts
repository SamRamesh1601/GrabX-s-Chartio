import {Animated} from 'react-native';

export interface RegisterScreenProps {
  username: string;
  password: string;
}

export interface RenderContentProps {
  data: SlideItemProps[];
  scrollX: Animated.Value;
  handleNavigation: () => void;
}

export interface DotProps {
  data: any[];
  scrollX: Animated.Value;
}

export interface SlideItemProps {
  img: string;
  title: string;
  description: string;
}

export interface AuthValueProps {
  username: string;
  password: string;
}

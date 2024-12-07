import {Dimensions, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const MIN_WID = 375;
const MIN_HGT = 667;
const WID_SCALE = SCREEN_WIDTH / MIN_WID;
const HGH_SCALE = SCREEN_HEIGHT / MIN_HGT;

const HorizontalScale = (size: number) => WID_SCALE * size;
const VerticalScale = (size: number) => HGH_SCALE * size;
const isPortrait = SCREEN_HEIGHT > SCREEN_WIDTH;
const Factor = 0.3;
const ModerateScale = (size: number) => {
  if (isPortrait) {
    return size + (HorizontalScale(size) - size) * Factor;
  } else {
    return size + (VerticalScale(size) - size) * Factor;
  }
};

export const Fonts = {
  Regular: {
    primary: 'Lexend-Regular',
    secondary: 'Poppins-Regular',
    monoText: 'RobotoMono-Regular',
    serifText: 'RobotoSlab-Regular',
  },
  Bold: {
    primary: 'Lexend-SemiBold',
    secondary: 'Poppins-SemiBold',
    monoText: 'RobotoMono-SemiBold',
    serifText: 'RobotoSlab-SemiBold',
  },
  ScaleFonts: (size: number) => {
    const newSize = size * Math.min(WID_SCALE, HGH_SCALE);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  },
  ModerateScale: ModerateScale,
};

type ThemeProps = 'dark' | 'light';

const THEME_CONTEXT: ThemeProps = 'dark';

export const Theme = {
  colors: {
    ...(THEME_CONTEXT === 'dark'
      ? {
          primary: '#3D30A2',
          secondary: '#B15EFF',
          dark: '#111',
          darken: '#FFA33C',
          magic: '#FFFB73',
        }
      : {
          primary: 'red',
          secondary: 'blue',
          dark: '#333',
          darken: 'yellow',
          magic: 'green',
        }),
    lightPrimary: '#FFEAE3',
    lightBlue: '#00A9FF',
    white: '#FFF',
    gray: '#666',
    lightGray: 'lighgray',
    black: '#000',
    transprent: 'rgba(244, 244, 244, .5)',
  },
};

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const HorizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const VerticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const isPortrait = height > width;
const ModerateScale = (size: number, factor = 0.3) => {
  if (isPortrait) {
    return size + (HorizontalScale(size) - size) * factor;
  } else {
    return size + (VerticalScale(size) - size) * factor;
  }
};

const Theme = {
  Colors: {
    /* Blue shades */
    primary: '#0275DB',
    lightBlue: '#009DD9',
    skyBlue: '#54a1e3',

    /* Green shades */
    success: '#19CF12',
    lightGreen: '#4CD963',

    /* Gray shades */
    secondary: '#D8D8D8',
    tranparent: 'rgba(255,255,255,0.8)',
    darkTransparent: 'rgba(0,0,0,0.7)',
    gray: '#888',
    lightGray: 'rgb(235, 235, 235)',

    /* Red shades */
    danger: 'red',

    /* Yellow shades */
    warning: '',

    /* Black shades */
    dark: '#343A40',
    black: '#020202',

    /* White shades */
    light: '#F8F9FA',
    white: '#FFFFFF',
  },
  Fonts: {
    Dimensions: {
      screenHeight: height,
      screenWidth: width,
      smallest: height > width ? width : height,
      largest: height > width ? height : width,
    },
    Type: {
      SFUIDisplayBold: 'SFUIDisplay-Bold',
      SFUIDisplaySemibold: 'SFUIDisplay-Semibold',
      SFUIDisplayRegular: 'SFUIDisplay-Regular',
      SFUIDisplayMedium: 'SFUIDisplay-Medium',
      helveticaRegular: 'Helvetica',
      helveticaBold: 'Helvetica-Bold',
      robotoRegular: 'Roboto-Regular',
      robotoMedium: 'Roboto-Medium',
    },
    ModerateScale: ModerateScale,
  },
};

export default Theme;

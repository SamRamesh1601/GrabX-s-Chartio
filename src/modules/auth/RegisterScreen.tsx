import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  GestureResponderEvent,
} from 'react-native';
import React, {useRef} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AppIcon from '../../components/AppIcon';
import {RegisterScreenProps} from './types';
import {AuthRouteParamList} from '../../routes/types';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import creaditialsData from '../../data/creaditials-data.json';
// import {ToastMessaage} from '../util/additonalUiBlock';
// import LinearGradient from 'react-native-linear-gradient';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function RegisterScreen() {
  const [isAuthPhone, setIsAuthPhone] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [authValue, setAuthValue] = React.useState<RegisterScreenProps | any>({
    password: '',
    username: '',
  });
  const [error, setError] = React.useState<RegisterScreenProps | any>({
    password: '',
    username: '',
  });
  const [loading, setLoading] = React.useState({});

  const navigation = useNavigation<NavigationProp<AuthRouteParamList>>();
  const HandleNavigation = (name: keyof AuthRouteParamList) => {
    navigation.navigate(name);
  };

  function handleFocusOnInput(userRef: any): void {
    throw new Error('Function not implemented.');
  }

  function handlePhoneInput(arg0: string, text: string): void {
    throw new Error('Function not implemented.');
  }

  function handleGoogleLogin(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  // React.useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: creaditialsData.client_id,
  //     androidClientId: creaditialsData.Android_Client_Id,
  //   });
  // }, []);

  // const handlePhoneInput = (name, text) => {
  //   const onChangeDetails = {...authValue};
  //   if (name === 'phoneNumber') {
  //     const formatted = text
  //       .replace(/[^0-9]/g, '')
  //       .replace(/(\d{3})(\d{4})(\d{3})/, '$1 $2 $3');
  //     onChangeDetails[name] = formatted;
  //   } else {
  //     onChangeDetails[name] = text;
  //     if (name === 'password' && !text) setShowPassword(false);
  //   }
  //   setAuthValue(onChangeDetails);
  // };

  // const GoogleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     return userInfo;
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       ToastMessaage('User cancelled Google sign-in');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       ToastMessaage('Google sign-in is already in progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       ToastMessaage('Play Services not available or outdated');
  //     } else {
  //       console.log('Error occurred during Google sign-in:', error);
  //     }
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await GoogleLogin();
  //     console.log(response);
  //     setAuthValue(response);

  //     ToastMessaage('Verifying Data with Google');
  //   } catch (apiError) {
  //     console.log(apiError);
  //     ToastMessaage(
  //       apiError?.response?.data?.error?.message || 'Something went wrong',
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };
  // const userRef = useRef();
  // const phoneRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const handleFocusOnInput = ref => {
  //   if (ref) {
  //     ref.current.focus();
  //   }
  // };

  return (
    <View style={styles.loginScreenStyle}>
      <KeyboardAvoidingView
        style={{
          ...styles.blurContainar,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 500,
        }}>
        <View style={styles.textContainar}>
          <AppIcon
            group={'MatCom'}
            style={{
              ...styles.textStyle,
              color: '#555',
              fontFamily: 'Lexend-Bold',
              fontSize: 45,
              opacity: 1,
              marginVertical: 5,
            }}
            name="star-shooting-outline"
          />

          <Text
            style={{
              ...styles.textStyle,
              color: '#444',
              fontFamily: 'Lexend-Bold',
              fontSize: 37,
              opacity: 1,
            }}>
            Let's Build & Go
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              color: '#444',
              fontFamily: 'JetBrainsMono-Regular',
            }}>
            Create Account
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            rowGap: 15,
          }}>
          <TouchableOpacity
            onPress={() => handleFocusOnInput(useRef)}
            style={{
              ...styles.shadowEffectStyle,
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <AppIcon
              group={'Fonti'}
              style={{
                ...styles.textStyle,
                color: '#222',
                fontSize: 22,
              }}
              name="user-secret"
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#222'}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#222',
              }}
            />
          </TouchableOpacity>
          {error?.username && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  ...styles.textStyle,
                  paddingVertical: 0,
                  fontSize: 12,
                  color: '#FFF',
                }}>
                {error?.username}
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={{
              ...styles.shadowEffectStyle,
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <AppIcon
              group={'MatIcon'}
              style={{
                ...styles.textStyle,
                color: '#222',
                fontSize: 22,
              }}
              name="alternate-email"
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#222'}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#222',
              }}
            />
          </TouchableOpacity>
          {error?.email && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  ...styles.textStyle,
                  paddingVertical: 0,
                  fontSize: 12,
                  color: '#FFF',
                }}>
                {error?.email}
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={{
              ...styles.shadowEffectStyle,
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <AppIcon
              group={'Feat'}
              style={{
                ...styles.textStyle,
                color: '#000',
                fontSize: 22,
              }}
              name="phone-call"
            />
            <TextInput
              placeholder="000 0000 0000"
              placeholderTextColor={'#222'}
              keyboardType="phone-pad"
              enablesReturnKeyAutomatically
              numberOfLines={1}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#222',
              }}
            />
          </TouchableOpacity>
          {error?.phoneNumber && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  ...styles.textStyle,
                  paddingVertical: 0,
                  fontSize: 12,
                  color: '#FFF',
                }}>
                {error?.phoneNumber}
              </Text>
            </View>
          )}
          <View
            style={{
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <TouchableOpacity>
              <AppIcon
                group={'MatCom'}
                style={{
                  ...styles.textStyle,
                  color: '#000',
                  fontSize: 22,
                }}
                name="fingerprint"
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Password"
              secureTextEntry={showPassword ? false : true}
              placeholderTextColor={'#000'}
              style={{
                width: '75%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#000',
              }}
            />
            <TouchableOpacity>
              <AppIcon
                group={'Octi'}
                style={{
                  ...styles.textStyle,
                  color: '#000',
                  fontSize: 22,
                }}
                name={showPassword ? 'eye-closed' : 'eye'}
              />
            </TouchableOpacity>
          </View>
          {error?.password && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  ...styles.textStyle,
                  paddingVertical: 0,
                  fontSize: 12,
                  color: '#FFF',
                }}>
                {error?.password}
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            width: SCREEN_WIDTH / 1.1,
            paddingHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 15,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: 15,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                }}>
                Already Have an Account? Login
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              ...styles.textStyle,
              fontSize: 12,
              marginTop: 15,
              color: '#000',
              textAlign: 'center',
            }}>
            OR
          </Text>
          <View
            style={{
              width: SCREEN_WIDTH,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              columnGap: 25,
              rowGap: 15,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: '#222',
                padding: 15,
                paddingHorizontal: 25,
                borderRadius: 50,
                columnGap: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppIcon
                group={'MatCom'}
                style={{
                  ...styles.textStyle,
                  color: '#222',
                  fontSize: 22,
                }}
                name="google-podcast"
              />
              <Text
                style={{
                  ...styles.textStyle,
                  color: '#222',
                  fontSize: 13,
                }}>
                Continue with Google Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenStyle: {
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
    flex: 1,
  },
  blurContainar: {
    width: '100%',
    height: '100%',
    rowGap: 25,
    flex: 1,
  },
  textContainar: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    rowGap: 0,
  },
  textStyle: {
    color: '#222',
    fontFamily: 'Lexend-Bold',
    fontSize: 35,
    opacity: 1,
  },
  buttonStyle: {
    borderRadius: 35,
    backgroundColor: '#FF0',
    width: SCREEN_WIDTH / 1.1,
    height: SCREEN_HEIGHT / 13,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainar: {
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    rowGap: 20,
  },
  textBoxContainar: {
    backgroundColor: '#050505',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    flexDirection: 'row',
    columnGap: 20,
    borderRadius: 5,
  },
  shadowEffectStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 2,
  },
});

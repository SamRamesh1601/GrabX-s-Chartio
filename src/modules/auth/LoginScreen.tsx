import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, Theme} from '../../utils/Theme';
import AppIcon from '../../components/AppIcon';
import {AuthRouteParamList} from '../../routes/types';
import {useAppContext} from '../../context/appContext';
import {AddStorage} from '../../hooks/useStorage';
import {AuthValueProps} from './types';
import useNavScreen from '../../hooks/useNavScreen';

// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {ToastMessaage} from '../util/additonalUiBlock';
// import creaditialsData from '../../data/creaditials-data.json';
// import useUpdateEffect from '../Hooks/useUpdateEffect';

export default function LoginScreen() {
  const [isAuthPhone, setIsAuthPhone] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [authValue, setAuthValue] = React.useState<AuthValueProps>({
    username: '',
    password: '',
  });
  const [loading, setLoading] = React.useState({});
  // const navigation = useNavigation<NavigationProp<AuthRouteParamList>>();
  // const HandleNavigation = (name: keyof AuthRouteParamList) => {
  //   navigation.navigate(name);
  // };
  const {authNavigation, HandleAuthNavigate} = useNavScreen();

  const {setState: setAppContext} = useAppContext();

  const OnChangeState = (key: keyof AuthValueProps, value: any) => {
    const newState = {
      ...authValue,
      [key]: value,
    };
    console.log(newState);
    setAuthValue((prev: any) => ({
      ...prev,
      ...newState,
    }));
  };

  const OnSubmit = () => {
    if (!authValue?.username || !authValue?.password) {
      return;
    }
    const newState = {...authValue};
    setAppContext((prev: any) => ({
      ...prev,
      ...newState,
    }));
    AddStorage(newState);
    console.log('working ');
    authNavigation.goBack();
  };

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
  //     if (name === 'password' && !text) setShowPassword(false);
  //     onChangeDetails[name] = text;
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
  //     setAuthValue(response);

  //     ToastMessaage('Verifying Data with Google');
  //   } catch (apiError) {
  //     ToastMessaage(
  //       apiError?.response?.data?.error?.message || 'Something went wrong',
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={{
        ...styles.blurContainar,
        justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: Theme.colors.secondary,
      }}>
      <View style={styles.textContainar}>
        <Text style={styles.textStyle}>Welcome Back,</Text>
        <Text
          style={{
            ...styles.textStyle,
            color: '#FF0',
            fontFamily: 'Lexend-SemiBold',
            fontSize: 50,
            opacity: 0.9,
          }}>
          Shine Star
        </Text>
      </View>

      {!isAuthPhone ? (
        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            rowGap: 15,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#222',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <AppIcon
              group={'Fonti'}
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 22,
              }}
              name="user-secret"
            />
            <TextInput
              placeholder="username"
              placeholderTextColor={'#777'}
              onChangeText={(text: string) => OnChangeState('username', text)}
              value={authValue?.username || ''}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#FFF',
              }}
            />
          </TouchableOpacity>
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
              placeholder="password"
              onChangeText={(text: string) => OnChangeState('password', text)}
              secureTextEntry={showPassword ? false : true}
              value={authValue?.password || ''}
              placeholderTextColor={'#000'}
              style={{
                width: '75%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#000',
              }}
              onSubmitEditing={OnSubmit}
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
        </View>
      ) : (
        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            rowGap: 15,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              paddingHorizontal: 15,
              borderRadius: 4,
              paddingVertical: 10,
              backgroundColor: '#222',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 15,
            }}>
            <AppIcon
              group={'MatCom'}
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 22,
              }}
              name="dialpad"
            />
            <TextInput
              placeholder="000 0000 0000"
              placeholderTextColor={'#FFF'}
              keyboardType="phone-pad"
              enablesReturnKeyAutomatically
              numberOfLines={1}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#FFF',
              }}
            />
          </TouchableOpacity>
        </View>
      )}

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
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 15,
                color: '#FF0',
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 15,
                color: '#FFF',
              }}>
              forget password
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            ...styles.textStyle,
            fontSize: 12,
            marginTop: 15,
            color: '#FFF',
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
              borderColor: 'white',
              padding: 15,
              paddingHorizontal: 25,
              borderRadius: 50,
              columnGap: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setIsAuthPhone(!isAuthPhone)}>
            {
              <AppIcon
                group={'MatCom'}
                style={{
                  ...styles.textStyle,
                  color: '#FFF',
                  fontSize: 22,
                }}
                name={isAuthPhone ? 'fingerprint' : 'dialpad'}
              />
            }
            <Text
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 13,
              }}>
              Continue with {isAuthPhone ? 'Username' : 'Phone-Number'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: 'white',
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
                color: '#FFF',
                fontSize: 22,
              }}
              name="google-podcast"
            />
            <Text
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 13,
              }}>
              Continue with Google Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginScreenStyle: {
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
    rowGap: 2,
  },
  textStyle: {
    color: '#FFF',
    fontFamily: 'Lexend-Regular',
    fontSize: 30,
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
});

{
  /* <View style={styles.inputContainar}>
          <View style={styles.textBoxContainar}>
            <Fontisto
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 22,
              }}
              name="user-secret"
            />
            <TextInput
              placeholder="username"
              placeholderTextColor={'#777'}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#FFF',
                ...styles.textBox,
              }}
            />
          </View>
          <View style={styles.textBoxContainar}>
            <FontAwesome6
              style={{
                ...styles.textStyle,
                color: '#FFF',
                fontSize: 22,
              }}
              name="fingerprint"
            />
            <TextInput
              placeholder="password"
              placeholderTextColor={'#777'}
              style={{
                width: '85%',
                fontFamily: 'Lexend-Regular',
                fontSize: 18,
                color: '#FFF',
                ...styles.textBox,
              }}
            />
          </View>
        </View> */
}

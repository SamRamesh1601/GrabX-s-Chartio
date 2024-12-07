import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Util/Theme';
import useNavScreen from '../../Hook/Common/useNavScreen';
import AppToast, {useToast} from '../../Components/AppToast';

export default function ForgetPassword() {
  const navigation = useNavigation();
  const [otp, setOTP] = useState(Array(6).fill(''));
  const refs = Array(6)
    .fill(0)
    .map((_, index) => useRef());
  const [userEmail, setUserEmail] = useState('');
  const [countdown, setCountdown] = useState(60);
  const route = useRoute();
  // useFocusEffect(
  //   React.useCallback(() => {
  //     setOTP(Array(6).fill(''));
  //   }, []),
  // );
  // useEffect(() => {
  //   if (countdown > 0) {
  //     const interval = setInterval(() => {
  //       setCountdown(prevCountdown => prevCountdown - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setOTP(Array(6).fill(''));
  //   }
  // }, [countdown, userEmail]);
  // const handleVerifyOTP = () => {
  //   const otpPattern = /^\d{6}$/;
  //   const enteredOTP = otp.join('');

  //   if (!otpPattern.test(enteredOTP)) {
  //     Alert.alert('Please enter a valid OTP.');
  //     return;
  //   }

  //   };
  // const resendOTP = () => {
  //   setOTP(Array(6).fill(''));
  //   if (refs[5].current) {
  //     refs[5].current?.blur();
  //   }
  // };

  const handleInputChange = (index: number, text: string) => {
    // if (!/^[0-9]*$/.test(text)) {
    //   return;
    // }
    // const newOTP = [...otp];
    // newOTP[index] = text;
    // setOTP(newOTP);
    // if (text && index < 5) {
    //   refs[index + 1].current.focus();
    // } else if (!text && index > 0) {
    //   refs[index - 1].current.focus();
    // } else if (!text && index === 0 && newOTP[index] === '') {
    //   refs[index].current.clear();
    // }
  };

  const {toastToggle, OnToastClose, OnToastOpen} = useToast();
  const {HandleAuthNavigate} = useNavScreen();

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
          <Text
            style={{
              ...styles.textStyle,
              textTransform: 'uppercase',
              fontFamily: 'Lexend-SemiBold',
              fontSize: 38,
            }}>
            Authentication
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              color: '#222',
              fontSize: 15,
              fontFamily: 'JetBrainsMono-Bold',
            }}>
            OTP has been send to a verified number
          </Text>
        </View>
        <View style={styles.secondbox}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.textinputStyles}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
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
                Resend Again
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
                borderRadius: 8,
                columnGap: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                onPress={OnToastOpen}
                style={{
                  ...styles.textStyle,
                  color: '#222',
                  fontSize: 13,
                }}>
                Create Toast Android
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <AppToast
        message={'Note: Save your Notes for Better Usage'}
        toastType={'Success'}
        visible={toastToggle}
        OnClose={OnToastClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  linearcolor1: {
    flex: 1,
  },
  viewbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkemail: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#273583',
    letterSpacing: 1,
  },
  registerd: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    letterSpacing: 0.8,
    fontWeight: 'normal',
    color: '#5F5858',
  },
  enterotp: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },
  secondbox: {
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'space-between',
  },
  textinputStyles: {
    borderColor: '#CCC',
    borderWidth: 0.2,
    borderRadius: 4,
    padding: 18,
    textAlign: 'center',
    color: '#FFFEC4',
    fontSize: 22,
    backgroundColor: '#222',
  },
  countdown: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    color: '#273583',
  },
  resendOTP: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    color: '#273583',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    width: 100,
  },
  linearcolor2: {
    borderRadius: 5,
    height: 45,
    width: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continuebtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    width: 100,
    height: 20,
    fontWeight: 'bold',
  },
  cancelbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    letterSpacing: 1,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginScreenStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
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
    paddingHorizontal: 8,
    rowGap: 8,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#222',
    fontFamily: 'Poppins-SemiBold',
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

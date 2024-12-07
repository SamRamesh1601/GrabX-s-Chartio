import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Fonts, SCREEN_HEIGHT, SCREEN_WIDTH, Theme} from '../../Util/Theme';
import AppImage from '../../Components/AppImage';
import {AppButtonOpacity} from '../../Components/AppButton';
import AppText from '../../Components/AppText';
import {useAppContext} from '../../Context/appContext';
import useNavScreen from '../../Hook/Common/useNavScreen';

export default function WelcomeScreen() {
  const {HandleCommonNavigate, HandleAuthNavigate} = useNavScreen();
  const {isAuthenticated} = useAppContext();

  return (
    <View style={styles.container}>
      <AppImage
        resizeMode={'contain'}
        path={
          'https://i.pinimg.com/736x/4a/68/fb/4a68fb111d7adcfb732bc11a3a8b002e.jpg'
        }
        imageType={'online'}
        wrapperstyle={styles.appImageStyles}
      />
      <View style={styles.textContainer}>
        <AppText text={'@Chartio'} style={styles.headerText} />
        <AppText
          text={
            'Grow your Talents with Our App , Community, Oppurnity is Best way of Conveying Quality'
          }
          style={{
            textAlign: 'center',
            color: '#888',
            fontSize: Fonts.ScaleFonts(15),
            fontFamily: Fonts.Regular.monoText,
          }}
          numberOfLines={3}
        />
      </View>
      <View style={styles.buttonContainer}>
        {!isAuthenticated ? (
          <>
            <AppButtonOpacity
              title="Register"
              onPress={() => HandleAuthNavigate('Register')}
              style={styles.registerButton}
              textStyle={styles.registerButtonText}
            />

            <AppButtonOpacity
              title="Login"
              onPress={() => HandleAuthNavigate('Login')}
              style={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          </>
        ) : (
          <AppButtonOpacity
            title="Let's Started"
            onPress={() => HandleCommonNavigate('User')}
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appImageStyles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2.25,
    borderRadius: 25,
  },
  textContainer: {
    rowGap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: Fonts.ScaleFonts(32),
    fontFamily: Fonts.Bold.primary,
    color: Theme.colors.black,
  },
  buttonContainer: {
    columnGap: 25,
    marginVertical: 15,
    justifyContent: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  loginButton: {
    paddingHorizontal: 40,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: Theme.colors.white,
    borderColor: Theme.colors.black,
    borderWidth: 1.2,
  },
  loginButtonText: {
    color: Theme.colors.black,
    fontFamily: Fonts.Regular.primary,
  },
  registerButton: {
    paddingHorizontal: 40,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: Theme.colors.black,
  },
  registerButtonText: {
    color: Theme.colors.white,
    fontFamily: Fonts.Regular.primary,
  },
});

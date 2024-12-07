import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Fonts, SCREEN_HEIGHT, SCREEN_WIDTH, Theme} from '../../Util/Theme';
import AppImage from '../../Components/AppImage';
import {useData} from '../../Util/constants';
import {DotProps, RenderContentProps} from './types';
import useNavScreen from '../../Hook/Common/useNavScreen';

export default function IntroScreen() {
  const scrollX = new Animated.Value(0);

  const {IntroData} = useData();
  const {HandleAuthNavigate} = useNavScreen();
  const HandleNavigation = () => {
    HandleAuthNavigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <RenderContent
        data={IntroData}
        scrollX={scrollX}
        handleNavigation={HandleNavigation}
      />
      <View>
        <RenderDot data={IntroData} scrollX={scrollX} />
      </View>
    </SafeAreaView>
  );
}

/**
 * @param data List Length to be calculate as Dots default 4
 * @param scrollX Animated Values to be
 * @param handleNavigation Navigation to Screen
 *
 * @abstract Render the Content of Page of Screen
 */

export const RenderContent = ({
  data,
  scrollX,
  handleNavigation,
}: RenderContentProps) => {
  const [completed, setCompleted] = React.useState(false);
  React.useEffect(() => {
    const listener = scrollX.addListener(({value}) => {
      if (Math.floor(value / SCREEN_WIDTH) === data.length - 1) {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    });
    return () => scrollX.removeListener(listener);
  }, [scrollX, SCREEN_WIDTH]);

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.slide}>
            <AppImage
              path={item.img}
              wrapperstyle={styles.image}
              resizeMode="cover"
              imageType="path"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleNavigation}
              accessibilityLabel={completed ? 'Start' : 'Skip'}>
              <Text style={styles.buttonText}>
                {completed ? 'Start' : 'Skip'}
              </Text>
              <View
                style={[
                  styles.buttonCorner,
                  {
                    backgroundColor: completed
                      ? Theme.colors.white
                      : Theme.colors.secondary,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

/**
 * @param data List Length to be calculate as Dots default 4
 * @param scrollX Animated Values to be
 *
 * @abstract Dot Container and Render the Dots
 */

export const RenderDot = ({data, scrollX}: DotProps) => {
  const dotPos = Animated.divide(scrollX, SCREEN_WIDTH);

  return (
    <View style={styles.dotContainer}>
      {data.map((_, index) => {
        const opacity = dotPos.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const dotSize = dotPos.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [8, 17, 8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[styles.dot, {opacity, width: dotSize, height: dotSize}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
  },
  slide: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 25,
    width: '90%',
    gap: 20,
  },
  title: {
    fontSize: Fonts.ScaleFonts(26),
    color: Theme.colors.black,
    fontFamily: Fonts.Bold.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'heavy',
  },
  description: {
    fontFamily: Fonts.Regular.monoText,
    fontSize: Fonts.ScaleFonts(14),
    textAlign: 'center',
    width: '90%',
    color: Theme.colors.black,
    lineHeight: 24,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Theme.colors.black,
  },
  buttonCorner: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: Fonts.ScaleFonts(11),
    color: Theme.colors.white,
    fontFamily: Fonts.Bold.primary,
  },
  dotContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginBottom: 40,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderRadius: 50,
    backgroundColor: 'black',
  },
});

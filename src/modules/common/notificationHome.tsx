import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  ImageBackground,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIcon from '../../Components/AppIcon';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../Util/Theme';

export default function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          ...styles.headerComponent,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: '#000',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...styles.iconStyle,
            paddingHorizontal: 12,
            backgroundColor: 'rgba(255,255,255,.3)',
            paddingVertical: 12,
            borderRadius: 50,
          }}>
          <AppIcon
            group={'Feat'}
            style={{
              ...styles.textStyle,
              fontSize: 20,
              color: '#FFF',
            }}
            name="home"
          />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.textStyle,
            color: 'white',
          }}>
          Notifications
        </Text>
        <TouchableOpacity
          style={{
            ...styles.iconStyle,
            paddingHorizontal: 12,
            backgroundColor: 'rgba(255,255,255,.3)',
            paddingVertical: 12,
            borderRadius: 50,
          }}>
          {/* MaterialIcons */}
          <AppIcon
            group={'MatIcon'}
            style={{
              ...styles.textStyle,
              fontSize: 20,
              color: '#FFF',
            }}
            name="filter-drama"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}>
        <Text
          style={{
            ...styles.textStyle,
            fontFamily: 'Poppins-SemiBold',
            marginVertical: 15,
            paddingHorizontal: 15,
            fontSize: 20,
          }}>
          Today
        </Text>
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          {Array(6)
            .fill(0)
            .map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 15,
                    backgroundColor: '#FFF',
                    shadowColor: '#00F',
                    flexDirection: 'row',
                    marginVertical: 5,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    elevation: 8,
                    shadowOffset: {
                      width: 2,
                      height: 2,
                    },
                    borderRadius: 6,
                    shadowRadius: 1,
                    shadowOpacity: 0.5,
                    columnGap: 25,
                  }}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      marginTop: 5,
                      position: 'relative',
                    }}>
                    <Image
                      source={{uri: item?.avatarurl}}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 250,
                        objectFit: 'cover',
                      }}
                    />
                    <AppIcon
                      group={'MatCom'}
                      style={{
                        color: '#FFF',
                        fontSize: 14,
                        padding: 8,
                        borderRadius: 150,
                        bottom: 0,
                        right: -10,
                        position: 'absolute',
                        backgroundColor: '#000',
                      }}
                      name="movie-star"
                    />
                  </View>
                  <View
                    style={{
                      width: '76%',
                      rowGap: 15,
                    }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 15,
                      }}
                      numberOfLines={3}>
                      {item.name}
                      <Text
                        style={{
                          ...styles.textStyle,
                          fontFamily: 'Poppins-Regular',
                          fontSize: 15,
                        }}>
                        {' '}
                        {'who you might know, is on shinestar '}
                      </Text>
                    </Text>
                    <View
                      style={{
                        padding: 5,
                        columnGap: 15,
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          backgroundColor: '#000',
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            ...styles.textStyle,
                            fontFamily: 'Lexend-Regular',
                            fontSize: 12,
                            color: 'white',
                          }}>
                          {'Follow'}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          backgroundColor: '#F00',
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            ...styles.textStyle,
                            fontFamily: 'Lexend-Regular',
                            fontSize: 12,
                            color: '#FFF',
                          }}>
                          {'Report'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          {Array(6)
            .fill(0)
            .map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 15,
                    backgroundColor: '#FFF',
                    shadowColor: '#000',
                    flexDirection: 'row',
                    marginVertical: 5,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    elevation: 5,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    borderRadius: 6,
                    shadowRadius: 0.5,
                    shadowOpacity: 2.5,
                    columnGap: 30,
                  }}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      marginTop: 5,
                      position: 'relative',
                    }}>
                    <Image
                      source={{uri: item?.avatarurl}}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 250,
                        objectFit: 'cover',
                      }}
                    />
                    <AppIcon
                      group={'MatCom'}
                      style={{
                        color: '#FFF',
                        fontSize: 14,
                        padding: 8,
                        borderRadius: 150,
                        bottom: 0,
                        right: -10,
                        position: 'absolute',
                        backgroundColor: '#000',
                      }}
                      name="movie-star"
                    />
                  </View>
                  <View
                    style={{
                      width: '76%',
                      rowGap: 15,
                    }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 15,
                        lineHeight: 26,
                      }}
                      numberOfLines={5}>
                      {item.name}
                      <Text
                        style={{
                          ...styles.textStyle,
                          fontFamily: 'Poppins-Regular',
                          fontSize: 15,
                        }}>
                        {' '}
                        {'and others shared 10 photos with you ❤️😁'}
                      </Text>
                    </Text>
                  </View>
                </View>
              );
            })}
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 15,
                    paddingHorizontal: 15,
                    backgroundColor: '#FFF',
                    shadowColor: '#000',
                    flexDirection: 'row',
                    marginVertical: 5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    elevation: 5,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    borderRadius: 6,
                    shadowRadius: 0.5,
                    shadowOpacity: 2.5,
                    columnGap: 15,
                  }}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      marginTop: 5,
                      position: 'relative',
                    }}>
                    <Image
                      source={{uri: item?.avatarurl}}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 250,
                        objectFit: 'cover',
                      }}
                    />
                    <AppIcon
                      group={'MatCom'}
                      style={{
                        color: '#FFF',
                        fontSize: 14,
                        padding: 8,
                        borderRadius: 150,
                        bottom: 0,
                        right: -10,
                        position: 'absolute',
                        backgroundColor: '#000',
                      }}
                      name="movie-star"
                    />
                  </View>
                  <View
                    style={{
                      width: '55%',
                      rowGap: 15,
                    }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 13,
                      }}
                      numberOfLines={2}>
                      {item.name}
                      <Text
                        style={{
                          ...styles.textStyle,
                          fontFamily: 'Poppins-Regular',
                          fontSize: 12,
                        }}>
                        {' '}
                        {'liked your comment ❤️'}
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                    }}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1494319207/photo/clouds-on-the-sky-sunset-weather.webp?s=1024x1024&w=is&k=20&c=GiM8sYBIf82-JP9_3jPObNGyjenEFk5zR8ayA9nEI8o=',
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 4,
                        objectFit: 'contain',
                      }}
                    />
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreenStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
    backgroundColor: 'white',
  },
  headerComponent: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  textStyle: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    opacity: 1,
  },
  containerStyleCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyleSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 18,
    color: '#FFF',
  },
});

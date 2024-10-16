import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from '../../components/AppIcon';
import {Fonts, SCREEN_HEIGHT} from '../../utils/Theme';
import {RenderItemProps, TinyChatProps, TinyPhotoGrapherProps} from './types';
import AppText from '../../components/AppText';
import Config from '../../utils/constants/constants_data.json';
import AppImage from '../../components/AppImage';

const TinyChat = ({data = {}, handleNaigation, key}: TinyChatProps) => {
  const item = data;
  if (!item) return;
  return (
    <TouchableOpacity
      key={key}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 2,
        marginVertical: 5,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#111',
        elevation: 2,
        shadowColor: '#555',
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity: 2,
        shadowRadius: 1,
      }}
      onPress={() => handleNaigation(item)}>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          borderRadius: 10,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppImage
            path={item.avatarurl}
            resizeMode="cover"
            imageType={'online'}
            wrapperstyle={{
              width: 52,
              height: 52,
              borderRadius: 50,
              marginVertical: 5,
              borderWidth: 2,
            }}
          />
          <View
            style={{
              ...styles.containerStyleCenter,
              // width: 14,
              position: 'absolute',
              // height: 15,
              bottom: '5%',
              right: 0,
              borderRadius: 250,
              borderBottomRightRadius: 5,
              overflow: 'hidden',
              backgroundColor: 'F9CEEE',
              padding: 2,
              paddingHorizontal: 6,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: '#000',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 8,
                textTransform: 'uppercase',
              }}>
              {item.lastCheckOut ? item.lastCheckOut : 'Now'}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '80%',
            paddingHorizontal: 10,
            paddingVertical: 5,
            rowGap: 10,
            borderRadius: 10,
            marginVertical: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              width: '100%',
              color: '#F9CEEE',
              // opacity: 0.7,
              fontFamily: 'Lexend-SemiBold',
              fontSize: 15,
              fontWeight: 400,
            }}>
            {item.name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              width: '100%',
              color: '#FFF',
              fontFamily: 'Lexend-Regular',
              fontSize: 12,
              fontWeight: 400,
            }}>
            {item.lastmsg
              ? item.lastmsg
              : `Hello this from the greeting to you ,   ${item.name}`}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.containerStyleCenter,
          paddingVertical: 10,
          padding: 12,
          columnGap: 10,
          backgroundColor: '#8E7AB5',
          backgroundColor: '#F9CEEE',
          flexDirection: 'row',
          borderRadius: 150,
        }}>
        <TouchableOpacity>
          <AppIcon
            group={'Octi'}
            style={{
              ...styles.iconStyle,
              fontSize: 16,
              color: 'rgba(5, 5, 5, .7)',
            }}
            name="pin"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppIcon
            group={'MatCom'}
            style={{
              ...styles.iconStyle,
              fontSize: 18,
              color: 'rgba(5, 5, 5, .7)',
            }}
            name="delete-outline"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const TinyPhotographer = ({item, firstName, index}: TinyPhotoGrapherProps) => {
  return (
    <View
      key={index}
      style={{
        ...styles.containerStyleCenter,
        rowGap: 6,
        marginHorizontal: 5,
        alignItems: 'center',
      }}>
      <View
        style={{
          ...styles.containerStyleCenter,
          width: 70,
          height: 70,
          borderRadius: 150,
          overflow: 'hidden',
        }}>
        <AppImage
          resizeMode="cover"
          path={item.avatarurl}
          imageType={'online'}
          wrapperstyle={{
            ...styles.containerStyleCenter,
            width: '90%',
            height: '90%',
            borderRadius: 150,
          }}
        />
      </View>
      <Text
        style={{
          ...styles.textStyle,
          color: '#F9CEEE',
          fontSize: 12,
          opacity: 0.6,
          fontFamily: 'JetBrainsMono-Regular',
        }}>
        {firstName ? firstName[0] : item.name}
      </Text>
      <View
        style={{
          ...styles.containerStyleCenter,
          width: 20,
          height: 20,
          borderRadius: 150,
          bottom: '25%',
          right: 0,
          position: 'absolute',
          backgroundColor: 'black',
        }}>
        <AppIcon
          group={'Feat'}
          style={{
            color: '#FFB3B3',
            fontSize: 10,
          }}
          name="music"
        />
      </View>
    </View>
  );
};

export default function ChatScreen() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = React.useState({});
  //   const handleNaigation = item => {
  //     setSelectedPerson(item);
  //     setOpenPopup(true);
  //   };

  //   const handleClosePopup = () => {
  //     setSelectedPerson({});
  //     setOpenPopup(false);
  //   };
  const [phtographerList, setPhotographerList] = React.useState(
    Config.photographers,
  );
  const [chatHistoryList, setChatHistoryList] = React.useState(
    Config.photographers,
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          ...styles.ProfileHeaderContainer,
          flexDirection: 'row',
          marginTop: 5,
          paddingVertical: 5,
          paddingHorizontal: 12,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontFamily: Fonts.Bold.monoText,
            fontSize: 25,
            fontWeight: 600,
          }}>
          Messages
        </Text>
        <View
          style={{
            ...styles.containerStyleCenter,
            flexDirection: 'row',
            columnGap: 20,
            padding: 8,
            paddingHorizontal: 15,
            backgroundColor: '#252525',
            borderRadius: 250,
          }}>
          <AppIcon
            group={'Octi'}
            style={{
              ...styles.iconStyle,
              fontSize: 20,
              color: '#FFF',
            }}
            name="search"
          />
          <TouchableOpacity>
            <AppIcon
              group={'Octi'}
              style={{
                ...styles.iconStyle,
                fontSize: 20,
                color: 'rgba(244, 244, 244, .5)',
              }}
              name="bell"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingVertical: 10,
            rowGap: 15,
            columnGap: 15,
            flexDirection: 'row',
          }}>
          <FlatList
            data={phtographerList}
            style={{
              width: '100%',
              columnGap: 25,
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any, index: number) => index.toString()}
            horizontal={true}
            renderItem={({item, index}: RenderItemProps) => {
              const firstName = item?.name?.split(' ');
              return (
                <TinyPhotographer
                  key={index}
                  index={index}
                  firstName={firstName}
                  item={item}
                />
              );
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
          }}>
          {Array.isArray(chatHistoryList) && chatHistoryList.length !== 0 ? (
            <View
              style={{
                width: '100%',
              }}>
              <FlatList
                data={chatHistoryList}
                contentContainerStyle={{
                  paddingHorizontal: 5,
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item: any, index: number) => index.toString()}
                renderItem={({item, index}: RenderItemProps) => {
                  function handleNaigation(item: any): void {
                    throw new Error('Function not implemented.');
                  }

                  return (
                    <TinyChat
                      key={index}
                      handleNaigation={item => handleNaigation(item)}
                      data={item}
                    />
                  );
                }}
              />
              {/* <View
                  style={{
                    width: '100%',
                    marginVertical: 0,
                  }}></View> */}
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                height: SCREEN_HEIGHT / 1.2,
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png',
                }}
                style={{
                  width: '100%',
                  height: '60%',
                  objectFit: 'contain',
                }}
              />
              {/* <Text
                style={{
                  color: '#EEE',
                  fontFamily: Fonts.Bold.secondary,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: 600,
                }}>
                No Messages
              </Text> */}
              <AppText
                style={{
                  color: '#888',
                  fontFamily: Fonts.Bold.monoText,
                  fontSize: Fonts.ScaleFonts(15),
                  fontWeight: 600,
                }}
                text={'Chat with Mentor or Friends'}
              />
            </View>
          )}
        </View>
      </View>
      {/* {openPopup && selectedPerson && (
        <ChatHistory
          openPopup={openPopup}
          selectedPerson={selectedPerson}
          goBack={handleClosePopup}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileHeaderContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfileSubContainerLeft: {
    width: '50%',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  tinyLogo: {
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  topHeaderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});

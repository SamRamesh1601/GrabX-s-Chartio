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
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DashBoardRenderItem, ShortsVideoRenderProps} from './type';
import AppImage from '../../Components/AppImage';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = height * 0.089;

// const VideoItem = React.memo(
//   ({
//     item,
//     indexValues,
//     animatedStyle,
//     isVideoPlaying,
//     handlePressIn,
//     goToReel,
//     handleLikedVideo,
//     isLikedVideo,
//     handlePopup,
//   }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const _onPlaybackStatusUpdate = useCallback(playbackStatus => {
//       if (playbackStatus.isBuffering) {
//         setIsLoading(true);
//       } else {
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 5000);
//       }
//     }, []);

//     const [cachedVideoURI, setCachedVideoURI] = useState(null);

//     useUpdateEffect(() => {
//       const fetchCacheData = async () => {
//         const uri = await useCacheVideo(
//           item.sources.replace('original_quality', '144p'),
//         );
//         setCachedVideoURI(uri);
//       };
//       fetchCacheData();
//     }, [item.sources]);

//     return (
//       <Animated.View
//         style={[
//           {
//             rowGap: 6,
//             backgroundColor: '#000',
//             alignItems: 'center',
//             borderRadius: 15,
//             marginHorizontal: 15,
//             width: width / 1.25,
//             overflow: 'hidden',
//             paddingVertical: 10,
//           },
//           animatedStyle,
//         ]}>
//         <TouchableOpacity
//           onPress={goToReel}
//           style={{width: '100%', height: height / 2.4}}
//           onLongPress={() => handlePressIn(indexValues)}>
//           {isVideoPlaying[indexValues] ? (
//             <Video
//               source={{uri: cachedVideoURI || item.sources}}
//               style={{width: '100%', height: '100%'}}
//               resizeMode="cover"
//               onBuffer={_onPlaybackStatusUpdate}
//               rate={1.0}
//               volume={1.0}
//               isLooping
//               onError={() => setIsLoading(false)}
//               repeat
//               bufferConfig={{
//                 minBufferMs: 15000,
//                 maxBufferMs: 50000,
//                 bufferForPlaybackMs: 2500,
//                 bufferForPlaybackAfterRebufferMs: 5000,
//               }}
//             />
//           ) : (
//             <Image
//               style={{width: '100%', height: '100%', objectFit: 'contain'}}
//               source={{uri: item.thumb}}
//             />
//           )}
//         </TouchableOpacity>

//         <View
//           style={{
//             ...styles.headerProfileContent,
//             ...styles.containerStyleSpaceBetween,
//             paddingHorizontal: 12,
//             paddingVertical: 13,
//             flexDirection: 'row',
//             position: 'absolute',
//             top: 5,
//             right: 0,
//             width: '100%',
//           }}>
//           <View
//             style={{
//               alignItems: 'center',
//               columnGap: 15,
//               flexDirection: 'row',
//             }}>
//             <Image
//               source={{
//                 uri: 'https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg',
//               }}
//               style={{
//                 width: 35,
//                 height: 35,
//                 borderRadius: 220,
//                 objectFit: 'cover',
//               }}
//             />
//             <View style={{justifyContent: 'center'}}>
//               <Text
//                 style={{
//                   ...styles.textStyle,
//                   color: '#F07',
//                   fontFamily: 'Lexend-Bold',
//                   fontSize: 16,
//                 }}>
//                 {item.title}
//               </Text>
//               <Text
//                 style={{
//                   ...styles.textStyle,
//                   color: '#FFF',
//                   fontFamily: 'Lexend-Regular',
//                   fontSize: 10,
//                   opacity: 1,
//                 }}>
//                 {item.subtitle}
//               </Text>
//             </View>
//           </View>
//           <TouchableOpacity onPress={() => handlePopup('VIEW')}>
//             <Entypo
//               style={{...styles.textStyle, fontSize: 20, color: '#FFF'}}
//               name="dots-three-vertical"
//             />
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             paddingHorizontal: 10,
//             paddingVertical: 10,
//             zIndex: 99,
//             position: 'absolute',
//             bottom: '20%',
//             ...styles.containerStyleCenter,
//             right: 10,
//             rowGap: 9,
//             borderRadius: 50,
//             backgroundColor: 'rgba(0,0,0,.5)',
//           }}>
//           <View style={{rowGap: 2, ...styles.containerStyleCenter}}>
//             <TouchableOpacity onPress={handleLikedVideo}>
//               <AntDesign
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 14,
//                   color: 'white',
//                   padding: 10,
//                   borderRadius: 50,
//                   backgroundColor: '#000',
//                 }}
//                 name={isLikedVideo ? 'star' : 'staro'}
//               />
//             </TouchableOpacity>
//             <Text style={{...styles.textStyle, fontSize: 12, color: 'white'}}>
//               1k
//             </Text>
//           </View>
//           <View style={{rowGap: 2, ...styles.containerStyleCenter}}>
//             <TouchableOpacity onPress={() => handlePopup('COMMENTS')}>
//               <MaterialCommunityIcons
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 15,
//                   color: 'white',
//                   padding: 10,
//                   borderRadius: 50,
//                   backgroundColor: '#000',
//                 }}
//                 name="android-messages"
//               />
//             </TouchableOpacity>
//             <Text style={{...styles.textStyle, fontSize: 10, color: 'white'}}>
//               19
//             </Text>
//           </View>
//           <View style={{rowGap: 5, ...styles.containerStyleCenter}}>
//             <Icon
//               style={{
//                 ...styles.textStyle,
//                 fontSize: 16,
//                 color: 'white',
//                 padding: 10,
//                 borderRadius: 50,
//                 backgroundColor: '#000',
//               }}
//               name="share-outline"
//             />
//           </View>
//         </View>

//         <View
//           style={{
//             position: 'absolute',
//             bottom: '3%',
//             right: 0,
//             width: '100%',
//             ...styles.containerStyleCenter,
//           }}>
//           <Text
//             style={{
//               ...styles.textStyle,
//               fontSize: 12,
//               width: '95%',
//               height: 45,
//               paddingHorizontal: 10,
//               borderRadius: 3,
//               lineHeight: 22,
//               color: '#FFF',
//             }}
//             numberOfLines={2}>
//             {item.description ||
//               'If enabling Corepack via the command fails, you can manually install the required package managers (like pnpm) globally'}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   },
// );

// const ShortsVideoRenderingComponent = React.memo(
//   ({shortVideoList, goToReel, handlePopup}: ShortsVideoRenderProps) => {
//     const [videos, setVideos] = React.useState(shortVideoList);
//     const [page, setPage] = React.useState(0);
//     const [loading, setLoading] = React.useState(false);

//     const [onRefresh, refreshing] = React.useState(false);
//     const [isVideoPlaying, setIsVideoPlaying] = React.useState({});
//     // const handlePressIn = values => {
//     //   setIsVideoPlaying({});
//     //   setIsVideoPlaying(
//     //     Object.fromEntries(videos.map((item, index) => [values, true])),
//     //   );
//     // };

//     // const fetchVideos = async page => {
//     //   const startIndex = page * 3;
//     //   return videos.slice(startIndex, (page + 1) * 3);
//     // };

//     // useUpdateEffect(() => {
//     //   const loadVideos = async () => {
//     //     setLoading(true);
//     //     const newVideos = await fetchVideos();
//     //     setVideos(prevVideos => [...prevVideos, ...newVideos]);
//     //     setLoading(false);
//     //   };
//     //   loadVideos();
//     // }, [page]);

//     // const animations = useRef(
//     //   shortVideoList.map(() => new Animated.Value(0)),
//     // ).current;

//     // const onViewableItemsChanged = useCallback(({viewableItems}) => {
//     //   viewableItems.forEach(item => {
//     //     Animated.spring(animations[item.index], {
//     //       toValue: 1.05,
//     //       useNativeDriver: true,
//     //     }).start();
//     //   });

//     //   animations.forEach((anim, index) => {
//     //     if (!viewableItems.find(vi => vi.index === index)) {
//     //       Animated.spring(anim, {
//     //         toValue: 0.8,
//     //         useNativeDriver: true,
//     //       }).start();
//     //     }
//     //   });
//     // }, []);

//     // const viewabilityConfig = useRef({
//     //   itemVisiblePercentThreshold: 50,
//     // }).current;

//     // const [likedVideos, setLikedVideos] = React.useState({});
//     // const handleLikedVideo = index => {
//     //   const onChangeDetails = {...likedVideos};
//     //   if (onChangeDetails.hasOwnProperty(index)) {
//     //     delete onChangeDetails[index];
//     //   } else {
//     //     onChangeDetails[index] = true;
//     //   }
//     //   setLikedVideos(onChangeDetails);
//     // };
//     return (
//       <FlatList
//         data={videos}
//         horizontal
//         keyExtractor={(item, index) => index.toString()}
//         showsHorizontalScrollIndicator={false}
//         renderToHardwareTextureAndroid
//         contentContainerStyle={{columnGap: 15}}
//         // onViewableItemsChanged={onViewableItemsChanged}
//         // viewabilityConfig={viewabilityConfig.current}
//         // refreshControl={
//         //   <RefreshControl
//         //     refreshing={refreshing}
//         //     tintColor={'#FFF'}
//         //     progressViewOffset={50}
//         //     onRefresh={onRefresh}
//         //   />
//         // }
//         decelerationRate={0}
//         onEndReached={() => !loading && setPage(page + 1)}
//         onEndReachedThreshold={0.5}
//         initialNumToRender={3}
//         maxToRenderPerBatch={2}
//         renderItem={({item, index}) => {
//           // const animatedStyle = {
//           //   transform: [{scale: animations[index]}],
//           // };
//           // const isLikedVideo = likedVideos
//           //   ? likedVideos.hasOwnProperty(index)
//           //   : false;
//           return (
//             <VideoItem
//             // item={item}
//             // indexValues={index}
//             // isVideoPlaying={isVideoPlaying}
//             // handlePressIn={handlePressIn}
//             // animatedStyle={animatedStyle}
//             // goToReel={goToReel}
//             // isLikedVideo={isLikedVideo}
//             // handleLikedVideo={() => handleLikedVideo(index)}
//             // handlePopup={val => handlePopup(val)}
//             />
//           );
//         }}
//       />
//     );
//   },
// );

// const TinyPhotographer = React.memo(
//   ({item, firstName, index}: DashBoardRenderItem) => {
//     return (
//       <View
//         key={index}
//         style={{
//           ...styles.containerStyleCenter,
//           rowGap: 6,
//           marginHorizontal: 5,
//           alignItems: 'center',
//         }}>
//         <LinearGradient
//           start={{x: 0, y: 1}}
//           colors={['#FFF', '#f06']}
//           style={{
//             ...styles.containerStyleCenter,
//             width: 70,
//             height: 70,
//             borderRadius: 150,
//             overflow: 'hidden',
//           }}>
//           <LoadingImageCache
//             source={item.avatarurl}
//             style={{
//               ...styles.containerStyleCenter,
//               width: '92%',
//               height: '92%',
//               borderRadius: 150,
//             }}
//           />
//         </LinearGradient>
//         <Text
//           style={{
//             ...styles.textStyle,
//             color: 'white',
//             fontSize: 12,
//             opacity: 0.6,
//           }}>
//           {firstName ? firstName[0] : item.name}
//         </Text>
//         <View
//           style={{
//             ...styles.containerStyleCenter,
//             width: 20,
//             height: 20,
//             borderRadius: 150,
//             top: 0,
//             right: 0,
//             position: 'absolute',
//             backgroundColor: '#F06',
//           }}>
//           <SimpleLineIcons
//             style={{
//               color: '#FFF',
//               fontSize: 10,
//             }}
//             name="music-tone-alt"
//           />
//         </View>
//       </View>
//     );
//   },
// );

export default function HomeScreen() {
  function handleChatScreen(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  // const [phtographerList, setPhotographerList] = React.useState(
  //   Config.photographers,
  // );

  // const [toggleOpenPopup, setToggleOpenPopup] = useState(false);
  // const [toggleOpenPopupType, setToggleOpenPopupType] = useState('');
  // const [postDetails, setPostDetails] = useState({});

  // const handleAccountDetails = (name, value) => {
  //   const changeAccountDetails = {...postDetails};
  //   changeAccountDetails[name] = value;
  //   setPostDetails(changeAccountDetails);
  // };

  // const handleAccountCreation = () => {
  //   setPostDetails({});
  //   setToggleOpenPopup(false);
  //   Animated.timing(animation, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const handleCloseAppointmentView = () => {
  //   setPostDetails({});
  //   setToggleOpenPopup(false);
  //   Animated.timing(animation, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const animation = new Animated.Value(0);

  // const handlePopup = type => {
  //   setToggleOpenPopupType(type);
  //   setToggleOpenPopup(true);
  //   Animated.timing(animation, {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const opacity = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1],
  // });
  // const [oldOffset, setOldOffset] = useState(true);
  // const {navigate} = useNavigation();

  // const handleChatScreen = path => {
  //   navigate(path);
  // };

  return (
    <View
      style={{
        backgroundColor: '#050505',
      }}>
      <View
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 15,
          rowGap: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            ...styles.containerStyleSpaceBetween,
          }}>
          <View
            style={{
              alignItems: 'center',
              rowGap: 15,
              columnGap: 10,
              flexDirection: 'row',
            }}>
            <AppImage
              path={
                'https://cdn.pixabay.com/photo/2023/07/31/13/42/woman-8161029_640.png'
              }
              style={{width: 40, height: 40, borderRadius: 220}}
              imageType={'online'}
            />
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 14,
                color: '#FFF',
              }}>
              mr_tony_stark
            </Text>
          </View>
          <View
            style={{
              ...styles.containerStyleCenter,
              flexDirection: 'row',
              columnGap: 20,
              padding: 8,
              paddingHorizontal: 15,
              backgroundColor: '#FFF',
              borderRadius: 250,
            }}>
            <TouchableOpacity onPress={() => handleChatScreen('Chat')}>
              <Icon
                style={{
                  ...styles.iconStyle,
                  fontSize: 20,
                  color: '#000',
                }}
                name="chatbubbles-outline"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChatScreen('Saved')}>
              <Octicons
                style={{
                  ...styles.iconStyle,
                  fontSize: 20,
                  color: 'rgba(244, 244, 244, .5)',
                }}
                name="bookmark"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChatScreen('Notification')}>
              <Octicons
                style={{
                  ...styles.iconStyle,
                  fontSize: 20,
                  color: '#000',
                }}
                name="bell"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              paddingVertical: 10,
              rowGap: 2,
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              columnGap: 15,
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
                color: '#F06',
                opacity: 0.85,
              }}>
              Good Morning
            </Text>
            <View
              style={{
                ...styles.containerStyleCenter,
                flexDirection: 'row',
                padding: 5,
                paddingHorizontal: 15,
                backgroundColor: '#F06',
                borderRadius: 259,
                columnGap: 10,
                rowGap: 10,
              }}>
              <TouchableOpacity onPress={() => handleChatScreen('NearBy')}>
                <Text
                  style={{
                    ...styles.textStyle,
                    fontSize: 10,
                    fontFamily: 'Poppins-Bold',
                    color: 'rgba(244, 244, 244, 1)',
                  }}>
                  Sync Permission
                </Text>
              </TouchableOpacity>

              <Icon
                style={{
                  ...styles.iconStyle,
                  fontSize: 22,
                  color: 'rgba(244, 244, 244, 1)',
                }}
                name="location-outline"
              />
            </View>
          </View>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: 26,
              fontFamily: 'Poppins-Bold',
              color: '#FFF',
              opacity: 0.85,
            }}>
            Aspring Actor
          </Text>
        </View>
      </View>
      <ScrollView style={{}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 10,
            rowGap: 15,
            columnGap: 15,
            flexDirection: 'row',
          }}>
          <ScrollView
            horizontal
            style={{
              width: '100%',
              columnGap: 25,
            }}>
            <View
              style={{
                ...styles.containerStyleCenter,
                rowGap: 5,
              }}>
              <AppImage
                imageType="online"
                path={
                  'https://cdn.pixabay.com/photo/2023/07/31/13/42/woman-8161029_640.png'
                }
                style={{
                  ...styles.containerStyleCenter,
                  width: '92%',
                  height: '92%',
                  borderRadius: 150,
                }}
              />
              <View
                style={{
                  ...styles.containerStyleCenter,
                  width: 25,
                  height: 25,
                  borderRadius: 150,
                  bottom: 20,
                  right: 0,
                  position: 'absolute',
                  backgroundColor: '#222',
                }}>
                <MaterialIcons
                  style={{
                    color: '#FFF',
                    fontSize: 10,
                  }}
                  name="add"
                />
              </View>
              <Text
                style={{
                  ...styles.textStyle,
                  color: 'white',
                  fontSize: 12,
                  opacity: 0.6,
                }}>
                Add Story
              </Text>
            </View>
            {/* {phtographerList.map((item, index) => {
              const firstName = item.name.split(' ');
              return (
                <TinyPhotographer
                  key={index}
                  index={index}
                  firstName={firstName}
                  item={item}
                />
              );
            })} */}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 15,
            padding: 10,
            paddingHorizontal: 5,
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {/* <ShortsVideoRenderingComponent
            goToReel={goToReel}
            handlePopup={val => handlePopup(val)}
            shortVideoList={Config.shortVideoList}
          /> */}
        </View>
        <View
          style={{
            ...styles.container,
            flex: 1,
          }}>
          {/* <ProfilePostComponent
            handlePopup={val => handlePopup(val)}
            postList={Config.PostList}
          /> */}
        </View>
        <View
          style={{
            paddingVertical: 110,
          }}></View>
        {/* <PostPopup
          editPopupType={toggleOpenPopupType}
          data={postDetails}
          openPopup={toggleOpenPopup}
          opacity={opacity}
          onClose={handleCloseAppointmentView}
          onSuccess={handleAccountCreation}
          onChangeEvnt={(name, value) => handleAccountDetails(name, value)}
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerProfileContent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
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
  textStyle: {
    fontFamily: 'Lexend-Regular',
    fontSize: 28,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
  CommentBox: {
    padding: 10,
    borderRadius: 6,
  },
});

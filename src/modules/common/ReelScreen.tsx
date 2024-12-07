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
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Video from 'react-native-video';
import ReelList from '../../Components/Tab/ReelList';
import {styles} from './style';

const {height: windowHeight} = Dimensions.get('window');

//   const renderItem = useCallback(
//     ({item, index}) => {
//       const videoUri = cachedUris[item.sources] || item.sources;

//       const interploted = shakeAnimation.interpolate({
//         inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
//         outputRange: [0, -15, 0, 15, 0, -15, 0],
//       });

//       return (
//         <Animated.View
//           style={[
//             styles.videoContainer,
//             {
//               transform: [
//                 {
//                   scale: scrollY.interpolate({
//                     inputRange: [
//                       (index - 1) * windowHeight,
//                       index * windowHeight,
//                       (index + 1) * windowHeight,
//                     ],
//                     outputRange: [0.8, 1, 0.8],
//                     extrapolate: 'clamp',
//                   }),
//                 },
//               ],
//             },
//           ]}>
//           {
//             <Video
//               source={{uri: videoUri}}
//               style={styles.video}
//               ref={ref => {
//                 videoRefs.current[index] = ref;
//               }}
//               paused={currentIndex !== index}
//               onLoad={() => {
//                 if (currentIndex === index) {
//                   videoRefs.current[index].seek(0);
//                 }
//               }}
//               onBuffer={playbackStatus =>
//                 onPlaybackStatusUpdate(playbackStatus, index)
//               }
//               rate={1.0}
//               volume={1.0}
//               isLooping
//               repeat
//               resizeMode="cover"
//               bufferConfig={{
//                 minBufferMs: 15000,
//                 maxBufferMs: 50000,
//                 bufferForPlaybackMs: 2500,
//                 bufferForPlaybackAfterRebufferMs: 5000,
//               }}
//             />
//           }
//           <View
//             style={{
//               ...styles.headerProfileContent,
//               ...styles.containerStyleSpaceBetween,
//               paddingHorizontal: 12,
//               paddingVertical: 13,
//               flexDirection: 'row',
//               position: 'absolute',
//               top: 5,
//               right: 0,
//               width: '100%',
//             }}>
//             <TouchableOpacity onPress={goBack}>
//               <View
//                 style={{
//                   padding: 4,
//                 }}>
//                 <AntDesign
//                   style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}
//                   name="arrowleft"
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlePopup('VIEW')}>
//               <Entypo
//                 style={{...styles.textStyle, fontSize: 20, color: '#FFF'}}
//                 name="dots-three-vertical"
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               paddingHorizontal: 20,
//               position: 'absolute',
//               bottom: '5%',
//               rowGap: 15,
//               right: 0,
//               width: '100%',
//             }}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 columnGap: 15,
//                 flexDirection: 'row',
//               }}>
//               <LoadingImageCache
//                 source={
//                   'https://cdn.pixabay.com/photo/2023/07/31/13/42/woman-8161029_640.png'
//                 }
//                 style={{width: 34, height: 34, borderRadius: 220}}
//               />
//               <View
//                 style={{
//                   columnGap: 8,
//                   flexDirection: 'row',
//                   borderRadius: 50,
//                   ...styles.containerStyleCenter,
//                 }}>
//                 <Text
//                   style={{
//                     ...styles.textStyle,
//                     color: '#FFF',
//                     fontWeight: '500',
//                     fontFamily: 'Lexend-Regular',
//                     fontSize: 16,
//                   }}>
//                   {item?.title || 'Sam Ramesh'}
//                 </Text>
//                 <MaterialIcons
//                   style={{
//                     ...styles.textStyle,
//                     fontSize: 22,
//                     color: 'white',
//                   }}
//                   name="verified"
//                 />
//               </View>
//             </View>

//             <View style={{justifyContent: 'center', rowGap: 12}}>
//               {/* <Text
//                             style={{
//                                 ...styles.textStyle,
//                                 color: '#FFF',
//                                 fontFamily: 'Lexend-Regular',
//                                 fontSize: 15,
//                                 lineHeight: 27,
//                                 width: '100%',
//                             }}
//                             numberOfLines={2}
//                         >
//                             {item?.subtitle || '"Mastering the Serve: Tennis Tips for Beginners 🏆 #Tennis #TennisTips #BeginnerGuide"'}
//                         </Text> */}

//               <Text numberOfLines={2}>
//                 {
//                   <HighlightHashTags
//                     style={{
//                       ...styles.textStyle,
//                       color: '#FFF',
//                       fontFamily: 'Lexend-Regular',
//                       fontSize: 15,
//                       lineHeight: 27,
//                       width: '100%',
//                     }}
//                     text={
//                       item?.subtitle ||
//                       'Mastering the Serve: Tennis Tips for Beginners 🏆 #Tennis #TennisTips #BeginnerGuide'
//                     }
//                   />
//                 }
//               </Text>
//             </View>
//           </View>

//           <View
//             style={{
//               paddingHorizontal: 10,
//               paddingVertical: 10,
//               zIndex: 99,
//               position: 'absolute',
//               bottom: '20%',
//               ...styles.containerStyleCenter,
//               right: 10,
//               rowGap: 25,
//               borderRadius: 50,
//             }}>
//             <View
//               style={{
//                 rowGap: 8,
//                 padding: 14,
//                 backgroundColor: '#000',
//                 backgroundColor: 'rgba(0,0,0,.5)',
//                 borderRadius: 50,
//                 ...styles.containerStyleCenter,
//               }}>
//               <SimpleLineIcons
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 25,
//                   color: 'white',
//                 }}
//                 name="user-follow"
//               />
//             </View>
//             <View
//               style={{
//                 rowGap: 8,
//                 padding: 14,
//                 backgroundColor: '#000',
//                 backgroundColor: 'rgba(0,0,0,.5)',
//                 borderRadius: 50,
//                 ...styles.containerStyleCenter,
//               }}>
//               <AntDesign
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 26,
//                   color: 'white',
//                 }}
//                 name="star"
//               />
//               <Text style={{...styles.textStyle, fontSize: 15, color: 'white'}}>
//                 1k
//               </Text>
//             </View>
//             <TouchableOpacity onPress={() => handleCommentPress(index)}>
//               <View
//                 style={{
//                   rowGap: 8,
//                   padding: 14,
//                   backgroundColor: 'rgba(0,0,0,.5)',
//                   borderRadius: 50,
//                   ...styles.containerStyleCenter,
//                 }}>
//                 <Animatable.View
//                   style={{
//                     transform: [{translateX: interploted}],
//                   }}>
//                   <MaterialCommunityIcons
//                     style={{
//                       ...styles.textStyle,
//                       fontSize: 25,
//                       color: 'white',
//                     }}
//                     name="android-messages"
//                   />
//                 </Animatable.View>
//                 <Text
//                   style={{...styles.textStyle, fontSize: 15, color: 'white'}}>
//                   19
//                 </Text>
//               </View>
//             </TouchableOpacity>
//             <View
//               style={{
//                 rowGap: 8,
//                 padding: 14,
//                 backgroundColor: '#000',
//                 backgroundColor: 'rgba(0,0,0,.5)',
//                 borderRadius: 50,
//                 ...styles.containerStyleCenter,
//               }}>
//               <Feather
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 25,
//                   color: 'white',
//                 }}
//                 name="send"
//               />
//             </View>
//             <View
//               style={{
//                 rowGap: 8,
//                 padding: 14,
//                 backgroundColor: '#000',
//                 backgroundColor: 'rgba(0,0,0,.5)',
//                 borderRadius: 50,
//                 ...styles.containerStyleCenter,
//               }}>
//               <Feather
//                 style={{
//                   ...styles.textStyle,
//                   fontSize: 25,
//                   color: 'white',
//                 }}
//                 name="bookmark"
//               />
//             </View>
//           </View>
//         </Animated.View>
//       );
//     },
//     [cachedUris, currentIndex, isLoadingReel],
//   );

const ReelScreen = () => {
  const [reelsList, setReelList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cachedUris, setCachedUris] = useState({});
  const videoRefs = useRef([]);
  const scrollY = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     const cacheAllVideos = async () => {
  //       const newCachedUris = {};
  //       for (const item of Config.ReelsVideoList) {
  //         const uri = await useCacheVideo(
  //           item.sources.replace('original_quality', '144p'),
  //         );
  //         newCachedUris[item.sources] = uri;
  //       }
  //       setCachedUris(newCachedUris);
  //     };
  //     cacheAllVideos();
  //   }, []);

  //   const shakeAnimation = useRef(new Animated.Value(0)).current;

  //   const handleCommentPress = index => {
  //     console.log(index);
  //     Animated.timing(shakeAnimation, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //     handlePopup('COMMENTS');
  //   };

  //   const [isLoadingReel, setIsLoadingReel] = useState({});
  //   const onPlaybackStatusUpdate = (playbackStatus, index) => {
  //     if (playbackStatus.isBuffering) {
  //       setIsLoadingReel({
  //         index: true,
  //       });
  //     } else {
  //       setTimeout(() => {
  //         setIsLoadingReel({});
  //       }, 5000);
  //     }
  //   };

  //   const onViewableItemsChanged = useCallback(({viewableItems}) => {
  //     if (viewableItems.length > 0) {
  //       setCurrentIndex(viewableItems[0].index);
  //     }
  //   }, []);

  //   const viewabilityConfig = {
  //     itemVisiblePercentThreshold: 50,
  //   };

  //   useUpdateEffect(() => {
  //     if (videoRefs.current[currentIndex + 1]) {
  //       videoRefs.current[currentIndex + 1].seek(0);
  //     }
  //   }, [currentIndex]);

  //   const [page, setPage] = React.useState(0);
  //   const [loading, setLoading] = React.useState(false);

  //   useUpdateEffect(() => {
  //     const loadVideos = async () => {
  //       setLoading(true);
  //       const newVideos = Config.ReelsVideoList;
  //       setReelList(prevVideos => [...prevVideos, ...newVideos]);
  //       setLoading(false);
  //     };
  //     loadVideos();
  //   }, [page]);

  const [toggleOpenPopup, setToggleOpenPopup] = useState(false);
  const [toggleOpenPopupType, setToggleOpenPopupType] = useState('');
  const [postDetails, setPostDetails] = useState({});

  //   const handleAccountDetails = (name, value) => {
  //     const changeAccountDetails = {...postDetails};
  //     changeAccountDetails[name] = value;
  //     setPostDetails(changeAccountDetails);
  //   };

  const handleAccountCreation = () => {
    console.log('working');
    setPostDetails({});
    setToggleOpenPopup(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseAppointmentView = () => {
    setPostDetails({});
    setToggleOpenPopup(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animation = new Animated.Value(0);

  //   const handlePopup = type => {
  //     setToggleOpenPopupType(type);
  //     setToggleOpenPopup(true);
  //     Animated.timing(animation, {
  //       toValue: 1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();

  //     console.log('working');
  //   };

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.mainScreenStyle}>
      <Animated.FlatList
        data={reelsList}
        renderItem={ReelList}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        // onViewableItemsChanged={onViewableItemsChanged}
        // viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => ({
          length: windowHeight,
          offset: windowHeight * index,
          index,
        })}
        snapToAlignment="start"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        // onEndReached={() => !loading && setPage(page + 1)}
        onEndReachedThreshold={0.5}
        initialNumToRender={3}
        maxToRenderPerBatch={2}
      />
    </View>
  );
};

export default ReelScreen;

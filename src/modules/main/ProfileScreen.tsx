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
  Linking,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReelList from '../../Components/Tab/ReelList';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = height * 0.089;

const Tab = createBottomTabNavigator();

// npm i babel-plugin-transform-remove-console

const ProfilePostTab = () => {
  return (
    <FlatList
      data={[]}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderToHardwareTextureAndroid
      contentContainerStyle={styles.imageGrid}
      onEndReachedThreshold={0.5}
      initialNumToRender={3}
      maxToRenderPerBatch={2}
      // columnWrapperStyle={{
      //   justifyContent: 'centter',
      //   alignItems: 'start',
      //   width: width,
      //   columnGap: 5,
      // }}
      renderItem={({item, index}) => {
        return <ShortVideoItem item={item} indexValues={index} />;
      }}
    />
  );
};

const ProfilePostScreen = () => <ReelList postList={Config.PostList} />;

export default function UserProfileScreen() {
  const [user, setUserData] = useState({
    name: 'Emily Jones',
    title: 'UI Designer at Democreative',
    location: 'Ankara, TR',
    posts: 86,
    followers: 29500,
    following: 35,
    profileImage:
      'https://cdn.pixabay.com/photo/2023/07/31/13/42/woman-8161029_640.png',
    images: [
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
    ],
  });
  const {navigate} = useNavigation();
  // const handleChatScreen = () => {
  //   goBack();
  //   navigate('Chat');
  // };
  // const handleCallNow = () => {
  //   try {
  //     const telUrl = `tel:${user?.phoneNumber || '9360908285'}`;
  //     Linking.openURL(telUrl).catch(error => {
  //       ToastMessaage('Incorrect Phone Number');
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     ToastMessaage('Error Calling Functionality');
  //   }
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons
            style={{
              color: '#050505',
            }}
            name="arrow-back-ios"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            style={{
              color: '#050505',
            }}
            name="dots-three-horizontal"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <LoadingImageCache
          source={user.profileImage}
          style={{
            ...styles.profilePic,
            width: 150,
            hight: 150,
          }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.title}>{user.title}</Text>
        <Text style={styles.location}>{user.location}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View
            style={{
              ...styles.verticalbar,
            }}></View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View
            style={{
              ...styles.verticalbar,
            }}></View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleChatScreen}>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 15,
                backgroundColor: '#F3D0D7',
                borderRadius: 250,
                columnGap: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                style={{
                  color: '#D20062',
                  fontFamily: 'Lexend-Regular',
                  fontSize: 20,
                  fontWeight: 600,
                  columnGap: 10,
                }}
                name="message-text-outline"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 25,
                backgroundColor: '#D20062',
                borderRadius: 8,
                columnGap: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                style={{
                  color: '#F3D0D7',
                  fontFamily: 'Lexend-Regular',
                  fontSize: 20,
                  fontWeight: 600,
                  columnGap: 10,
                }}
                name="user-plus"
              />
              <Text
                style={{
                  color: '#F3D0D7',
                  fontFamily: 'Lexend-SemiBold',
                  fontSize: 15,
                  fontWeight: 600,
                  columnGap: 10,
                }}>
                follow
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCallNow}>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 15,
                backgroundColor: '#F3D0D7',
                borderRadius: 250,
                columnGap: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                style={{
                  color: '#D20062',
                  fontFamily: 'Lexend-Regular',
                  fontSize: 18,
                  fontWeight: 600,
                  columnGap: 10,
                }}
                name="phone-call"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
        }}></View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#000'},
          tabBarContentContainerStyle: {backgroundColor: '#000'},
          tabBarActiveTintColor: '#D20062',
          tabBarItemStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarIndicatorStyle: {backgroundColor: '#D20062'},
          tabBarInactiveTintColor: '#FFF',
        }}>
        <Tab.Screen
          name="Reel"
          component={ProfilePostTab}
          options={{
            tabBarIcon: () => (
              <Fontisto name="fire" color={'#D20062'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={ProfilePostScreen}
          options={{
            tabBarIcon: () => (
              <Octicons name="container" color={'#D20062'} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
      <View
        style={{
          paddingVertical: 50,
        }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFF',
  },
  profilePic: {
    width: 150,
    height: 150,
    objectFit: 'center',
    borderRadius: 250,
  },
  name: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#f06',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
  },
  location: {
    fontSize: 13,
    fontFamily: 'Lexend-Regular',
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    columnGap: 25,
    rowGap: 25,
    borderRadius: 4,
    padding: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalbar: {
    paddingHorizontal: 1.2,
    borderRadius: 6,
    paddingVertical: 15,
    backgroundColor: '#F06',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#f06',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
    marginVertical: 10,
    columnGap: 25,
  },
  ButtonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  messageButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6200ea',
    borderRadius: 20,
    fontFamily: 'Poppins-SemiBold',
    paddingVertical: 10,
  },
  followButton: {
    backgroundColor: '#6200ea',
    borderRadius: 20,
    width: '45%',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#6200ea',
    textAlign: 'center',
  },
  imageGrid: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 6,
    columnGap: 6,
    backgroundColor: 'black',
  },
});

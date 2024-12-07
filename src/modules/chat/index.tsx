import {
  FlatList,
  Image,
  Linking,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from '../../Components/AppIcon';
import {Fonts, Theme} from '../../Util/Theme';
import {HeaderContainerProps, RenderItemProps} from './types';
import AppEmptyContainer from '../../Components/AppEmptyContainer';
import {style} from './style';
import useChat from '../../Hook/Chat/useChat';
import AppText from '../../Components/AppText';
import AppButton from '../../Components/AppButton';
import StatusComponent from '../../Components/Chat/StatusComponent';
import RecentChat from '../../Components/Chat/RecentChat';
import AppBottomSheet from '../../Components/AppBottomSheet';
import useAppBottomSheet from '../../Components/AppBottomSheet/hook';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import AppImage from '../../Components/AppImage';
import ChatHistory from '../../Components/Chat/ChatHistory';
import AppToast from '../../Components/AppToast';
import {HandlePickImage, HandlePickVideo} from '../../Util/function';
import {ScrollView} from 'react-native-gesture-handler';
import useNavScreen from '../../Hook/Common/useNavScreen';

const HeaderContainer = ({renderList, onClick}: HeaderContainerProps) => {
  return (
    <FlatList
      data={renderList}
      style={style.StatusFlatlistContainer}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any, index: number) => index.toString()}
      horizontal={true}
      renderItem={({item, index}: RenderItemProps) => {
        const firstName = item?.name?.split(' ').pop();
        return (
          <StatusComponent index={index} firstName={firstName} item={item} />
        );
      }}
    />
  );
};

export default function ChatScreen() {
  const {
    openPopup,
    selectedPerson,
    refreshing,
    phtographerList,
    chatPreviousHistoryList,
    chatHistoryList,
    setState: setChatState,
    HandleNavigation,
    HandleRefresh,
  } = useChat();

  function OnTest() {
    console.log('working');
  }
  const {HandleCommonNavigate, HandleAuthNavigate} = useNavScreen();

  const {bottomSheetRef, HandleClose, HandleOpen} = useAppBottomSheet();

  const Refresher = (
    <RefreshControl
      style={{backgroundColor: Theme.colors.primary}}
      refreshing={refreshing}
      onRefresh={HandleRefresh}
      progressBackgroundColor={Theme.colors.white}
      colors={['#ff0000', '#00ff00', '#0000ff']}
    />
  );

  const RenderItem = React.useCallback(
    ({item, index}: RenderItemProps) => (
      <RecentChat
        callback={item => {
          HandleOpen();
          HandleNavigation(item);
        }}
        data={item}
      />
    ),
    [chatHistoryList.length],
  );

  const RenderSelectedPerson = () => (
    <ScrollView style={{flex: 1, position: 'relative'}}>
      <View style={[style.ChatHistoryHeaders]}>
        <AppImage
          path={selectedPerson.image}
          resizeMode="cover"
          imageType={'online'}
          wrapperstyle={style.Logo}
        />
        <View style={style.FlexRow}>
          <AppText
            numberOfLines={1}
            text={selectedPerson.name}
            style={{
              color: Theme.colors.black,
            }}
          />
          <AppText
            numberOfLines={1}
            text={
              selectedPerson.lastCheckOut ? selectedPerson.lastCheckOut : 'now'
            }
            style={{
              fontSize: Fonts.ModerateScale(12),
              color: Theme.colors.gray,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Theme.colors.white,
            gap: 25,
          }}>
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'message-circle'}
          />
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'video'}
          />
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'headphones'}
          />
        </View>
      </View>
      <FlatList
        data={[
          ...chatPreviousHistoryList,
          ...chatPreviousHistoryList,
          ...chatPreviousHistoryList,
        ]}
        style={{flex: 1}}
        scrollEventThrottle={16}
        inverted
        stickyHeaderIndices={[1]}
        contentContainerStyle={{
          paddingVertical: 15,
        }}
        ListEmptyComponent={<AppEmptyContainer />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) =>
          item.id.toString() || index.toString()
        }
        refreshControl={Refresher}
        renderItem={({item, index}: RenderItemProps) => {
          const isSentMessage = 'user_1' === item.senderId;

          return (
            <View
              style={{
                width: '100%',
                paddingHorizontal: 18,
                paddingVertical: 5,
              }}>
              <View
                style={
                  isSentMessage
                    ? messageStyles.sentMessage
                    : messageStyles.receivedMessage
                }>
                {item.image && (
                  <Image
                    source={{uri: item.image}}
                    style={messageStyles.image}
                  />
                )}
                <AppText style={messageStyles.messageText}>{item.text}</AppText>
              </View>
            </View>
          );
        }}
      />
      <View style={style.textInputContainer}>
        <TouchableOpacity>
          <AppIcon name="happy-outline" size={30} color={Theme.colors.black} />
        </TouchableOpacity>
        <TextInput
          style={[style.textInput]}
          placeholder="Message"
          placeholderTextColor="#FFF"
          value={'Messages'}
        />
        <View
          style={{
            flexDirection: 'row',
            columnGap: 15,
            paddingVertical: 5,
          }}>
          <TouchableOpacity onPress={HandlePickImage}>
            <AppIcon
              name="image-outline"
              size={30}
              color={Theme.colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={HandlePickVideo}>
            <AppIcon
              name="videocam-outline"
              size={30}
              color={Theme.colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppIcon
              group={'Feat'}
              name="send"
              size={30}
              color={Theme.colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const [showInput, setShowInput] = React.useState(false);
  return (
    <View style={style.Container}>
      <StatusBar animated={true} backgroundColor={Theme.colors.secondary} />
      <View style={style.HeaderContainer}>
        <AppText text={'Messages'} style={style.HeaderText} />
        <View style={style.HeaderLeft}>
          <AppButton
            onPress={() => setShowInput(!showInput)}
            style={style.SearchContainer}>
            {showInput && (
              <TextInput
                value="Search"
                style={{
                  padding: 0,
                  color: '#222',
                  fontFamily: Fonts.Bold.primary,
                }}
              />
            )}
            <AppIcon group={'Octi'} color={Theme.colors.black} name="search" />
          </AppButton>
          <AppButton title={''} onPress={OnTest} textStyle={{}}>
            <AppIcon group={'Octi'} color={Theme.colors.white} name="bell" />
          </AppButton>
          <AppButton
            title={''}
            onPress={() => HandleCommonNavigate('User')}
            style={style.HomeIcon}>
            <AppIcon group={'Octi'} color={Theme.colors.black} name="home" />
          </AppButton>
        </View>
      </View>

      <FlatList
        data={chatHistoryList}
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<HeaderContainer renderList={phtographerList} />}
        ListEmptyComponent={<AppEmptyContainer />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) => index.toString()}
        refreshControl={Refresher}
        renderItem={RenderItem}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        keyboardBehavior={'interactive'}
        style={[{display: openPopup ? 'flex' : 'none'}, style.FlexContainer]}
        backgroundStyle={{backgroundColor: Theme.colors.white}}
        enablePanDownToClose
        snapPoints={['1%', '50%', '90%']}>
        <RenderSelectedPerson />
      </BottomSheet>
    </View>
  );
}

/**
 * Bottom Sheet Implementation
 */

{
}

const messageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Theme.colors.lightPrimary,
    borderRadius: 15,
    elevation: 0.2,
    borderBottomRightRadius: 0,
    paddingVertical: 8,
    rowGap: 10,
    paddingHorizontal: 12,
    maxWidth: '80%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.colors.secondary,
    borderRadius: 15,
    elevation: 0.2,
    borderBottomLeftRadius: 0,
    paddingVertical: 8,
    rowGap: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(12),
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  video: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  black: {
    color: '#222',
  },
  white: {
    color: '#FFF',
  },
  scrollToEndButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ea',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  listContentContainer: {
    marginVertical: 5,
    rowGap: 5,
  },
});

import {StyleSheet} from 'react-native';
import {Fonts, SCREEN_HEIGHT, Theme} from '../../Util/Theme';

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.colors.black,
  },
  FlexContainer: {
    flex: 1,
  },
  HeaderContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.black,
    padding: Fonts.ModerateScale(20),
    paddingHorizontal: Fonts.ModerateScale(20),
    flexDirection: 'row',
    borderBottomEndRadius: Fonts.ModerateScale(20),
    borderBottomLeftRadius: Fonts.ModerateScale(20),
  },
  HeaderLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.secondary,
    borderRadius: 250,
    columnGap: Fonts.ModerateScale(20),
  },
  HeaderText: {
    color: Theme.colors.white,
    fontFamily: Fonts.Bold.monoText,
    fontSize: Fonts.ModerateScale(22),
    fontWeight: 600,
  },
  IconContainer: {
    padding: Fonts.ModerateScale(10),
    paddingHorizontal: Fonts.ModerateScale(20),
  },
  SearchContainer: {
    backgroundColor: Theme.colors.white,
    justifyContent: 'space-between',
    elevation: 2,
    alignItems: 'center',
    padding: Fonts.ModerateScale(11),
    paddingHorizontal: Fonts.ModerateScale(15),
    flexDirection: 'row',
    borderRadius: 250,
    columnGap: Fonts.ModerateScale(20),
  },
  SearchIcon: {},
  BellIcon: {
    fontSize: Fonts.ModerateScale(18),
    color: Theme.colors.white,
  },
  HomeIcon: {
    backgroundColor: Theme.colors.magic,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Fonts.ModerateScale(12),
    paddingHorizontal: Fonts.ModerateScale(15),
    flexDirection: 'row',
    borderRadius: 250,
    columnGap: Fonts.ModerateScale(30),
  },
  Logo: {
    borderRadius: Fonts.ModerateScale(65),
    width: Fonts.ModerateScale(65),
    height: Fonts.ModerateScale(65),
  },
  HeaderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Fonts.ModerateScale(40),
    height: Fonts.ModerateScale(40),
  },
  StatusContainer: {
    backgroundColor: 'white',
  },
  StatusFlatlistContainer: {
    backgroundColor: Theme.colors.black,
  },
  ChatHistoryContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  ChatHistoryHeaders: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: Fonts.ModerateScale(8),
    paddingHorizontal: Fonts.ModerateScale(15),
    flexDirection: 'row',
  },
  FlexRow: {
    flex: 1,
    gap: 2,
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    padding: Fonts.ModerateScale(8),
  },
  ChatHistoryIcon: {
    fontSize: Fonts.ModerateScale(25),
    color: Theme.colors.black,
  },
  messageContainer: {
    maxWidth: '50%',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 5,
  },
  messageText: {
    color: 'white',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#007aff',
  },
  textInput: {
    flex: 1,
    color: Theme.colors.black,
    backgroundColor: Theme.colors.white,
  },
  textInputContainer: {
    borderTopWidth: 0.5,
    borderTopColor: Theme.colors.gray,
    shadowRadius: 2,
    shadowOffset: {
      width: 5,
      height: -10,
    },
    shadowColor: Theme.colors.black,
    elevation: 5,
    flexDirection: 'row',
    columnGap: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: Theme.colors.white,
  },
});

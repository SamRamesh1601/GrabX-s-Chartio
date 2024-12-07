import {StyleSheet} from 'react-native';
import {Fonts, SCREEN_HEIGHT, Theme} from '../../Util/Theme';

export const style = StyleSheet.create({
  Container: {
    marginHorizontal: Fonts.ModerateScale(6),
  },
  HeaderContainer: {
    padding: Fonts.ModerateScale(12),
    gap: Fonts.ModerateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  Logo: {
    borderRadius: 150,
    padding: 0,
    width: Fonts.ModerateScale(50),
    height: Fonts.ModerateScale(50),
  },
  LogoTxt: {
    color: Theme.colors.white,
    fontSize: Fonts.ModerateScale(10),
    fontFamily: Fonts.Bold.monoText,
    marginBottom: 15,
  },
  OverlayIcon: {
    padding: Fonts.ModerateScale(3),
    borderRadius: 150,
    bottom: '35%',
    right: '15%',
    position: 'absolute',
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MusicIcon: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(8),
  },
  ActiveIcon: {
    backgroundColor: Theme.colors.magic,
  },
  RecentChatContainer: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 2,
    marginVertical: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#555',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    width: '100%',
    shadowOpacity: 2,
    shadowRadius: 1,
  },
  RecentChatLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  RecentLogoOverlay: {
    position: 'absolute',
    bottom: '5%',
    right: 0,
    borderRadius: 250,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F9CEEE',
    padding: 2,
    paddingHorizontal: 6,
  },
  RecentLogoOverlayTxt: {
    color: Theme.colors.black,
    fontFamily: Fonts.Bold.primary,
    fontSize: Fonts.ModerateScale(6),
    textTransform: 'uppercase',
  },
});

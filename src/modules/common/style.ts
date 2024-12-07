import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../Util/Theme';

export const styles = StyleSheet.create({
  mainScreenStyle: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    width: '100%',
    height: SCREEN_HEIGHT,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  headerProfileContent: {
    width: '100%',
    paddingHorizontal: 15,
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
  CommentBox: {
    padding: 10,
    borderRadius: 6,
  },
});
